import { useState, type FormEvent } from 'react';

const services = [
  {
    title: 'Websites',
    description:
      'Clean one-page or multi-page websites that explain your services clearly, build trust fast, and make it easy for visitors to contact you.',
  },
  {
    title: 'Booking Systems',
    description:
      'Appointment flows that help website visitors, phone leads, and DM inquiries move from interest to a booked conversation.',
  },
  {
    title: 'AI Receptionist',
    description:
      'AI receptionists that reply to missed calls, Instagram DMs, and after-hours inquiries while collecting the details needed to book the next step.',
  },
  {
    title: 'SEO & Maintenance',
    description:
      'Ongoing support for search visibility, content updates, and small site improvements that keep your presence sharp.',
  },
  {
    title: 'Complete Booking Presence',
    description:
      'A complete setup that combines a service-focused website, booking flow, SEO, and AI support so more people move from interest to appointment.',
  },
];

const audiences = [
  'Barbershops',
  'Dentists and dental clinics',
  'Beauty salons',
  'Massage studios',
  'Spas and wellness centers',
  'Medical and aesthetic clinics',
  'Fitness studios and personal trainers',
  'Tutors',
  'Car services',
  'Restaurants with reservations',
  'Other appointment-based local businesses',
];

const steps = [
  'Learn how customers find you today, from Google searches to DMs and missed calls.',
  'Build the right setup for your goals, whether that is a website, an AI receptionist, or both.',
  'Launch with clear service pages, trust signals, and a simple path to contact or book.',
  'Improve response speed and booking performance as your business grows.',
];

const trustPoints = [
  'Built for Greek businesses that rely on appointments and repeat visits.',
  'Focused on one result: fewer missed leads and more booked conversations.',
  'Simple to understand, easy to manage, and designed to convert.',
];

const stats = [
  'Fast launch',
  'Built for appointment businesses',
  'Website + AI setup',
  'Greek & English support',
];

const faqs = [
  {
    question: 'Do I need to already have a website?',
    answer: 'No. BookAgent.gr can help you launch your first professional website.',
  },
  {
    question: 'Can you improve my existing website?',
    answer: 'Yes. We can improve or rebuild your current site with a cleaner design and better structure.',
  },
  {
    question: 'What is an AI receptionist?',
    answer: 'An AI receptionist is a digital assistant that can help answer customer questions, collect details, and support your business when you are unavailable.',
  },
  {
    question: 'Do I need to know anything about AI?',
    answer: 'No. Everything is set up for you in a simple, business-friendly way.',
  },
];

const leadStorageKey = 'bookagent-leads';

