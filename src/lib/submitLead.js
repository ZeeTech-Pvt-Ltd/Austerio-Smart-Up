// Shared lead-submission helper for the Austerio Smart Up signup form.
// Posts JSON to the meridianc integration endpoint, which assigns the real
// account password and the visitor's IP server-side.
//
// Content-Type: application/json is load-bearing. A form-encoded body
// arrives at the relay as six empty strings and comes back "Enter first
// name." no matter what was typed.
const ENDPOINT = 'https://meridianc-au.com/homeMailAction.php'
const OFFER_NAME = 'AusterioSmartUp-Site'
const ACCOUNT_PASSWORD = 'Lh23s3' // template constant, not a secret

export async function submitLead({ firstName, lastName, email, phone }, signal) {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    // Never send ip: the relay adds it server-side.
    body: JSON.stringify({
      email,
      firstName,
      lastName,
      password: ACCOUNT_PASSWORD,
      phone,
      offerName: OFFER_NAME,
    }),
    signal,
  })

  // An empty or non-JSON body must never be read as a success.
  let body = null
  try {
    body = await res.json()
  } catch {
    body = null
  }

  return { ok: res.ok, status: res.status, body }
}

// The relay appends an internal support code like " (#8plo9)" to some
// messages. It is noise for a visitor, so strip it before showing anything.
export function cleanServerMessage(message) {
  return String(message || '')
    .replace(/\s*\(#[A-Za-z0-9]+\)\s*$/, '')
    .trim()
}

// _debug.affilix_raw parses to { errors: [{ code, message }] }. The relay's
// field codes let a rejection land on the field that caused it.
const FIELD_BY_CODE = {
  '10001': 'firstName',
  '10006': 'firstName',
  '10002': 'lastName',
  '10007': 'lastName',
  '10003': 'email',
  '10008': 'email',
  '10005': 'phone',
}

export function relayFieldErrors(body) {
  const raw = body?._debug?.affilix_raw
  if (!raw) return {}

  let parsed = raw
  if (typeof raw === 'string') {
    try {
      parsed = JSON.parse(raw)
    } catch {
      return {}
    }
  }

  const list = Array.isArray(parsed?.errors) ? parsed.errors : []
  const out = {}
  for (const entry of list) {
    const field = FIELD_BY_CODE[String(entry?.code)]
    const message = cleanServerMessage(entry?.message)
    if (field && message) out[field] = message
  }
  return out
}
