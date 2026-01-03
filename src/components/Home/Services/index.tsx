'use client'
import React from 'react';
import { Icon } from '@iconify/react';

const Servicebox = [
  {
    icon: "fluent:money-hand-24-filled",
    title: "Instant Transfers",
    description: "Send money to Pakistan in minutes with our secure and lightning-fast transfer system."
  },
  {
    icon: "mdi:shield-check",
    title: "Secure & Safe",
    description: "Bank-grade encryption and verified transfers ensure your money reaches safely every time."
  },
  {
    icon: "mdi:cash-multiple",
    title: "Best Rates",
    description: "Get competitive exchange rates with transparent fees and no hidden charges."
  }
];

const Services = () => {
  return (
    <section className='relative py-24 overflow-hidden bg-gradient-to-br from-white via-red-50 to-white dark:from-black dark:via-red-950 dark:to-black'>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-red-100 dark:bg-red-900/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-red-200 dark:bg-red-800/20 rounded-full blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className='container mx-auto max-w-6xl px-4 relative z-10'>
        {/* Header */}
        <div className='text-center mb-16 space-y-6'>
          <div className='flex gap-2 items-center justify-center animate-fade-in'>
            <span className='w-2 h-2 rounded-full bg-red-600 animate-ping'></span>
            <span className='w-2 h-2 rounded-full bg-red-600'></span>
            <span className='uppercase tracking-[0.3em] text-red-600 dark:text-red-400 text-xs font-semibold'>
              Our Services
            </span>
            <span className='w-2 h-2 rounded-full bg-red-600'></span>
            <span className='w-2 h-2 rounded-full bg-red-600 animate-ping'></span>
          </div>
          
          <h2 className='text-5xl md:text-6xl font-bold bg-gradient-to-r from-black via-red-700 to-red-600 dark:from-white dark:via-red-300 dark:to-red-400 bg-clip-text text-transparent leading-tight'>
            How To Send Money<br />To Pakistan
          </h2>
          
          <div className='w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-red-600 to-transparent'></div>
        </div>

        {/* Service Cards */}
        <div className='grid md:grid-cols-3 gap-8'>
          {Servicebox.map((item, index) => (
            <div
              key={index}
              className='group relative bg-white dark:bg-black rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden'
              style={{
                animationDelay: `${index * 150}ms`,
                animation: 'fadeInUp 0.8s ease-out forwards',
                opacity: 0
              }}>
              
              {/* Card Gradient Border Effect */}
              <div className='absolute inset-0 bg-gradient-to-br from-red-500 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl'></div>
              <div className='absolute inset-[2px] bg-white dark:bg-black rounded-2xl'></div>
              
              {/* Content */}
              <div className='relative z-10 flex flex-col items-center text-center space-y-6'>
                {/* Icon Container */}
                <div className='relative'>
                  <div className='absolute inset-0 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500'></div>
                  <div className='relative w-20 h-20 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-500'>
                    <Icon
                      icon={item.icon}
                      className='text-white text-4xl'
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className='text-2xl font-bold text-black dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300'>
                  {item.title}
                </h3>

                {/* Description */}
                <p className='text-black/70 dark:text-white/70 leading-relaxed'>
                  {item.description}
                </p>

                {/* CTA Button */}
                <button className='mt-4 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-full flex items-center gap-2 transform group-hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl'>
                  Get Started
                  <Icon
                    icon='ei:chevron-right'
                    className='text-xl group-hover:translate-x-1 transition-transform duration-300'
                  />
                </button>
              </div>

              {/* Decorative Corner */}
              <div className='absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-red-500/10 to-transparent rounded-bl-full transform translate-x-12 -translate-y-12 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500'></div>
            </div>
          ))}
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
        
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Services;