function App() {
  const [submissionState, setSubmissionState] = useState<'idle' | 'success'>('idle');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const submission = {
      name: String(formData.get('name') ?? '').trim(),
      businessName: String(formData.get('businessName') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
      phone: String(formData.get('phone') ?? '').trim(),
      businessType: String(formData.get('businessType') ?? '').trim(),
      service: String(formData.get('service') ?? '').trim(),
      message: String(formData.get('message') ?? '').trim(),
      createdAt: new Date().toISOString(),
    };

    try {
      const storedSubmissions = JSON.parse(localStorage.getItem(leadStorageKey) ?? '[]') as typeof submission[];
      storedSubmissions.unshift(submission);
      localStorage.setItem(leadStorageKey, JSON.stringify(storedSubmissions.slice(0, 25)));
      event.currentTarget.reset();
      setSubmissionState('success');
    } catch {
      setSubmissionState('success');
    }
  }

  return (
    <div className="page-shell">
      <header className="hero">
        <nav className="topbar" aria-label="Primary">
          <div className="brand">
            <span className="brand-mark">BA</span>
            <span>BookAgent.gr</span>
          </div>
          <a className="nav-cta" href="#contact">
            Request a Free Consultation
          </a>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Your Business, Booked Smarter</p>
            <h1>Websites & AI receptionists that turn visitors, missed calls and DMs into booked appointments.</h1>
            <p className="lede">
              BookAgent.gr helps clinics, salons, barbershops, wellness studios, and service businesses create a
              sharper online presence and faster customer response. We build the website, structure the booking flow,
              and add AI support so more people take the next step.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Request a Free Consultation
              </a>
              <a className="button button-secondary" href="#services">
                See How It Works
              </a>
            </div>
            <div className="trust-strip" aria-label="Trust points">
              {trustPoints.map((point) => (
                <span className="trust-chip" key={point}>
                  {point}
                </span>
              ))}
            </div>
            <div className="hero-stats" aria-label="Key stats">
              {stats.map((stat) => (
                <div className="hero-stat" key={stat}>
                  {stat}
                </div>
              ))}
            </div>
          </div>

          <aside className="hero-panel" aria-label="Key message">
            <div className="hero-art" aria-hidden="true">
              <div className="hero-art-orbit">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="hero-art-core">
                <strong>Book smarter</strong>
                <span>website + AI receptionist</span>
              </div>
            </div>
            <div className="panel-hero">
              <p className="panel-kicker">Built for businesses that book by phone, DM, search, or message</p>
              <p className="panel-title">A cleaner online presence that looks credible, answers faster, and removes friction.</p>
            </div>
            <div className="panel-grid">
              <div className="panel-card">
                <span>01</span>
                <strong>Professional website</strong>
                <p>Show services, hours, and contact paths in a way customers can scan quickly.</p>
              </div>
              <div className="panel-card">
                <span>02</span>
                <strong>AI receptionist</strong>
                <p>Handle the common questions and booking details that arrive after hours or during busy periods.</p>
              </div>
              <div className="panel-card">
                <span>03</span>
                <strong>More bookings</strong>
                <p>Guide visitors toward an appointment request instead of leaving them unsure what to do next.</p>
              </div>
            </div>
          </aside>
        </div>
      </header>

      <main>
        <section className="section" id="problem">
          <div className="section-heading">
            <p className="eyebrow">Problem</p>
            <h2>Slow replies and unclear websites lose good leads.</h2>
          </div>
          <div className="content-card">
            <p>
              Many small businesses lose leads because the website does not explain the service clearly enough, or
              because a customer has to wait too long for a reply.
            </p>
            <p>
              Today’s customers expect a simple service page, quick answers, and a direct way to book or contact you
              without friction.
            </p>
            <p>
              BookAgent.gr helps your business turn those missed moments into real appointment requests.
            </p>
          </div>
        </section>

        <section className="section" id="services">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h2>What we build for appointment-based businesses.</h2>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Who It’s For</p>
            <h2>Designed for businesses that depend on bookings.</h2>
          </div>
          <div className="audience-grid">
            {audiences.map((audience) => (
              <div className="pill" key={audience}>
                {audience}
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">How It Works</p>
            <h2>Consultation → Website/flow design → AI receptionist setup → Launch & support</h2>
          </div>
          <div className="steps-grid">
            {steps.map((step, index) => (
              <article className="step-card" key={step}>
                <span className="step-number">0{index + 1}</span>
                <p>{step}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Packages</p>
            <h2>Clear offers without fixed prices yet.</h2>
          </div>
          <div className="content-card">
            <p>
              Every business has different booking volume, customer flow, and service needs. We shape the solution
              around your goals instead of forcing you into a one-size-fits-all package.
            </p>
            <ul className="bullet-list">
              <li>Website Starter</li>
              <li>Website + Booking Flow</li>
              <li>AI Receptionist Setup</li>
              <li>Complete BookAgent Setup</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Why BookAgent.gr</p>
            <h2>Clear structure, faster replies, more appointments.</h2>
          </div>
          <div className="spotlight-card">
            <p className="spotlight-kicker">AI Receptionist spotlight</p>
            <h3>Never miss another customer inquiry.</h3>
            <p>
              Keep conversations moving when calls are missed, DMs come in after hours, or your team is busy. The AI
              receptionist helps collect the right details so more people are ready to book.
            </p>
          </div>
          <div className="trust-grid">
            <article className="service-card">
              <h3>Sharper first impression</h3>
              <p>Your site looks more credible, more modern, and more aligned with the level of service you offer.</p>
            </article>
            <article className="service-card">
              <h3>Faster customer response</h3>
              <p>AI receptionists help keep conversations moving so opportunities do not disappear while you are busy.</p>
            </article>
            <article className="service-card">
              <h3>More booking-ready leads</h3>
              <p>Clear structure, strong messaging, and a focused CTA help more visitors take the next step.</p>
            </article>
          </div>
          <div className="content-card">
            <p>
              BookAgent.gr combines modern web design with practical AI tools for service businesses that cannot afford
              to miss calls, DMs, or appointment requests.
            </p>
            <p>
              You do not need to understand complicated technology. The goal is simple: make your business easier to
              trust, easier to contact, and easier to book.
            </p>
          </div>
        </section>

        <section className="section cta-band" aria-label="Call to action">
          <div className="cta-card">
            <div>
              <p className="eyebrow">Ready to stop losing leads?</p>
              <h2>Let’s build the website and AI support your business actually needs.</h2>
              <p className="cta-note">One clear message. One clear next step. Less friction for customers who want to book.</p>
            </div>
            <a className="button button-primary" href="#contact">
              Request a Free Consultation
            </a>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">FAQ</p>
            <h2>Common questions.</h2>
          </div>
          <div className="faq-grid">
            {faqs.map((faq) => (
              <article className="faq-card" key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>Tell us what kind of bookings you want more of.</h2>
          </div>
          <div className="contact-grid">
            <div className="content-card contact-copy">
              <p className="contact-eyebrow">Simple, direct, and built to convert.</p>
              <p>
                Tell us a little about your business and what you need. We will review your request and contact you
                with the best next step.
              </p>
              <div className="contact-list">
                <div>
                  <strong>Fast review</strong>
                  <p>We look at your business and the type of setup that fits best.</p>
                </div>
                <div>
                  <strong>Clear recommendation</strong>
                  <p>You get the next best step without unnecessary back-and-forth.</p>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              {submissionState === 'success' ? (
                <p className="form-success" role="status" aria-live="polite">
                  Thanks. Your request was saved and we’ll follow up with the next step.
                </p>
              ) : null}
              <label>
                Name
                <input type="text" name="name" placeholder="Your name" />
              </label>
              <label>
                Business name
                <input type="text" name="businessName" placeholder="Business name" />
              </label>
              <label>
                Email
                <input type="email" name="email" placeholder="you@example.com" />
              </label>
              <label>
                Phone number
                <input type="tel" name="phone" placeholder="+30 ..." />
              </label>
              <label>
                Business type
                <input type="text" name="businessType" placeholder="Barbershop, clinic, salon..." />
              </label>
              <label>
                Service interested in
                <input type="text" name="service" placeholder="Website, AI booking agent, complete setup" />
              </label>
              <label>
                Message
                <textarea name="message" rows={5} placeholder="Tell us a little about what you need" />
              </label>
              <button className="button button-primary" type="submit">
                Submit Request
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
