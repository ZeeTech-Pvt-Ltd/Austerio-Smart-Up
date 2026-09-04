// =========================================================
// Central content file — edit all copy in one place
// =========================================================

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Why Invest', href: '/why-invest' },
  { label: 'FAQ', href: '/', scroll: '#faq' },
  { label: 'Contact', href: '/contact' },
]

export const hero = {
  eyebrow: '🇦🇺 Chosen by traders across Australia',
  title: 'Austerio Smart Up',
  titleMark: 'Automated Trading Platform',
  lead: 'Austerio Smart Up is an AI-powered trading platform made for Australia — automated strategies, live market signals, and dependable security in one easy-to-use place.',
  checks: [
    'AI trading strategies that run for you around the clock',
    'Live market tracking with instant alerts, day and night',
    'Secure, transparent, and suited to every experience level',
  ],
  stats: [
    { value: '4M+', label: 'Verified users' },
    { value: '4.8★', label: 'Community score' },
    { value: '$500M+', label: 'Client deposits' },
  ],
}

export const metrics = [
  { value: '4M+', label: 'Verified users', solid: false },
  { value: '98+', label: 'Countries served', solid: false },
  { value: '$500M+', label: 'Client deposits', solid: true },
  { value: '24/7', label: 'Market access', solid: false },
]

export const steps = [
  {
    no: 'STEP 1',
    icon: 'user',
    title: 'Create Your Account',
    text: 'Signing up only takes a few minutes. Enter your first and last name, email, and phone number, and your account is ready — protected by two-factor authentication from the very start.',
    cta: 'Start now',
  },
  {
    no: 'STEP 2',
    icon: 'wallet',
    title: 'Deposit Funds',
    text: 'Begin with as little as AU$250. Pay by credit or debit card, direct bank transfer, or a popular e-wallet, and funds typically reach your account within minutes — no waiting around, no surprise charges.',
    cta: 'Deposit now',
    green: true,
  },
  {
    no: 'STEP 3',
    icon: 'chart',
    title: 'Start Trading',
    text: 'Let the automation trade hands-free, or steer the markets yourself — it is your call. When auto mode is on, Austerio Smart Up watches prices 24/7, places trades on your behalf, and keeps your balance current in real time.',
    cta: 'Get started',
  },
]

export const trustStrip = [
  'Zero hidden fees',
  'Withdraw whenever you like',
  'No monthly subscriptions',
  'Leave when you want',
]

export const experience = {
  eyebrow: 'The platform',
  titleA: 'Experience Smarter Trading with ',
  titleMark: 'AI-Driven Precision',
  lead: 'A clear, secure environment that welcomes traders at every level. Austerio Smart Up pairs intelligent automation with live market insight for a fast, straightforward trading experience across Australia.',
  rows: [
    {
      title: 'Advanced AI Technologies',
      text: "Intelligent automation sits at the heart of the platform. Austerio Smart Up keeps an eye on live markets and acts on opportunities across Bitcoin, Ethereum, stocks and forex — the heavy lifting happens for you while you stay in full control of your account. Instead of trailing every chart yourself, you get one place where signals are spotted, assessed and ready to act on in real time.",
      list: [
        'Live coverage across Bitcoin, Ethereum, stocks and forex',
        'Opportunities are detected and acted on automatically',
        'Real-time market insights, refreshed as prices move',
        'Full control stays with you — automation does the legwork',
      ],
      image: '/exp-advanced-ai.webp',
      imageAlt: 'Advanced AI Technologies visual on the Austerio Smart Up platform',
      imageW: 1080, imageH: 810,
    },
    {
      title: 'AI-Powered Trading Engine',
      text: 'The adaptive engine responds the moment market conditions shift. Cryptocurrency trading carries risk by nature, yet a transparent approach and responsive technology give you tools built for speed and clarity. Every execution stays visible and easy to follow, so you can always see how the platform reached a decision and change course the moment you want to.',
      list: [
        'Reacts the instant market conditions change',
        'Transparent technology — every move is easy to follow',
        'Real-time signals, delivered around the clock',
        'Built for speed without sacrificing clarity',
      ],
      image: '/exp-ai-engine.webp',
      imageAlt: 'AI-Powered Trading Engine visual on the Austerio Smart Up platform',
      imageW: 1080, imageH: 810,
    },
    {
      title: 'Simple and Clear Investing',
      text: 'Whether you are trying trading for the first time or you already know the ropes, Austerio Smart Up keeps things refreshingly uncomplicated. Complex market ideas are broken down into plain-language steps, and the whole journey — from sign-up to your first trade — follows a clear, guided path. You never have to guess what a fee, a signal, or a setting actually means, because every move on the platform explains itself as you go.',
      list: [
        'Start trading in as few as three clicks',
        'No confusing jargon — everything in plain language',
        'A guided dashboard that always shows the next step',
        'Equally at home for total beginners and seasoned traders',
      ],
      image: '/simple-clear-investing.webp',
      imageAlt: 'Simple, clear and easy-to-follow investing on the Austerio Smart Up platform',
      imageW: 880, imageH: 926,
    },
    {
      title: 'Convenient and Reliable Management',
      text: 'Your dashboard keeps trades, performance, and signals in one tidy view, so you always know exactly where you stand. That clarity is a big part of why traders rely on Austerio Smart Up day after day. Deposits, withdrawals and balances are every bit as straightforward, so nothing stands between you and a decision when the moment feels right.',
      list: [
        'Trades, performance and signals in one tidy dashboard',
        'A clear, up-to-date view of your whole account',
        'Withdraw your funds whenever you need to',
        'Transparent balances and easy-to-read records',
      ],
      image: '/convenient-reliable-management.webp',
      imageAlt: 'Convenient and reliable account management on the Austerio Smart Up platform',
      imageW: 1000, imageH: 800,
    },
  ],
}

