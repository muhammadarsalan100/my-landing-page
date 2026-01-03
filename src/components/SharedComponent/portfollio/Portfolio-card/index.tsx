'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { portfolioinfo } from '@/app/api/data'

const PortfolioCard = () => {
  return (
    <section id="portfolio" className="bg-white dark:bg-darkmode py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        {/* Header */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-extrabold text-midnight_text dark:text-white">
            Our Portfolio
          </h2>
          <p className="mt-4 text-lg text-secondary dark:text-white/60">
            Crafted experiences with design, motion, and precision.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioinfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/portfolio/${item.slug}`} className="group">
                {/* Gradient Border Wrapper */}
                <div className="relative rounded-2xl">
                  {/* Animated Gradient Border */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl border-gradient" />

                  {/* Card */}
                  <div className="relative z-10 overflow-hidden rounded-2xl bg-white dark:bg-darkmode shadow-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
                    {/* Image */}
                    <div className="relative h-[220px] overflow-hidden rounded-t-2xl">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-midnight_text transition-colors duration-300 group-hover:text-primary dark:text-white">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-secondary dark:text-white/60 line-clamp-3">
                        {item.info}
                      </p>

                      <span className="mt-5 inline-block text-sm font-semibold text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                        View Project →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioCard
