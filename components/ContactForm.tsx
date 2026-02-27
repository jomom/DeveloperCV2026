'use client';

import React from 'react';

const ContactForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message!');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-[11px] font-bold uppercase tracking-[0.2em] text-high/70 mb-3">
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            placeholder="Your Name"
            className="w-full rounded-xl border border-muted/10 bg-surface/30 px-5 py-4 text-high transition-all focus:bg-surface/50 focus:ring-1 focus:ring-high/20 focus:outline-none placeholder:text-muted/40 font-serif"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-[11px] font-bold uppercase tracking-[0.2em] text-high/70 mb-3">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            placeholder="email@example.com"
            className="w-full rounded-xl border border-muted/10 bg-surface/30 px-5 py-4 text-high transition-all focus:bg-surface/50 focus:ring-1 focus:ring-high/20 focus:outline-none placeholder:text-muted/40 font-serif"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-[11px] font-bold uppercase tracking-[0.2em] text-high/70 mb-3">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          required
          placeholder="How can I help you?"
          className="w-full resize-none rounded-2xl border border-muted/10 bg-surface/30 px-5 py-4 text-high transition-all focus:bg-surface/50 focus:ring-1 focus:ring-high/20 focus:outline-none placeholder:text-muted/40 font-serif"
        ></textarea>
      </div>

      <div className="pt-4">
        <button
          type="submit"
          className="group relative inline-flex items-center gap-3 px-10 py-4 bg-[#DFD0B8] text-[#222831] font-bold text-xs uppercase tracking-[0.2em] rounded-full transition-all duration-200 
            shadow-[0_5px_0_0_#948979] 
            hover:shadow-[0_2px_0_0_#948979] 
            hover:translate-y-[3px]
            active:translate-y-[5px] 
            active:shadow-none
            font-sans"
        >
          Send Message
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 20 20" 
            fill="currentColor" 
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
          >
            <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;