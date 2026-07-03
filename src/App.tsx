import { FormEvent, useState } from 'react';

type Card = {
  title: string;
  text: string;
};

type Service = {
  title: string;
  label: string;
  text: string;
  points: string[];
};

type PricingPlan = {
  title: string;
  price: string;
  period: string;
  description: string;
  badge?: string;
  featured?: boolean;
  features: string[];
  footer: string;
};

type Step = {
  number: string;
  title: string;
  text: string;
};

type FAQ = {
  question: string;
  answer: string;
};

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Process', href: '#process' },
  { label: 'AI Receptionist', href: '#ai-receptionist' },
  { label: 'Contact', href: '#contact' }
];

const proofChips = [
  'Built for appointment businesses',
  'Website + AI setup',
  'Greek-market focused',
  'Fast first version'
];

const stats = [
  'Fast launch',
  'Website + AI setup',
  'Built for bookings',
  'Greek & English support'
];

const problems: Card[] = [
  {
    title: 'Outdated or unclear websites',
    text: 'Visitors arrive interested, but leave when services, trust signals, or next steps are hard to understand.'
  },
  {
    title: 'Busy teams miss conversations',
    text: 'Customers call, send DMs, or ask questions while your team is serving someone else.'
  },
  {
    title: 'Replies arrive too late',
    text: 'When inquiries wait until the next day, the customer may already have booked somewhere else.'
  },
  {
    title: 'Booking feels harder than it should',
    text: 'People move fast. If appointment requests are not simple, clear, and convenient, interest disappears.'
  }
];

const reasons: Card[] = [
  {
    title: 'Built to convert',
    text: 'Clear messaging, focused page structure, and strong calls-to-action designed around real appointment requests.'
  },
  {
    title: 'Website + booking flow',
    text: 'A professional website that guides visitors from services and trust-building content toward contacting or booking.'
  },
  {
    title: 'AI support after hours',
    text: 'AI assistance can help answer common questions, collect details, and keep new inquiries moving.'
  }
];

const pricingPlans: PricingPlan[] = [
  {
    title: 'Landing Page',
    price: 'From €450',
    period: 'one-time project',
    description:
      'A focused one-page website built to present your business clearly and turn visitors into appointment requests.',
    features: [
      'Premium responsive landing page',
      'Service-focused sections',
      'Clear appointment CTA',
      'Basic SEO structure',
      'Contact form included'
    ],
    footer: 'Best for businesses that need a clean, fast online presence.'
  },
  {
    title: 'Website up to 5 Pages',
    price: 'From €950',
    period: 'one-time project',
    description:
      'A complete website for businesses that need more structure, trust-building content, and a stronger customer journey.',
    features: [
      'Up to 5 core pages',
      'Home, Services, About, FAQ, Contact',
      'Conversion-focused copy structure',
      'Mobile-first design',
      'Launch-ready setup'
    ],
    footer: 'Best for clinics, salons, studios, restaurants, and service businesses.'
  },
  {
    title: 'AI Agent Setup',
    price: '€350 setup',
    period: '+ €120/month',
    description:
      'AI receptionist setup that can help with FAQs, lead capture, missed inquiries, and appointment requests.',
    features: [
      'Business information setup',
      'FAQ and lead capture flow',
      'Appointment request handling',
      'Greek and English support',
      'Monthly support and improvements'
    ],
    footer: 'Best for teams that miss calls, DMs, or after-hours inquiries.'
  },
  {
    title: 'Complete BookAgent Setup',
    price: 'From €1,450',
    period: '+ optional monthly support',
    description:
      'The premium full setup: website, booking journey, AI receptionist, launch support, and ongoing improvement path.',
    badge: 'Best overall value',
    featured: true,
    features: [
      'Landing page or multi-page website',
      'Booking-focused customer journey',
      'AI receptionist configuration',
      'Contact and lead capture flow',
      'Launch support included'
    ],
    footer: 'Best for serious appointment-based businesses that want the full system.'
  }
];

