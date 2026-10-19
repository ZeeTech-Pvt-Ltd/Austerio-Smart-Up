'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from './icons.jsx'
import { Visa, Mastercard, PayPal, GooglePay, BankTransfer } from './PayLogos.jsx'
import PhoneNumberInput from './PhoneNumberInput.jsx'
import { countries } from '../data/countries.js'
import { submitLead, cleanServerMessage, relayFieldErrors } from '../lib/submitLead.js'

// Validation rules. The form is noValidate, so these are the only messages a
// visitor ever sees: browser tooltips would fire on a different schedule and
// produce two sentences for one problem.
const nameRe = /^(?!.*(?:tg|telegram|traffic|bot))[^@\d]{2,20}$/i
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const dialCodeOf = (iso) => countries.find((c) => c[0] === iso)?.[2] ?? 61

// Timezone -> ISO2, used to pre-select the country. Purely local: no IP
// geolocation request, so no visitor IP is handed to a third party for a
// convenience feature.
const TZ_COUNTRY = {
  'Australia/Sydney': 'AU', 'Australia/Melbourne': 'AU', 'Australia/Brisbane': 'AU',
  'Australia/Adelaide': 'AU', 'Australia/Perth': 'AU', 'Australia/Darwin': 'AU',
  'Australia/Hobart': 'AU', 'Australia/Lord_Howe': 'AU', 'Australia/Eucla': 'AU',
  'Pacific/Auckland': 'NZ', 'Pacific/Chatham': 'NZ', 'Pacific/Fiji': 'FJ',
  'Asia/Karachi': 'PK', 'Asia/Kolkata': 'IN', 'Asia/Colombo': 'LK', 'Asia/Dhaka': 'BD',
  'Asia/Kathmandu': 'NP', 'Asia/Dubai': 'AE', 'Asia/Riyadh': 'SA', 'Asia/Qatar': 'QA',
  'Asia/Kuwait': 'KW', 'Asia/Muscat': 'OM', 'Asia/Jerusalem': 'IL', 'Asia/Beirut': 'LB',
  'Europe/London': 'GB', 'Europe/Dublin': 'IE', 'Europe/Paris': 'FR', 'Europe/Berlin': 'DE',
  'Europe/Madrid': 'ES', 'Europe/Rome': 'IT', 'Europe/Amsterdam': 'NL', 'Europe/Brussels': 'BE',
  'Europe/Zurich': 'CH', 'Europe/Vienna': 'AT', 'Europe/Stockholm': 'SE', 'Europe/Oslo': 'NO',
  'Europe/Copenhagen': 'DK', 'Europe/Helsinki': 'FI', 'Europe/Warsaw': 'PL', 'Europe/Prague': 'CZ',
  'Europe/Athens': 'GR', 'Europe/Bucharest': 'RO', 'Europe/Istanbul': 'TR', 'Europe/Kyiv': 'UA',
  'Europe/Moscow': 'RU',
  'America/New_York': 'US', 'America/Chicago': 'US', 'America/Denver': 'US',
  'America/Los_Angeles': 'US', 'America/Phoenix': 'US', 'America/Anchorage': 'US',
  'Pacific/Honolulu': 'US', 'America/Toronto': 'CA', 'America/Vancouver': 'CA',
  'America/Mexico_City': 'MX', 'America/Sao_Paulo': 'BR', 'America/Argentina/Buenos_Aires': 'AR',
  'America/Santiago': 'CL', 'America/Bogota': 'CO', 'America/Lima': 'PE',
  'Asia/Shanghai': 'CN', 'Asia/Hong_Kong': 'HK', 'Asia/Taipei': 'TW', 'Asia/Seoul': 'KR',
  'Asia/Tokyo': 'JP', 'Asia/Singapore': 'SG', 'Asia/Kuala_Lumpur': 'MY', 'Asia/Jakarta': 'ID',
  'Asia/Bangkok': 'TH', 'Asia/Manila': 'PH', 'Asia/Ho_Chi_Minh': 'VN',
  'Africa/Johannesburg': 'ZA', 'Africa/Nairobi': 'KE', 'Africa/Lagos': 'NG', 'Africa/Cairo': 'EG',
}

function validateName(value, label) {
  const v = String(value || '').trim()
  if (!v) return `Please enter your ${label} name.`
  if (!nameRe.test(v)) return `Please enter a valid ${label} name.`
  return ''
}

