'use client'
import React from 'react'
import { count } from '@/app/api/data'
import Image from 'next/image'

const Counter = ({ isColorMode }: { isColorMode: Boolean }) => {
  return (
    <section
      className={`relative overflow-hidden ${
        isColorMode
          ? 'dark:bg-gradient-to-br dark:from-red-950 dark:via-gray-900 dark:to-red-900 bg-gradient-to-br from-white via-red-50 to-white'
          : 'dark:bg-gradient-to-br dark:from-gray-900 dark:via-red-950 dark:to-gray-900 bg-gradient-to-br from-red-50 via-white to-red-50'
      } py-20`}>
      
      {/* Animated background elements */}
      <div className='absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-red-400/20 to-transparent rounded-full blur-3xl animate-pulse'></div>
      <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-red-500/15 to-transparent rounded-full blur-3xl animate-pulse' style={{animationDelay: '1.5s'}}></div>
      
      {/* Decorative gradient lines */}
      <div className='absolute top-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-300/30 to-transparent'></div>
      <div className='absolute bottom-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-300/30 to-transparent'></div>

      <div className='container mx-auto max-w-6xl px-4 relative z-10'>
        <div className='flex flex-wrap items-center md:justify-between justify-center md:gap-0 gap-12'>
          {count.map((item, index) => (
            <div
              key={index}
              className='group flex flex-col items-center gap-4 p-6 rounded-2xl hover:bg-white/50 dark:hover:bg-white/5 transition-all duration-500 hover:shadow-xl hover:shadow-red-100/20 hover:scale-105 transform'
              data-aos='fade-up'
              data-aos-delay={`${index * 200}`}
              data-aos-duration='1000'>
              
              {/* Icon container with gradient background */}
              <div className='relative'>
                <div className='absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500'></div>
                <div className='relative bg-gradient-to-br from-red-500 to-red-600 p-5 rounded-2xl shadow-lg group-hover:shadow-2xl group-hover:shadow-red-500/50 transition-all duration-500 group-hover:scale-110 transform'>
                  <Image
                    src={item.icon}
                    alt='icon'
                    width={40}
                    height={40}
                    unoptimized
                    className='brightness-0 invert'
                  />
                </div>
              </div>

              {/* Counter value with gradient text */}
              <span className='text-5xl font-bold bg-gradient-to-r from-gray-900 via-red-600 to-gray-900 dark:from-white dark:via-red-400 dark:to-white bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500'>
                {item.value}
              </span>

              {/* Description */}
              <p className='text-base text-gray-700 dark:text-gray-300 text-center max-w-[17.8125rem] w-full group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-500 font-medium'>
                {item.description}
              </p>

              {/* Decorative bottom line */}
              <div className='w-0 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full group-hover:w-20 transition-all duration-500'></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .group:hover {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default Counter