const services: Service[] = [
  {
    title: 'Website Presence',
    label: 'Website',
    text: 'A clean one-page website for businesses that need a professional online presence.',
    points: ['Responsive one-page design', 'Service overview', 'Contact-focused layout']
  },
  {
    title: 'Website + Booking Flow',
    label: 'Booking flow',
    text: 'A website structured around services, trust, contact, and appointment requests.',
    points: ['Conversion-focused sections', 'Booking request flow', 'Trust and FAQ content']
  },
  {
    title: 'AI Receptionist Setup',
    label: 'AI support',
    text: 'AI support that helps answer FAQs, collect details, and handle booking requests.',
    points: ['FAQ handling', 'Lead detail collection', 'After-hours inquiry support']
  },
  {
    title: 'Complete BookAgent Setup',
    label: 'Full setup',
    text: 'Website, booking flow, AI receptionist, and launch support together.',
    points: ['Website build', 'AI receptionist setup', 'Launch and improvement support']
  }
];

const industries = [
  'Barbershops',
  'Dentists',
  'Beauty salons',
  'Spas',
  'Aesthetic clinics',
  'Fitness studios',
  'Tutors',
  'Car services',
  'Restaurants with reservations',
  'Wellness studios'
];

const steps: Step[] = [
  {
    number: '01',
    title: 'Consultation',
    text: 'We understand your business, services, customers, and current booking flow.'
  },
  {
    number: '02',
    title: 'Website & Booking Flow',
    text: 'We design the page structure, messaging, and customer journey.'
  },
  {
    number: '03',
    title: 'AI Receptionist Setup',
    text: 'We configure AI support for common questions, lead capture, and appointment requests.'
  },
  {
    number: '04',
    title: 'Launch & Support',
    text: 'We launch, test, and improve the setup as your business grows.'
  }
];

const aiFeatures = [
  'Missed calls',
  'Instagram and message inquiries',
  'Common customer questions',
  'Appointment requests',
  'After-hours leads',
  'Basic customer information'
];

const faqs: FAQ[] = [
  {
    question: 'Do I need an existing website?',
    answer:
      'No. BookAgent.gr can create a new landing page or website from scratch based on your business, services, and appointment flow.'
  },
  {
    question: 'Can you improve my current website?',
    answer:
      'Yes. If you already have a website, we can review the structure, messaging, contact flow, and booking experience, then improve what matters most.'
  },
  {
    question: 'What is an AI receptionist?',
    answer:
      'An AI receptionist is a digital assistant that can help respond to common questions, collect customer details, and support appointment requests when your team is busy or unavailable.'
  },
  {
    question: 'Can it work for Greek businesses?',
    answer:
      'Yes. The setup is designed for appointment-based businesses in Greece and can support Greek and English communication depending on your needs.'
  },
  {
    question: 'Do I need to understand AI?',
    answer:
      'No. The goal is to keep the setup simple. We handle the structure and configuration so your business can use it without needing technical knowledge.'
  },
  {
    question: 'How much does it cost?',
    answer:
      'Pricing depends on the website scope, booking flow, AI receptionist needs, and launch support. The first step is a free consultation to understand what your business actually needs.'
  }
];

