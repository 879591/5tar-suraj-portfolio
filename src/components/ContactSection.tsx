import React, { useState } from 'react';
import { Mail, MessageCircle, ArrowUpRight, MapPin, Phone, AlertCircle, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const [formNotice, setFormNotice] = useState<string | null>(null);

  const validate = () => {
    const nextErrors: { name?: string; email?: string; message?: string } = {};
    if (!name.trim() || name.trim().length < 2) {
      nextErrors.name = 'Please enter your full name (at least 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!message.trim() || message.trim().length < 10) {
      nextErrors.message = 'Please enter a message of at least 10 characters.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormNotice(null);

    if (!validate()) return;

    setFormNotice(
      'Your message fields are validated! Note: This portfolio is a frontend application without an automated email backend server, so your message was not automatically dispatched. Click below to open your email app or WhatsApp with your message pre-filled.'
    );
  };

  const prefilledMailto = `mailto:${PORTFOLIO_DATA.contact.email}?subject=${encodeURIComponent(
    `Portfolio Inquiry from ${name.trim() || 'Visitor'}`
  )}&body=${encodeURIComponent(
    `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`
  )}`;

  const prefilledWhatsApp = `https://wa.me/91${PORTFOLIO_DATA.contact.phone}?text=${encodeURIComponent(
    `Hello Suraj, I am ${name.trim()} (${email.trim()}). ${message.trim()}`
  )}`;

  return (
    <section
      id="contact"
      className="py-16 md:py-24 border-b border-zinc-200/80 dark:border-zinc-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-medium text-blue-600 dark:text-blue-400">
                09. Get In Touch
              </p>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 [text-wrap:balance]">
                Contact {PORTFOLIO_DATA.personal.fullName}
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Available for web development projects, freelance opportunities, AI/data-training initiatives, and developer learning roles.
              </p>
            </div>

            <div className="space-y-4 pt-2 border-t border-zinc-200 dark:border-zinc-800 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">Location</p>
                  <p className="font-medium text-zinc-900 dark:text-zinc-100">
                    {PORTFOLIO_DATA.contact.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">Email</p>
                  <a
                    href={PORTFOLIO_DATA.contact.mailtoUrl}
                    className="font-mono-tabular font-medium text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 underline-offset-4 hover:underline"
                  >
                    {PORTFOLIO_DATA.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">Phone / WhatsApp</p>
                  <a
                    href={`tel:+91${PORTFOLIO_DATA.contact.phone}`}
                    className="font-mono-tabular font-medium text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 underline-offset-4 hover:underline"
                  >
                    {PORTFOLIO_DATA.contact.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2 grid grid-cols-2 gap-3">
              <a
                href={PORTFOLIO_DATA.contact.mailtoUrl}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors whitespace-nowrap"
              >
                <Mail className="w-4 h-4" />
                <span>Email Me</span>
              </a>

              <a
                href={PORTFOLIO_DATA.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold text-zinc-900 dark:text-zinc-100 bg-white dark:bg-[#121215] border border-zinc-300 dark:border-zinc-700 hover:border-emerald-600 dark:hover:border-emerald-500 rounded-lg transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              <a
                href={PORTFOLIO_DATA.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300 bg-white dark:bg-[#121215] border border-zinc-200 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-zinc-500 rounded-lg transition-colors whitespace-nowrap"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={PORTFOLIO_DATA.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300 bg-white dark:bg-[#121215] border border-zinc-200 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-zinc-500 rounded-lg transition-colors whitespace-nowrap"
              >
                <span>Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Validated Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-[#121215] border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8">
              <h3 className="font-display text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-6">
                Fill out your details below. All fields are validated before submission.
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold text-zinc-800 dark:text-zinc-200 mb-1.5"
                  >
                    Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    placeholder="Your full name"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#F4F4F0]/60 dark:bg-zinc-900 border ${
                      errors.name
                        ? 'border-red-500 focus:outline-red-500'
                        : 'border-zinc-300 dark:border-zinc-700 focus:outline-blue-600'
                    } text-zinc-900 dark:text-zinc-100 transition-colors`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold text-zinc-800 dark:text-zinc-200 mb-1.5"
                  >
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="you@example.com"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#F4F4F0]/60 dark:bg-zinc-900 border ${
                      errors.email
                        ? 'border-red-500 focus:outline-red-500'
                        : 'border-zinc-300 dark:border-zinc-700 focus:outline-blue-600'
                    } text-zinc-900 dark:text-zinc-100 transition-colors`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold text-zinc-800 dark:text-zinc-200 mb-1.5"
                  >
                    Message <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errors.message)
                        setErrors({ ...errors, message: undefined });
                    }}
                    placeholder="Write your message or project inquiry here..."
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#F4F4F0]/60 dark:bg-zinc-900 border ${
                      errors.message
                        ? 'border-red-500 focus:outline-red-500'
                        : 'border-zinc-300 dark:border-zinc-700 focus:outline-blue-600'
                    } text-zinc-900 dark:text-zinc-100 transition-colors resize-y`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                >
                  Send Message
                </button>
              </form>

              {formNotice && (
                <div
                  role="status"
                  className="mt-6 p-4 rounded-xl bg-blue-50/90 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 text-xs text-zinc-800 dark:text-zinc-200 space-y-3"
                >
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <p className="leading-relaxed">{formNotice}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2.5 pt-1">
                    <a
                      href={prefilledMailto}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Open in Email App</span>
                    </a>
                    <a
                      href={prefilledWhatsApp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-zinc-900 dark:text-zinc-100 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Send via WhatsApp</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