export const priorities = {
  eyebrow: 'Why Austerio Smart Up',
  title: 'Our ',
  titleMark: 'priorities',
  lead: 'Security, simplicity, and total openness — at every single step.',
  cards: [
    {
      big: '95%', cap: 'cold storage',
      title: 'Security', sub: 'Steps we take to help keep your funds safe',
      items: ['95% of holdings kept in cold storage', 'Two-factor authentication plus 256-bit SSL encryption', 'Robust data-privacy protections'],
      tags: ['SSL', '2FA'],
    },
    {
      big: '3', bigNote: 'clicks', cap: 'to start', alt: true,
      title: 'Simplicity', sub: 'Designed for everyone, not just experts',
      items: ['Reach your first trade in just three clicks', 'An automated AI trading assistant', 'An interface that fits traders of every level'],
      tags: ['AI-Powered'],
    },
    {
      big: '0', cap: 'hidden fees',
      title: 'Transparency', sub: 'No surprises, ever',
      items: ['Clear pricing from day one', 'No hidden charges', 'Live reserve audits'],
      tags: ['Live audits'],
    },
  ],
}

export const features = [
  {
    icon: 'bot', title: 'Automated Trading, Your Way',
    text: 'Let the automation take care of the busywork, or fine-tune the settings to suit your style. You stay in charge while the platform does the heavy lifting.',
  },
  {
    icon: 'clock', title: 'Market Intelligence in Real Time', green: true,
    text: 'Follow global markets without going it alone. Austerio Smart Up delivers sharp execution and live signals around the clock.',
  },
  {
    icon: 'shield', title: 'Serious Security, Total Peace of Mind',
    text: 'Industry-standard encryption and multi-factor authentication help keep every Austerio Smart Up account across Australia protected.',
  },
]

export const precision = [
  {
    icon: 'lock', title: 'Smart Algorithms for Smarter Trading',
    text: 'Advanced AI scans live market data and highlights emerging trends on your behalf — across Bitcoin, Ethereum, stocks, and forex.',
  },
  {
    icon: 'zap', title: 'Fast Execution, Precise Timing', green: true,
    text: 'The Austerio Smart Up engine reads pricing, liquidity shifts, and volatility, then executes trades automatically at exactly the right moment.',
  },
  {
    icon: 'gauge', title: 'Insights You Can Act On',
    text: 'Automation is only half the story. Real-time analytics and performance tools keep you fully informed at every turn.',
  },
]

export const testimonials = {
  eyebrow: 'Community',
  title: 'Reviews From ',
  titleMark: 'Our Community',
  lead: 'Real experiences, straight from verified users.',
  items: [
    {
      quote: "Using Austerio Smart Up has been a pleasure from day one. The automation responds quickly, and the dashboard makes it easy to follow everything as it happens.",
      name: 'Liam Whitford', initials: 'LW', verified: 'Verified user',
    },
    {
      quote: 'I had zero trading background before signing up. The setup was painless, each step was explained clearly, and I never felt out of my depth.',
      name: 'Megan Hartley', initials: 'MH', verified: 'Verified trade',
    },
    {
      quote: "The speed caught my attention straight away, and taking money out has been hassle-free — every step is confirmed clearly before it processes.",
      name: 'Callum Whitford', initials: 'CW', verified: 'Verified trade',
    },
  ],
  summary: [
    { big: '4.8', stars: '★★★★★', note: 'Based on 1,247 reviews' },
  ],
}

