"use client"
import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'

const Footer: FC = () => {
  return (
    <footer className="relative z-10 overflow-hidden">
      {/* Subtle Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#3A0A0A] via-[#6B0000] to-[#3A0A0A] animate-gradient-x -z-10"></div>

      <div className="container mx-auto max-w-6xl px-6 py-16 text-white">
        <div className="grid md:grid-cols-12 grid-cols-1 gap-8">
          {/* Logo & CTA */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start gap-6">
            <Link href="/" className="block">
              <Image
                src={getImgPath('/images/logo/logo.png')}
                alt="logo"
                width={160}
                height={50}
                style={{ width: 'auto', height: 'auto' }}
                quality={100}
                unoptimized
              />
            </Link>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-center md:text-left">
              Ready to get started?
            </h2>
            <Link
              href="#"
              className="px-8 py-3 rounded-lg bg-red-600 text-white font-semibold shadow-lg hover:shadow-none hover:bg-white hover:text-red-600 transition-all duration-500"
            >
              Get Started
            </Link>
          </div>

          {/* Support Info */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start gap-6">
            <span className="text-xl font-bold">Support</span>
            <div className="flex gap-2 items-center">
              <p className="font-semibold">Phone:</p>
              <Link href="tel:+69025600020" className="hover:text-red-500 transition-colors">
                +(690) 2560 0020
              </Link>
            </div>
            <div className="flex gap-2 items-center">
              <p className="font-semibold">Email:</p>
              <Link href="mailto:info@ayanexpress.com" className="hover:text-red-500 transition-colors">
                info@ayanexpress.com
              </Link>
            </div>
            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <Link href="#" className="group">
                <svg className="w-6 h-6 fill-white group-hover:fill-red-500 transition-colors" viewBox="0 0 24 24">
                  <path d="M22.9128 0.769043H2.06165C1.34768 0.769472 0.7689 1.34854 0.769043 2.0628V22.9139C0.769472 23.6279 1.34854 24.2067 2.0628 24.2065H13.2889V15.1428H10.2448V11.5952H13.2889V8.98433C13.2889 5.95665 15.1372 4.3087 17.838 4.3087C19.1317 4.3087 20.2433 4.40512 20.5673 4.44818V7.61261H18.7049C17.2355 7.61261 16.951 8.31084 16.951 9.33566V11.5952H20.4643L20.0066 15.1428H16.951V24.2065H22.9128C23.6272 24.2067 24.2064 23.6278 24.2065 22.9134V2.06165C24.2063 1.34768 23.627 0.7689 22.9128 0.769043Z" />
                </svg>
              </Link>
              <Link href="#" className="group">
                <svg className="w-6 h-6 fill-white group-hover:fill-red-500 transition-colors" viewBox="0 0 23 23">
                  <path d="M21.3412 0H1.65878C0.742615 0 0 0.742615 0 1.65878V21.3412C0 22.2574 0.742615 23 1.65878 23H21.3412C22.2574 23 23 22.2574 23 21.3412V1.65878C23 0.742615 22.2574 0 21.3412 0ZM16.7508 8.96648C16.7559 9.07966 16.7583 9.19337 16.7583 9.3076C16.7583 12.7955 14.1034 16.8176 9.24812 16.8178H9.24829H9.24812C7.75745 16.8178 6.37031 16.3809 5.20216 15.6321C5.4087 15.6565 5.61892 15.6686 5.83177 15.6686C7.06853 15.6686 8.20667 15.2468 9.11019 14.5387C7.95468 14.5173 6.98044 13.7542 6.64423 12.7053C6.80514 12.7362 6.97061 12.7531 7.1403 12.7531C7.38123 12.7531 7.61461 12.7206 7.83641 12.6601C6.62861 12.4183 5.71877 11.3508 5.71877 10.0727C5.71877 10.0607 5.71877 10.05 5.71912 10.039C6.07481 10.2367 6.48156 10.3557 6.91463 10.3691C6.20589 9.89615 5.74 9.08773 5.74 8.17192C5.74 7.68831 5.87073 7.23523 6.09744 6.84515C7.39912 8.44233 9.34445 9.49273 11.5383 9.6031C11.493 9.40973 11.4696 9.20828 11.4696 9.00122C11.4696 7.54407 12.6518 6.36189 14.1095 6.36189C14.8688 6.36189 15.5546 6.68283 16.0362 7.19592C16.6376 7.0773 17.2023 6.8576 17.7124 6.55526C17.515 7.17136 17.0966 7.68831 16.5516 8.01522C17.0856 7.95135 17.5945 7.80974 18.0674 7.59952C17.7141 8.12893 17.2661 8.59394 16.7508 8.96648Z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4 flex flex-col items-center md:items-end gap-4">
            <span className="font-bold text-2xl">Subscribe Newsletter</span>
            <p className="text-white/80 text-center md:text-right">Stay updated with latest trends and products</p>
            <form className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="Email*"
                className="px-4 py-3 rounded-l-lg w-full md:w-[220px] outline-none border-none text-black"
              />
              <button className="px-6 py-3 bg-red-700 text-white rounded-r-lg font-semibold hover:bg-white hover:text-red-700 transition-all duration-500">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center text-white/70 text-sm gap-3 md:gap-0">
          <div className="flex gap-4">
            <Link href="/#about" className="hover:text-red-500 transition-colors">About</Link>
            <Link href="/#services" className="hover:text-red-500 transition-colors">Services</Link>
            <Link href="/contact" className="hover:text-red-500 transition-colors">Contact</Link>
          </div>
          <p>© 2025 Orient Money Transfer Ltd T/A Ayan Exchange</p>
        </div>
      </div>

      {/* Gradient Animation */}
      <style jsx>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          background-size: 300% 100%;
          animation: gradient-x 15s ease infinite;
        }
      `}</style>
    </footer>
  )
}

export default Footer
