'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')

    const formData = new FormData(e.currentTarget)

    try {
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      })

      if (res.ok) {
        setStatus('success')
        e.currentTarget.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <h3
          className="text-2xl mb-4"
          style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--text-primary)' }}
        >
          Message Sent
        </h3>
        <p style={{ color: 'var(--text-secondary)' }}>
          Thank you for reaching out. We&apos;ll be in touch soon.
        </p>
      </div>
    )
  }

  return (
    <form
      name="contact"
      onSubmit={handleSubmit}
      className="flex flex-col gap-5"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>Don&apos;t fill this out: <input name="bot-field" /></label>
      </p>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="first-name" className="text-[0.68rem] uppercase tracking-[0.18em]" style={{ color: 'var(--text-muted)' }}>
            First name
          </label>
          <input
            id="first-name" type="text" name="first-name" required
            className="w-full px-4 py-3 border-0 border-b text-sm outline-none transition-colors duration-200 focus:border-b-2"
            style={{ background: 'transparent', borderColor: 'var(--border-strong)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="last-name" className="text-[0.68rem] uppercase tracking-[0.18em]" style={{ color: 'var(--text-muted)' }}>
            Last name
          </label>
          <input
            id="last-name" type="text" name="last-name" required
            className="w-full px-4 py-3 border-0 border-b text-sm outline-none transition-colors duration-200"
            style={{ background: 'transparent', borderColor: 'var(--border-strong)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-[0.68rem] uppercase tracking-[0.18em]" style={{ color: 'var(--text-muted)' }}>
          Email address
        </label>
        <input
          id="email" type="email" name="email" required
          className="w-full px-4 py-3 border-0 border-b text-sm outline-none"
          style={{ background: 'transparent', borderColor: 'var(--border-strong)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-[0.68rem] uppercase tracking-[0.18em]" style={{ color: 'var(--text-muted)' }}>
          Your message
        </label>
        <textarea
          id="message" name="message" required rows={6}
          className="w-full px-4 py-3 border text-sm outline-none resize-none"
          style={{ background: 'transparent', borderColor: 'var(--border-strong)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }}
        />
      </div>

      {status === 'error' && (
        <p className="text-sm" style={{ color: '#a33' }}>
          Something went wrong. Please try again.
        </p>
      )}

      <div className="mt-2">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex items-center gap-3 px-8 py-3.5 text-[0.75rem] uppercase tracking-[0.16em] font-medium transition-opacity duration-200 hover:opacity-80 disabled:opacity-50"
          style={{ background: 'var(--text-primary)', color: 'var(--bg-primary)', fontFamily: 'var(--font-body)' }}
        >
          {status === 'submitting' ? 'Sending...' : 'Send Message'} <span aria-hidden>→</span>
        </button>
      </div>
    </form>
  )
}