function App() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Later this form should be connected to Formspree, email, Supabase, or another backend.
    setSubmitted(true);
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <nav className="nav container" aria-label="Primary navigation">
          <a className="logo" href="#top" aria-label="BookAgent.gr home">
            BookAgent.gr
          </a>

          <div className="nav-links" aria-label="Page sections">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <a className="nav-cta" href="#contact">
            Request a Free Consultation
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="container hero-grid">
            <div className="hero-content">
              <p className="eyebrow">Modern booking systems for Greek appointment businesses</p>

              <h1>Websites & AI receptionists that turn interest into booked appointments.</h1>

              <p className="hero-subtitle">
                BookAgent.gr helps appointment-based businesses look professional online,
                respond faster, and stop losing leads from missed calls, DMs, and after-hours
                inquiries.
              </p>

              <div className="hero-actions" aria-label="Hero actions">
                <a className="button button-primary" href="#contact">
                  Request a Free Consultation
                </a>
                <a className="button button-secondary" href="#process">
                  See How It Works
                </a>
              </div>

              <div className="proof-chips" aria-label="BookAgent proof points">
                {proofChips.map((chip) => (
                  <span key={chip}>{chip}</span>
                ))}
              </div>
            </div>

            <aside className="hero-card" aria-label="Booking flow visual">
              <div className="hero-card-header">
                <span className="status-dot" aria-hidden="true" />
                <span>Live inquiry flow</span>
              </div>

              <div className="flow-card">
                <div>
                  <span className="flow-label">Step 1</span>
                  <strong>Website</strong>
                </div>
                <span aria-hidden="true">→</span>
              </div>

              <div className="flow-card">
                <div>
                  <span className="flow-label">Step 2</span>
                  <strong>Inquiry</strong>
                </div>
                <span aria-hidden="true">→</span>
              </div>

              <div className="flow-card highlight">
                <div>
                  <span className="flow-label">Step 3</span>
                  <strong>AI Receptionist</strong>
                </div>
                <span aria-hidden="true">→</span>
              </div>

              <div className="flow-card final">
                <div>
                  <span className="flow-label">Step 4</span>
                  <strong>Booked Appointment</strong>
                </div>
                <span className="check" aria-hidden="true">
                  ✓
                </span>
              </div>
            </aside>
          </div>
        </section>

        <section className="stats-strip" aria-label="BookAgent approach">
          <div className="container stats-grid">
            {stats.map((stat) => (
              <div key={stat} className="stat-item">
                {stat}
              </div>
            ))}
          </div>
        </section>

        <section className="section problem-section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">The problem</p>
              <h2>Many businesses lose leads before they ever become appointments.</h2>
              <p>
                A customer may be ready to book, but small gaps in your online presence or response
                flow can send them to the next option.
              </p>
            </div>

            <div className="card-grid four">
              {problems.map((problem) => (
                <article className="info-card" key={problem.title}>
                  <h3>{problem.title}</h3>
                  <p>{problem.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section why-section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Why BookAgent.gr</p>
              <h2>A practical setup for businesses that run on appointments.</h2>
            </div>

            <div className="card-grid three">
              {reasons.map((reason) => (
                <article className="feature-card" key={reason.title}>
                  <div className="feature-icon" aria-hidden="true">
                    ✦
                  </div>
                  <h3>{reason.title}</h3>
                  <p>{reason.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="section pricing-section">
          <div className="container">
            <div className="section-heading split">
              <div>
                <p className="eyebrow">Pricing</p>
                <h2>Simple packages for appointment-focused businesses.</h2>
              </div>
              <p>
                Start with a focused website, add an AI receptionist, or choose the complete setup
                when you want everything working together from day one.
              </p>
            </div>

            <div className="pricing-grid">
              {pricingPlans.map((plan) => (
                <article
                  className={`pricing-card${plan.featured ? ' featured' : ''}`}
                  key={plan.title}
                >
                  {plan.badge && <span className="pricing-badge">{plan.badge}</span>}

                  <div>
                    <h3>{plan.title}</h3>

                    <div className="pricing-price">
                      <strong>{plan.price}</strong>
                      <span>{plan.period}</span>
                    </div>

                    <p>{plan.description}</p>
                  </div>

                  <ul>
                    {plan.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>

                  <div className="pricing-footer">
                    <p>{plan.footer}</p>
                    <a className="button button-primary" href="#contact">
                      Request this package
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <p className="pricing-disclaimer">
              Demo pricing shown for now. Final pricing depends on business type, pages, booking
              flow, AI receptionist needs, integrations, and launch support.
            </p>
          </div>
        </section>

        <section id="services" className="section services-section">
          <div className="container">
            <div className="section-heading split">
              <div>
                <p className="eyebrow">Services</p>
                <h2>What we build</h2>
              </div>
              <p>
                Start with a focused website, add a better booking flow, or combine everything into
                one launch-ready setup.
              </p>
            </div>

            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <div>
                    <p className="service-price">{service.label}</p>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>

                  <ul>
                    {service.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section industries-section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Industries</p>
              <h2>Made for appointment-based businesses in Greece.</h2>
            </div>

            <div className="industry-grid">
              {industries.map((industry) => (
                <div className="industry-pill" key={industry}>
                  {industry}
                </div>
              ))}
            </div>

            <p className="industry-note">
              Don’t see your industry? If your business depends on appointments, we can build
              around it.
            </p>
          </div>
        </section>

        <section id="process" className="section process-section">
          <div className="container">
            <div className="section-heading split">
              <div>
                <p className="eyebrow">Process</p>
                <h2>How we work</h2>
              </div>
              <p>
                A clear path from consultation to launch, without overcomplicating the technology.
              </p>
            </div>

            <div className="steps">
              {steps.map((step) => (
                <article className="step-card" key={step.number}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="ai-receptionist" className="section ai-section">
          <div className="container ai-panel">
            <div>
              <p className="eyebrow">AI Receptionist</p>
              <h2>Never miss another customer inquiry.</h2>
              <p>
                The AI receptionist can help with missed calls, DMs, FAQs, appointment requests,
                after-hours leads, and basic customer information. It is designed to support your
                team, not replace the human service your customers expect.
              </p>
              <a className="button button-primary" href="#contact">
                Ask About AI Receptionist
              </a>
            </div>

            <div className="ai-feature-list" aria-label="AI receptionist use cases">
              {aiFeatures.map((feature) => (
                <div key={feature}>
                  <span aria-hidden="true">✓</span>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div className="container cta-inner">
            <h2>Your next customer should not get lost in a missed call or unclear website.</h2>
            <a className="button button-light" href="#contact">
              Request a Free Consultation
            </a>
          </div>
        </section>

        <section className="section faq-section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">FAQ</p>
              <h2>Questions before we start</h2>
            </div>

            <div className="faq-list">
              {faqs.map((faq) => (
                <details key={faq.question} className="faq-item">
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-grid">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Request a free consultation</h2>
              <p>
                Tell us what kind of appointment-based business you run and what you want to improve:
                your website, your booking flow, your response speed, or the full setup.
              </p>

              <div className="contact-card">
                <strong>Email</strong>
                <a href="mailto:hello@bookagent.gr">hello@bookagent.gr</a>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" autoComplete="name" required />
              </div>

              <div className="form-row">
                <label htmlFor="businessName">Business name</label>
                <input id="businessName" name="businessName" type="text" required />
              </div>

              <div className="form-row two-columns">
                <div>
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" autoComplete="email" required />
                </div>

                <div>
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" type="tel" autoComplete="tel" />
                </div>
              </div>

              <div className="form-row">
                <label htmlFor="businessType">Business type</label>
                <input
                  id="businessType"
                  name="businessType"
                  type="text"
                  placeholder="e.g. dental clinic, barbershop, beauty salon"
                  required
                />
              </div>

              <div className="form-row">
                <label htmlFor="interest">Interested in</label>
                <select id="interest" name="interest" defaultValue="Complete setup" required>
                  <option>Landing Page</option>
                  <option>Website up to 5 Pages</option>
                  <option>AI Receptionist</option>
                  <option>Complete setup</option>
                </select>
              </div>

              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us what you want to improve."
                />
              </div>

              <button className="button button-primary form-button" type="submit">
                Request My Free Consultation
              </button>

              {submitted && (
                <p className="success-message" role="status">
                  Thank you. Your request has been received.
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <a className="logo footer-logo" href="#top">
              BookAgent.gr
            </a>
            <p>Websites and AI receptionist setups for appointment-based businesses in Greece.</p>
          </div>

          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#pricing">Pricing</a>
            <a href="#process">Process</a>
            <a href="#ai-receptionist">AI Receptionist</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-contact">
            <a href="mailto:hello@bookagent.gr">hello@bookagent.gr</a>
            <span>© 2026 BookAgent.gr</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;