import React from 'react'
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
import Counter from '@/components/Home/Counter'
import Progresswork from '@/components/Home/WorkProgress';
import Services from '@/components/Home/Services';
import Portfolio from '@/components/SharedComponent/portfollio'
import Testimonial from '@/components/SharedComponent/Testimonial'
import Blog from '@/components/SharedComponent/Blog'
import Contactform from '@/components/Home/Contact';
import FaqSection from '@/components/SharedComponent/FAQS';
import SendMoney from '@/components/SharedComponent/SendMoney';
export const metadata: Metadata = {
  title: "AyanExpress",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <SendMoney />
      <Counter isColorMode={false} />
      <Progresswork />
      <Services />
      <Portfolio />
     <FaqSection />
    </main>
  )
}
