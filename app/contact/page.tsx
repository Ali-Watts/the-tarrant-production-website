import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — The Tarrant Collective',
  description: 'Get in touch with The Tarrant Collective.',
}

export default function ContactPage() {
  return (
    <>
      {/* ── CONTACT HERO ── */}
      <section
        className="pt-48 pb-20 px-6"
        style={{ background: 'var(--bg-warm)' }}
      >
        <div className="max-w-2xl mx-auto text-center flex flex-col gap-6">
          <p
            className="text-[0.7rem] uppercase tracking-[0.25em] font-medium"
            style={{ color: 'var(--clr-accent)' }}
          >
            Get in touch
          </p>
          <h1
            className="text-5xl md:text-6xl"
            style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--text-primary)' }}
          >
            Contact
          </h1>
          <div
            className="w-12 h-px mx-auto mt-2"
            style={{ background: 'var(--clr-accent)' }}
          />
          <p className="text-base mt-2" style={{ color: 'var(--text-secondary)' }}>
            contact@thetarrantcollective.com
          </p>
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section
        className="py-20 px-6"
        style={{ background: 'var(--bg-secondary)' }}
      >
        <div className="max-w-xl mx-auto">
          {/* Netlify Forms — hidden form for bot detection */}
          <form name="contact" hidden>
            <input type="text" name="first-name" />
            <input type="text" name="last-name" />
            <input type="email" name="email" />
            <textarea name="message" />
          </form>

          {/* Actual form */}
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="flex flex-col gap-5"
          >
            <input type="hidden" name="form-name" value="contact" />

            {/* Honeypot */}
            <p className="hidden">
              <label>
                Don&apos;t fill this out: <input name="bot-field" />
              </label>
            </p>

            {/* Name row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="first-name"
                  className="text-[0.68rem] uppercase tracking-[0.18em]"
                  style={{ color: 'var(--text-muted)' }}
                >
                  First name
                </label>
                <input
                  id="first-name"
                  type="text"
                  name="first-name"
                  required
                  className="w-full px-4 py-3 border-0 border-b text-sm outline-none transition-colors duration-200 focus:border-b-2"
                  style={{
                    background: 'transparent',
                    borderColor: 'var(--border-strong)',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-body)',
                  }}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="last-name"
                  className="text-[0.68rem] uppercase tracking-[0.18em]"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Last name
                </label>
                <input
                  id="last-name"
                  type="text"
                  name="last-name"
                  required
                  className="w-full px-4 py-3 border-0 border-b text-sm outline-none transition-colors duration-200"
                  style={{
                    background: 'transparent',
                    borderColor: 'var(--border-strong)',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-body)',
                  }}
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-[0.68rem] uppercase tracking-[0.18em]"
                style={{ color: 'var(--text-muted)' }}
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 border-0 border-b text-sm outline-none"
                style={{
                  background: 'transparent',
                  borderColor: 'var(--border-strong)',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-body)',
                }}
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-[0.68rem] uppercase tracking-[0.18em]"
                style={{ color: 'var(--text-muted)' }}
              >
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-3 border text-sm outline-none resize-none"
                style={{
                  background: 'transparent',
                  borderColor: 'var(--border-strong)',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-body)',
                }}
              />
            </div>

            {/* Submit */}
            <div className="mt-2">
              <button
                type="submit"
                className="inline-flex items-center gap-3 px-8 py-3.5 text-[0.75rem] uppercase tracking-[0.16em] font-medium transition-opacity duration-200 hover:opacity-80"
                style={{
                  background: 'var(--text-primary)',
                  color: 'var(--bg-primary)',
                  fontFamily: 'var(--font-body)',
                }}
              >
                Send Message
                <span aria-hidden>→</span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
