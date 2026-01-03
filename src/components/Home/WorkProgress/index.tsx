'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Progress as ProgressData } from '@/app/api/data'
import { getImgPath } from '@/utils/image'

interface ProgressItem {
  title: string
  Progress: number
}

const Progresswork = () => {
  const [animatedProgress, setAnimatedProgress] = useState<number[]>([])

  useEffect(() => {
    setAnimatedProgress(new Array(ProgressData.length).fill(0))
    const t = setTimeout(() => {
      setAnimatedProgress(ProgressData.map(i => i.Progress))
    }, 300)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-white to-red-50"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-12 gap-12 items-center">

          {/* Image */}
          <div className="md:col-span-6">
            <div className="rounded-3xl overflow-hidden border border-red-100 shadow-xl bg-white">
              <Image
                src={getImgPath('/images/work-progress/img.png')}
                alt="progress"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Content Card */}
          <div className="md:col-span-6">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-red-100">

              <span className="inline-block mb-4 font-semibold text-red-600">
                Build Everything
              </span>

              <h2 className="text-4xl font-bold text-red-900 mb-6">
                Send Money to Pakistan
              </h2>

              <p className="text-red-800 leading-relaxed mb-10">
                AyaanExchange allows overseas Pakistanis to send money securely and
                affordably. With competitive exchange rates, low fees and fast
                transfers, more money reaches your loved ones — safely and on time.
              </p>

              {/* Progress */}
              <div className="space-y-6">
                {ProgressData.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2 text-sm font-semibold text-red-800">
                      <span>{item.title}</span>
                      <span>{item.Progress}%</span>
                    </div>

                    <div className="h-3 w-full bg-red-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-red-500 to-red-600 transition-all duration-1000 ease-out"
                        style={{ width: `${animatedProgress[index]}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Progresswork
