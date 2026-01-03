'use client'
import { useState } from 'react'

const faqs = [
  {
    q: 'How do I send money to Pakistan with AyaanExchange?',
    a: 'Create and verify your AyaanExchange account, choose Pakistan as the receiving country, enter the amount, select a payout method (bank transfer, cash pickup or mobile wallet), add recipient details and pay by card or bank transfer.',
  },
  {
    q: 'How long does a transfer to Pakistan usually take?',
    a: 'Most transfers are processed quickly, with many payouts delivered within minutes or a short processing window.',
  },
  {
    q: 'What payout methods are available in Pakistan?',
    a: 'Recipients can receive money via bank transfer, cash pickup at partner locations or supported mobile wallets.',
  },
  {
    q: 'Is sending money with AyaanExchange safe?',
    a: 'Yes. AyaanExchange uses secure technology, identity verification and compliance checks to protect your data and funds.',
  },
  {
    q: 'What details do I need about my recipient?',
    a: 'You need your recipient full name, address and bank, wallet or cash pickup details, plus a valid mobile number.',
  },
]

export default function FaqSection() {
  const [active, setActive] = useState(0)

  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-red-50/30 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #ef4444 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="absolute top-20 right-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto max-w-4xl px-4 relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className='flex gap-3 items-center justify-center mb-6' style={{ animation: 'fadeIn 0.6s ease-out' }}>
            <div className='relative'>
              <div className='absolute inset-0 bg-red-500 rounded-full blur-md opacity-50 animate-pulse'></div>
              <div className='relative w-2 h-2 bg-red-500 rounded-full'></div>
            </div>
            <span className='text-red-600 font-semibold tracking-widest uppercase text-xs'>
              Got Questions?
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ animation: 'fadeIn 0.8s ease-out 0.2s both' }}>
            Frequently Asked <span className="text-red-600">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ animation: 'fadeIn 1s ease-out 0.4s both' }}>
            Clear, simple answers about sending money to Pakistan
          </p>
        </div>

        {/* FAQ Cards */}
        <div className="space-y-4">
          {faqs.map((item, index) => {
            const open = active === index

            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-300 bg-white shadow-sm hover:shadow-lg
                  ${open ? 'ring-2 ring-red-500 shadow-lg' : 'ring-1 ring-gray-200'}
                `}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <button
                  onClick={() => setActive(open ? 0 : index)}
                  className="flex w-full items-center justify-between px-6 py-6 text-left group"
                >
                  <h3 className={`text-lg md:text-xl font-semibold pr-4 transition-colors duration-300
                    ${open ? 'text-red-600' : 'text-gray-900 group-hover:text-red-600'}
                  `}>
                    {item.q}
                  </h3>

                  <span
                    className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-xl font-bold transition-all duration-300
                      ${
                        open
                          ? 'bg-red-600 text-white rotate-45 scale-110'
                          : 'bg-red-50 text-red-600 group-hover:bg-red-100'
                      }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out
                    ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}
                  `}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-2">
                      <div className="border-t border-red-100 pt-4">
                        <p className="text-base leading-relaxed text-gray-700">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center" style={{ animation: 'fadeIn 1s ease-out 1s both' }}>
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="px-8 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Contact Support
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  )
}