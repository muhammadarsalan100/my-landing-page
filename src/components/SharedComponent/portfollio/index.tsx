"use client";
import React, { useState } from "react";

const portfolioinfo = [
  {
    image: "/images/portfolio/bank.jpeg",
    alt: "Portfolio",
    title: "Bank Transfer / Bank Deposit",
    slug: "Cozycasa",
    info: "Send money directly to Pakistani bank accounts, ideal for family expenses, bill payments or supporting businesses. This option offers traceable, secure delivery with clear confirmation once funds are credited.",
    icon: "🏦",
  },
  {
    image: "/images/portfolio/cash.jpeg",
    alt: "Portfolio",
    title: "Cash Pickup",
    slug: "Mars",
    info: "Where available, recipients can collect cash instantly from partner locations across Pakistan, using valid identification and the transaction reference. This is perfect for families who prefer cash or have limited access to bank accounts.",
    icon: "💵",
  },
  {
    image: "/images/portfolio/mobile.jpeg",
    alt: "Mobile Wallet",
    title: "Mobile Wallet",
    slug: "rocket-squared",
    info: "Credit funds to supported mobile wallets in Pakistan so recipients can pay bills, shop or withdraw cash locally. This digital option offers speed and convenience, especially for people who rely on smartphones for daily payments.",
    icon: "📱",
  },
];

const PortfolioCard = () => {
const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-6 lg:px-12 pb-24">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {portfolioinfo.map((item, index) => (
          <div
            key={index}
            className="group relative"
            onMouseEnter={() => setActiveCard(index)}
            onMouseLeave={() => setActiveCard(null)}
            style={{
              animation: `fadeInUp 0.8s ease-out ${index * 0.15}s both`,
            }}
          >
            <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              {/* Image Section */}
              <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-red-500/5"></div>
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                {/* Icon badge */}
                <div className="absolute top-4 right-4 w-14 h-14 bg-white/95 backdrop-blur rounded-full flex items-center justify-center text-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>

                {/* Title overlay on image */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-1 transform transition-all duration-300">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 bg-gradient-to-br from-white to-red-50/30">
                <p className="text-gray-700 leading-relaxed text-sm">
                  {item.info}
                </p>

                {/* Read more button */}
                <button className="mt-4 text-red-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  Learn More
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </button>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-red-400 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-red-50/20 to-white"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #ef4444 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div
        className="absolute bottom-20 right-10 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="relative z-10 text-center px-6 lg:px-0 mb-16">
        {/* Badge */}
        <div
          className="flex gap-3 items-center justify-center mb-6"
          style={{ animation: "fadeIn 0.6s ease-out" }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-red-500 rounded-full blur-md opacity-50 animate-pulse"></div>
            <div className="relative w-2 h-2 bg-red-500 rounded-full"></div>
          </div>
          <span className="text-red-600 font-semibold tracking-widest uppercase text-xs">
            Secure & Fast
          </span>
        </div>

        {/* Main heading */}
        <h2
          className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          style={{ animation: "fadeIn 0.8s ease-out 0.2s both" }}
        >
          Payout <span className="text-red-600">Options</span>
        </h2>

        {/* Subheading */}
        <p
          className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed"
          style={{ animation: "fadeIn 1s ease-out 0.4s both" }}
        >
          Choose the payment method that works best for you and your recipients
        </p>
      </div>

      <PortfolioCard />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
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
  );
};

export default Portfolio;