function validateEmail(value) {
  const v = String(value || '').trim()
  if (!v) return 'Please enter your email address.'
  if (!emailRe.test(v)) return 'Please enter a valid email address.'
  return ''
}

function validatePhone(value) {
  const v = String(value || '').trim()
  if (!v) return 'Please enter your phone number.'
  // The dial code already sits beside the field, so a local trunk "0" would
  // be duplicated. Say so instead of silently stripping it.
  if (v.replace(/[^\d+]/g, '').startsWith('0')) {
    return 'Remove the leading 0, the country code is already selected.'
  }
  const digits = v.replace(/\D/g, '')
  if (!/^\d{6,15}$/.test(digits)) return 'Enter a valid phone number.'
  return ''
}

// E.164, e.g. +61412345678. The trunk "0" is rejected during validation, and
// the dial code is prepended once; a pasted full international number is not
// prefixed a second time.
function toE164(iso, raw) {
  const dial = String(dialCodeOf(iso))
  let digits = String(raw || '').replace(/\D/g, '')
  if (digits.startsWith(dial) && digits.length - dial.length >= 6) {
    digits = digits.slice(dial.length)
  }
  return digits ? `+${dial}${digits}` : ''
}

const fields = {
  firstName: { label: 'First Name', placeholder: 'Enter First Name', autoComplete: 'given-name' },
  lastName: { label: 'Last Name', placeholder: 'Enter Last Name', autoComplete: 'family-name' },
  email: { label: 'Email', type: 'email', placeholder: 'Enter your Email', autoComplete: 'email' },
  phone: { label: 'Phone', type: 'tel', placeholder: '0412 345 678', autoComplete: 'tel' },
}

const payMethods = [
  { name: 'VISA', Icon: Visa },
  { name: 'Mastercard', Icon: Mastercard },
  { name: 'PayPal', Icon: PayPal },
  { name: 'Google Pay', Icon: GooglePay },
  { name: 'Bank Transfer', Icon: BankTransfer },
]

