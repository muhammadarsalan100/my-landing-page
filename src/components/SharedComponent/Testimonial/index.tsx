import React from 'react'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'

const Testimonial = () => {
  return (
    <section
      className='scroll-mt-24 bg-section dark:bg-darklight border-none'
      id='testimonials'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div>
          <Image
            src={getImgPath('/images/testimonial/vector-smart.png')}
            alt='logo'
            width={150}
            height={0}
            quality={100}
            className='w_f w-94! h-52! m-auto'
          />
          <div className=''>
            <h3 className='font-medium md:text-xl text-base text-midnight_text dark:text-white text-center max-w-3xl mx-auto'>
              Global Corridors – Send Money To
</h3>
          </div>
          <div className='text-center'>
            <p className='text-lg font-bold text-midnight_text dark:text-primary'>
           AyaanExchange supports transfers not only to Pakistan but also to other key global corridors, including destinations in South Asia and Africa. This gives customers a single, unified platform for sending money to multiple countries, whether helping family, paying suppliers or supporting community projects abroad.

            </p>
          
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
