'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function ContactSection() {
  const toastRef = useRef(null);

  const showToast = () => {
    toastRef.current.classList.add('show');
    setTimeout(() => toastRef.current.classList.remove('show'), 3000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('[data-fade]').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      className="py-8 px-6 bg-lightBg dark:bg-[#010A1F] text-black dark:text-darkText font-[Outfit]"
    >
      <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto items-center">
        {/* Contact Image */}
        <div
          className="w-[300px] rounded-full overflow-hidden shadow-[0_0_30px_rgba(0,255,255,0.2)] transition-all duration-1000 opacity-0 translate-y-12"
          data-fade
        >
          <Image
            src="/assets/mydp1.jpg"
            alt="MD Tasleem Aarif"
            width={300}
            height={300}
            className="w-full object-contain"
            loading="lazy"
          />
        </div>

        {/* Contact Form */}
        <div
          className="max-w-xl w-full text-center md:text-left transition-all duration-1000 opacity-0 translate-y-12"
          data-fade
        >
          <h2 className="text-4xl font-bold text-cyan-300 mb-2">📬 Let's Get in Touch</h2>
          <p className="text-lg text-yellow-600 dark:text-yellow-400 mb-6">
            Have a project or opportunity? I'd love to hear from you!
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              showToast();
            }}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              className="bg-[#1c1c1c] text-white placeholder-gray-400 px-4 py-3 rounded-md focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="bg-[#1c1c1c] text-white placeholder-gray-400 px-4 py-3 rounded-md focus:outline-none"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              required
              className="bg-[#1c1c1c] text-white placeholder-gray-400 px-4 py-3 rounded-md focus:outline-none"
            />
            <button
              type="submit"
              className="py-3 px-8 rounded-full font-semibold text-black bg-cyan-400 hover:bg-cyan-300 transition-all"
            >
              Send Message
            </button>
          </form>

          <div
            ref={toastRef}
            className="toast hidden mt-4 px-6 py-3 rounded-lg bg-[#1c1c1c] text-green-400 shadow-[0_0_20px_#0f0]"
          >
            ✅ Message sent successfully!
          </div>
        </div>
      </div>

      {/* Toast animation */}
      <style jsx>{`
        .show {
          display: block !important;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from {
            transform: translateY(10px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .toast {
          display: none;
        }

        .visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}