export default function RegistrationForm() {
  const [values, setValues] = useState({
    firstName: '', lastName: '', email: '', phone: '', agree: false,
  })
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState({ kind: '', text: '' })
  const [processing, setProcessing] = useState(false)
  const [country, setCountry] = useState('AU')
  // Honeypot. Real visitors never see or fill this; bots that parse the DOM
  // and fill every input do, and the submit below is dropped.
  const [company, setCompany] = useState('')

  const mountedRef = useRef(true)
  const submittingRef = useRef(false)

  useEffect(() => {
    mountedRef.current = true
    return () => {
      mountedRef.current = false
    }
  }, [])

  // Pre-select the visitor's country from the browser timezone only. Any
  // unknown zone keeps the Australian default (the site's target market).
  useEffect(() => {
    try {
      const iso = TZ_COUNTRY[Intl.DateTimeFormat().resolvedOptions().timeZone]
      if (iso && countries.some(([code]) => code === iso)) setCountry(iso)
    } catch {
      /* keep the AU default */
    }
  }, [])

  const setValue = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        if (!prev[name]) return prev
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
    if (message.text) setMessage({ kind: '', text: '' })
  }

  const validateOne = (name) => {
    if (name === 'firstName') return validateName(values.firstName, 'first')
    if (name === 'lastName') return validateName(values.lastName, 'last')
    if (name === 'email') return validateEmail(values.email)
    if (name === 'phone') return validatePhone(values.phone)
    if (name === 'agree') return values.agree ? '' : 'Please accept the Privacy Policy and Terms of Use to continue.'
    return ''
  }

  const handleBlur = (name) => () => {
    const value = name === 'agree' ? values.agree : values[name]
    if (name === 'agree' || (typeof value === 'string' && value.trim())) {
      const error = validateOne(name)
      setErrors((prev) => ({ ...prev, [name]: error }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Double-submit guard, on top of the disabled button.
    if (submittingRef.current) return

    // Honeypot filled: pretend nothing happened, send nothing.
    if (company.trim()) return

    const nextErrors = {
      firstName: validateOne('firstName'),
      lastName: validateOne('lastName'),
      email: validateOne('email'),
      phone: validateOne('phone'),
      agree: validateOne('agree'),
    }
    setErrors(nextErrors)
    setMessage({ kind: '', text: '' })
    if (Object.values(nextErrors).some(Boolean)) return

    submittingRef.current = true
    setProcessing(true)

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 15000)

    try {
      const result = await submitLead(
        {
          firstName: values.firstName.trim(),
          lastName: values.lastName.trim(),
          email: values.email.trim(),
          phone: toE164(country, values.phone),
        },
        controller.signal,
      )

      if (!mountedRef.current) return

      // A non-2xx response is the service's problem, not a rejection of this
      // visitor's details; say something different from a validation error.
      if (!result.ok) {
        setMessage({
          kind: 'err',
          text: 'We could not reach the registration service just now. Please try again in a moment.',
        })
        return
      }

      // A 2xx with status "error" is a rejection. An empty or non-JSON body
      // is never treated as success and never reaches /thank-you.
      if (!result.body || result.body.status !== 'success') {
        const fieldErrors = relayFieldErrors(result.body)
        if (Object.keys(fieldErrors).length) {
          setErrors((prev) => ({ ...prev, ...fieldErrors }))
        }
        const rawMessage = typeof result.body?.message === 'string' ? result.body.message : ''
        setMessage({
          kind: 'err',
          text:
            Object.keys(fieldErrors).length > 0
              ? ''
              : rawMessage
                ? cleanServerMessage(rawMessage)
                : 'We could not complete your registration. Please check your details and try again.',
        })
        return
      }

      // Registered. A full navigation guarantees the confirmation page is
      // loaded fresh with its noindex metadata.
      window.location.assign('/thank-you')
    } catch {
      if (!mountedRef.current) return
      setMessage({
        kind: 'err',
        text: 'We could not reach the registration service just now. Please try again in a moment.',
      })
    } finally {
      clearTimeout(timeoutId)
      submittingRef.current = false
      if (mountedRef.current) setProcessing(false)
    }
  }

  const renderField = (name) => {
    const f = fields[name]
    return (
      <div key={name} className={`field ${errors[name] ? 'error' : ''}`}>
        <label htmlFor={name}>{f.label}</label>
        <input
          className={`input ${errors[name] ? 'invalid' : ''}`}
          type={f.type || 'text'}
          id={name}
          name={name}
          placeholder={f.placeholder}
          autoComplete={f.autoComplete}
          value={values[name]}
          onChange={(e) => setValue(name, e.target.value)}
          onBlur={handleBlur(name)}
          required
        />
        <p className="error-msg" id={`${name}-error`}>{errors[name]}</p>
      </div>
    )
  }

  return (
    <form id="regForm" onSubmit={handleSubmit} noValidate>
      <div className="field-row">
        {renderField('firstName')}
        {renderField('lastName')}
      </div>

      {renderField('email')}

      <div className={`field ${errors.phone ? 'error' : ''}`}>
        <label htmlFor="phone">Phone</label>
        <PhoneNumberInput
          country={country}
          onCountryChange={(iso) => {
            setCountry(iso)
            if (errors.phone) setErrors((prev) => ({ ...prev, phone: validatePhone(values.phone) }))
          }}
          value={values.phone}
          onValueChange={(v) => setValue('phone', v)}
          onBlur={handleBlur('phone')}
          invalid={Boolean(errors.phone)}
          placeholder="0412 345 678"
          id="phone"
          name="phone"
          autoComplete="tel"
        />
        <p className="error-msg" id="phone-error">{errors.phone}</p>
      </div>

      <div className={`field consent-field ${errors.agree ? 'error' : ''}`}>
        <label htmlFor="agree" className="consent">
          <input
            id="agree"
            name="agree"
            type="checkbox"
            checked={values.agree}
            onChange={(e) => setValue('agree', e.target.checked)}
            onBlur={handleBlur('agree')}
            required
          />
          <span>
            I agree to the <Link href="/privacy">Privacy Policy</Link> and{' '}
            <Link href="/terms">Terms of Use</Link>.
          </span>
        </label>
        <p className="error-msg" id="agree-error">{errors.agree}</p>
      </div>

      {/* Honeypot: off-screen, skipped by keyboard and password managers. */}
      <div className="hp-field" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      <button className="btn btn-primary btn-block" type="submit" disabled={processing}>
        {processing ? 'Processing...' : 'Sign Up Now'}
        {!processing && <ArrowRight />}
      </button>
      {message.text && <div className={`form-message ${message.kind}`}>{message.text}</div>}

      <div className="pay-row" aria-label="Accepted payment methods">
        {payMethods.map(({ name, Icon }) => (
          <span className="pay" key={name} title={name}>
            <Icon />
          </span>
        ))}
      </div>
    </form>
  )
}