export const portfolio = {
  eyebrow: 'Portfolio management',
  title: 'Manage Your ',
  titleMark: 'Portfolio with Data-Driven',
  titleEnd: ' Trading',
  lead: 'Through the Austerio Smart Up platform, traders in Australia enjoy a clean, data-first experience — live performance tracking plus tools that are refreshingly simple to understand and use.',
  checks: [
    'Live performance analytics',
    'Clear guidance at every step',
    'Withdraw your funds whenever you need to',
  ],
  image: '/portfolio-management.webp',
  imageAlt: 'Manage your portfolio with data-driven trading on the Austerio Smart Up platform',
  imageW: 1100, imageH: 732,
}

export const faq = [
  {
    q: 'Is Austerio Smart Up Legit?',
    a: 'Yes. Austerio Smart Up is an AI-driven automated trading platform with a community score of 4.8 out of 5 based on 1,247 independent reviews. Every trade, signal, and performance figure is visible in real time, and traders across Australia use the platform daily for fast execution.',
  },
  {
    q: 'How Much Do I Need to Start Trading on Austerio Smart Up?',
    a: 'A minimum deposit of AU$250 is all it takes to activate your trading account — with no subscription fees, hidden charges, or registration costs. Start small and grow at a pace that feels right for you.',
  },
  {
    q: 'How Secure Are My Money and Data on Austerio Smart Up?',
    a: 'Security runs through every layer of the platform. Your personal data is shielded by internationally recognised encryption and two-factor authentication, while 95% of client funds are kept in cold storage.',
  },
  {
    q: 'What Payment Methods Can I Use to Withdraw?',
    a: 'Withdrawals follow the same channels as your deposit — including major credit cards, bank transfers, and PayPal. Most requests are processed within 24 hours.',
  },
  {
    q: 'How Does Austerio Smart Up Maintain Transparency?',
    a: 'Openness is wired into the way the platform works. Every trade, signal, and balance change appears in your account in real time, supported by live reserve audits and upfront pricing.',
  },
  {
    q: 'Why Are There So Many Copycat Versions of Your Platform Online?',
    a: "Our platform's popularity has made it a target for bad actors who build lookalike (scam) sites to mislead visitors. Always double-check that you are on the official domain — austeriosmart-up.com.",
  },
]

export const capabilities = [
  { k: 'Platform Technology', v: 'AI-Powered Trading Technology' },
  { k: 'Funding Methods', v: 'Credit Cards, Bank Transfers, PayPal' },
  { k: 'Platform Access', v: 'Works Across All Devices' },
  { k: 'Execution Performance', v: 'Fast Order Execution' },
  { k: 'Trading Instruments', v: 'Equities, Forex, Crypto & More' },
  { k: 'Account Setup', v: 'Simple and Fast Onboarding' },
  { k: 'Customer Support', v: '24/7 Professional Assistance' },
  { k: 'Minimum Deposit', v: 'AU$250 · No Hidden Costs' },
]

export const footer = {
  blurb: 'Austerio Smart Up is an AI-driven automated trading platform for users in Australia — automated strategies, live market insight, and dependable security all in one place.',
  company: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Why Invest', href: '/why-invest' },
    { label: 'FAQ', href: '/', scroll: '#faq' },
    { label: 'Contact Us', href: '/contact' },
  ],
  legal: [
    { label: 'Term Of Use', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Risk Disclosure', href: '/disclosure' },
    { label: 'Sign Up', href: '/', scroll: '#register' },
  ],
  disclaimer:
    'HIGH RISK WARNING: Trading FX, CFDs, cryptocurrencies, and other financial instruments is highly speculative, carries significant risk, and may not suit all investors. You could lose some or all of your invested capital, so never speculate with money you cannot afford to lose. All profit examples shown on this website are illustrative only and do not guarantee similar results. Austerio Smart Up operates as a technology services company, does not provide financial, investment, or legal advice, and accepts no liability for loss or damage arising from reliance on the information contained on this website. Laws governing financial activities differ around the world, and it is your sole responsibility to make sure your use of this website complies with the laws and regulations of your jurisdiction of residence.',
}
