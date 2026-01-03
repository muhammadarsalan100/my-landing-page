'use client'
import { getImgPath } from '@/utils/image'
import Image from 'next/image'
import Link from 'next/link'
import CurrencyConverter from '../Calculator'

const Hero = () => {
  return (
    <section className='relative md:pt-44 pt-28 bg-gradient-to-br from-white via-red-50 to-red-100 dark:bg-gradient-to-br dark:from-gray-900 dark:via-red-950 dark:to-red-900 bg-cover overflow-hidden'>
      {/* Decorative gradient shapes */}
      <div className='absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-red-500/20 to-transparent rounded-full blur-3xl'></div>
      <div className='absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-red-400/15 to-transparent rounded-full blur-3xl'></div>
      
      <div className='container mx-auto max-w-6xl px-4 grid grid-cols-12 gap-4 relative z-10'>
        <div
          className='md:col-span-6 col-span-12 p-4 md:px-4 px-0 space-y-4 flex flex-col items-start justify-center'
          data-aos='fade-right'
          data-aos-delay='200'
          data-aos-duration='1000'>
          <div className='flex gap-2 items-center'>
            <span className='w-3 h-3 rounded-full bg-gradient-to-r from-red-500 to-red-600'></span>
            <span className='font-medium text-gray-700 text-sm dark:text-white/70'>
              build everything
            </span>
          </div>
          <h1 className='text-gray-900 font-bold dark:text-white text-4xl md:text-5xl md:leading-[1.15]'>
           Money Transfer to <span className='text-red-600 dark:text-red-500'>Pakistan</span>
          </h1>
          <p className='text-gray-700 dark:text-gray-300 text-xl font-semibold'>
           Enjoy fast, low-cost transfers from the UK and Europe to Pakistan with AyaanExchange, your trusted specialist for secure online remittances. Overseas Pakistanis can support loved ones back home in just a few clicks, with clear rates, low fees and real-time status updates for every transaction.
          </p>
          <a
            href='https://play.google.com/store/apps/details?id=com.rizremit.riz'
            className='py-3 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-md hover:from-red-700 hover:to-red-600 transition duration-300 px-8 shadow-lg'>
           Google Play
          </a>
          <div className='flex items-center mt-12 gap-4'>
            <div className='flex items-center'>
              <Image
                src={getImgPath('/images/hero/hero-profile-1.jpg')}
                alt='hero-image'
                width={40}
                height={40}
                quality={100}
                className='w-10! h-10! rounded-full border-2 border-solid border-white shadow-md -ml-0'
              />
              <Image
                src={getImgPath('/images/hero/hero-profile-2.jpg')}
                alt='hero-image'
                width={40}
                height={40}
                quality={100}
                className='w-10! h-10! rounded-full border-2 border-solid border-white shadow-md -ml-3'
              />
              <Image
                src={getImgPath('/images/hero/hero-profile-3.jpg')}
                alt='hero-image'
                width={40}
                height={40}
                quality={100}
                className='w-10! h-10! rounded-full border-2 border-solid border-white shadow-md -ml-3'
              />
            </div>
            <div>
              <p className='text-sm font-normal text-gray-600 dark:text-gray-400 max-w-56'>
                Need help?{' '}
                <Link href='#' className='text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-400 font-semibold'>
                  Contact our experts
                </Link>{' '}
                Tell us about your project
              </p>
            </div>
          </div>
        </div>

        <div className="md:col-span-6 col-span-12 relative before:absolute before:content-[''] before:bg-[url('/images/hero/line-leyar.svg')] before:bg-no-repeat before:left-1/2 before:top-0 before:h-24 before:w-52 before:-z-10 before:translate-x-70% before:-translate-y-40% lg:before:inline-block before:hidden after:absolute after:content-[''] after:bg-[url('/images/hero/round-leyar.svg')] after:bg-no-repeat xl:after:inline-block after:hidden after:left-0 after:bottom-0 after:h-6.25 after:w-6.25 after:-z-10 after:-translate-x-1/2 after:translate-y-1/2">
          <div className='relative'>
            <div className='absolute inset-0 bg-gradient-to-br from-red-500/30 to-red-600/20 rounded-3xl blur-xl'></div>
                       <CurrencyConverter />

          </div>
          
        </div>
      </div>
      
    </section>
  )
}

export default Hero