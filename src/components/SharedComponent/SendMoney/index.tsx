'use client'

import { useState } from 'react'
import Link from 'next/link'

type Country = {
  name: string
  code: string
  flag: string
}

const sendFromCountries: Country[] = [
  { name: 'United Kingdom', code: 'UK', flag: '🇬🇧' },
  { name: 'Germany', code: 'DE', flag: '🇩🇪' },
  { name: 'France', code: 'FR', flag: '🇫🇷' },
  { name: 'Italy', code: 'IT', flag: '🇮🇹' },
  { name: 'Spain', code: 'ES', flag: '🇪🇸' },
  { name: 'Netherlands', code: 'NL', flag: '🇳🇱' },
]

const receiveCountries: Country[] = [
  { name: 'Pakistan', code: 'PK', flag: '🇵🇰' },
  { name: 'France', code: 'FR', flag: '🇫🇷' },
  { name: 'Italy', code: 'IT', flag: '🇮🇹' },
  { name: 'Spain', code: 'ES', flag: '🇪🇸' },
  { name: 'Netherlands', code: 'NL', flag: '🇳🇱' },
]

export default function SendMoney() {
  const [from, setFrom] = useState(sendFromCountries[0])
  const [to, setTo] = useState(receiveCountries[0])
  const [amount, setAmount] = useState('')

  const [fromOpen, setFromOpen] = useState(false)
  const [toOpen, setToOpen] = useState(false)

  return (
    <section className="relative py-24 bg-gradient-to-br from-white via-red-50 to-white overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-red-400/15 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-red-300/10 to-transparent rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>

      <div className="container mx-auto max-w-5xl px-4 relative z-10">
        <div className="rounded-3xl border-2 border-red-100 bg-white/80 backdrop-blur-sm p-8 md:p-10 shadow-2xl hover:shadow-red-100/50 transition-all duration-500">

          {/* Header */}
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-gray-900 via-red-600 to-gray-900 bg-clip-text text-transparent animate-gradient">
              Send Money Instantly
            </h2>
            <p className="mt-3 text-gray-600 text-lg">
              Secure transfers from Europe to Pakistan
            </p>
          </div>

          {/* Form */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* From Dropdown */}
            <div className="relative group">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Send from
              </label>
              <div
                onClick={() => setFromOpen(!fromOpen)}
                className="flex items-center justify-between cursor-pointer rounded-xl bg-white border-2 border-gray-200 px-4 py-4 text-gray-900 hover:border-red-400 focus:outline-none focus:border-red-500 transition-all duration-300 group-hover:shadow-md"
              >
                <span className="font-medium">
                  {from.flag} {from.name}
                </span>
                <span className={`transform transition-transform duration-300 text-red-600 ${fromOpen ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </div>
              {fromOpen && (
                <ul className="absolute z-20 mt-2 w-full max-h-56 overflow-auto rounded-xl bg-white border-2 border-red-100 shadow-xl animate-slideDown">
                  {sendFromCountries.map((c) => (
                    <li
                      key={c.code}
                      className="px-4 py-3 cursor-pointer hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 transition-all duration-200 flex items-center gap-2 text-gray-900 font-medium"
                      onClick={() => {
                        setFrom(c)
                        setFromOpen(false)
                      }}
                    >
                      <span>{c.flag}</span>
                      <span>{c.name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* To Dropdown */}
            <div className="relative group">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Receive in
              </label>
              <div
                onClick={() => setToOpen(!toOpen)}
                className="flex items-center justify-between cursor-pointer rounded-xl bg-white border-2 border-gray-200 px-4 py-4 text-gray-900 hover:border-red-400 focus:outline-none focus:border-red-500 transition-all duration-300 group-hover:shadow-md"
              >
                <span className="font-medium">
                  {to.flag} {to.name}
                </span>
                <span className={`transform transition-transform duration-300 text-red-600 ${toOpen ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </div>
              {toOpen && (
                <ul className="absolute z-20 mt-2 w-full max-h-56 overflow-auto rounded-xl bg-white border-2 border-red-100 shadow-xl animate-slideDown">
                  {receiveCountries.map((c) => (
                    <li
                      key={c.code}
                      className="px-4 py-3 cursor-pointer hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 transition-all duration-200 flex items-center gap-2 text-gray-900 font-medium"
                      onClick={() => {
                        setTo(c)
                        setToOpen(false)
                      }}
                    >
                      <span>{c.flag}</span>
                      <span>{c.name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Amount Input */}
            <div className="group">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Amount
              </label>
              <input
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full rounded-xl bg-white border-2 border-gray-200 px-4 py-4 text-gray-900 font-medium placeholder-gray-400 hover:border-red-400 focus:border-red-500 focus:outline-none transition-all duration-300 group-hover:shadow-md"
              />
            </div>
          </div>

          {/* CTA Row */}
          <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <button className="w-full md:w-auto rounded-xl bg-gradient-to-r from-red-600 to-red-500 px-10 py-4 text-lg font-semibold text-white hover:from-red-700 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform">
              Send Now
            </button>

            <div className="flex gap-4">
              <Link
                href="https://apps.apple.com"
                target="_blank"
                className="flex items-center gap-3 rounded-xl border-2 border-gray-200 bg-white px-5 py-3 hover:border-red-400 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <span className="text-2xl">🍎</span>
                <span className="text-sm text-gray-900 leading-tight">
                  Download on the<br />
                  <strong className="text-red-600">App Store</strong>
                </span>
              </Link>

              <Link
                href="https://play.google.com/store/apps/details?id=com.rizremit.riz"
                target="_blank"
                className="flex items-center gap-3 rounded-xl border-2 border-gray-200 bg-white px-5 py-3 hover:border-red-400 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <span className="text-2xl">🤖</span>
                <span className="text-sm text-gray-900 leading-tight">
                  Get it on<br />
                  <strong className="text-red-600">Google Play</strong>
                </span>
              </Link>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-gray-600">
            <span className="text-red-600">🔒</span> Bank-grade security • Transparent fees • Trusted by thousands
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  )
}