"use client"
import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'

const Footer: FC = () => {
  return (
    <footer className="relative z-10 overflow-hidden bg-white">
      {/* Soft animated red glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(220,38,38,0.18),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(220,38,38,0.12),transparent_50%)] animate-gradient-x -z-10" />

      {/* Elevated container */}
      <div className="container max-w-full pt-20">
        <div className="rounded-3xl bg-white/80 backdrop-blur-xl shadow-[0_30px_80px_-20px_rgba(220,38,38,0.25)] border border-red-100 p-10 md:p-14">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-10">

            {/* Logo & CTA */}
            <div className="md:col-span-4 flex flex-col items-center md:items-start gap-6">
              <Link href="/">
                <Image
                  src={getImgPath('/images/logo/logo.png')}
                  alt="logo"
                  width={160}
                  height={50}
                  unoptimized
                />
              </Link>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-center md:text-left text-gray-900">
                Ready to get started?
              </h2>

              <Link
                href="#"
                className="relative px-8 py-3 rounded-xl bg-red-600 text-white font-semibold shadow-lg hover:shadow-red-500/40 hover:-translate-y-0.5 transition-all duration-500"
              >
                Get Started
              </Link>
            </div>

            {/* Support */}
            <div className="md:col-span-4 flex flex-col items-center md:items-start gap-5 text-gray-700">
              <span className="text-xl font-bold text-gray-900">Support</span>

              <div className="flex gap-2">
                <span className="font-semibold">Phone:</span>
                <Link href="tel:+69025600020" className="hover:text-red-600 transition">
                  +(690) 2560 0020
                </Link>
              </div>

              <div className="flex gap-2">
                <span className="font-semibold">Email:</span>
                <Link href="mailto:info@ayanexpress.com" className="hover:text-red-600 transition">
                  info@ayanexpress.com
                </Link>
              </div>

              {/* Social icons */}
              <div className="flex gap-4 mt-4">
                {['facebook', 'twitter'].map((_, i) => (
                  <Link
                    key={i}
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-red-400/40 hover:bg-red-600 group transition-all"
                  >
                    <svg
                      className="w-5 h-5 fill-red-600 group-hover:fill-white transition"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="md:col-span-4 flex flex-col items-center md:items-end gap-4">
              <span className="font-bold text-2xl text-gray-900">
                Subscribe Newsletter
              </span>
              <p className="text-gray-600 text-center md:text-right">
                Stay updated with latest trends and products
              </p>

              <form className="flex w-full md:w-auto shadow-lg rounded-xl overflow-hidden">
                <input
                  type="email"
                  placeholder="Email*"
                  className="px-4 py-3 w-full md:w-[220px] outline-none text-gray-900 bg-white"
                />
                <button className="px-6 py-3 bg-red-600 text-white font-semibold hover:bg-red-700 transition">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-6 border-t border-red-100 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
            <div className="flex gap-4">
              <Link href="/#about" className="hover:text-red-600">About</Link>
              <Link href="/#services" className="hover:text-red-600">Services</Link>
              <Link href="/contact" className="hover:text-red-600">Contact</Link>
            </div>
            <p>© 2025 Orient Money Transfer Ltd T/A Ayan Exchange</p>
          </div>
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 18s ease infinite;
        }
      `}</style>
    </footer>
  )
}

export default Footer
