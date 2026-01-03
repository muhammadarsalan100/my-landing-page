'use client'
import { useState } from 'react';
import { Icon } from '@iconify/react';

interface Country {
  name: string;
  code: string;
  flag: string;
}

const countries: Country[] = [
  { name: 'India', code: 'INR', flag: '🇮🇳' },
  { name: 'Pakistan', code: 'PKR', flag: '🇵🇰' },
  { name: 'Afghanistan', code: 'AFN', flag: '🇦🇫' },
  { name: 'Nepal', code: 'NPR', flag: '🇳🇵' },
  { name: 'Sri Lanka', code: 'LKR', flag: '🇱🇰' },
  { name: 'Bangladesh', code: 'BDT', flag: '🇧🇩' },
];

interface ExchangeRates {
  [key: string]: number;
}

const CurrencyConverter = () => {
  const [sendAmount, setSendAmount] = useState<number>(100);
  const [receiveAmount, setReceiveAmount] = useState<number>(0);
  const [sendCountry, setSendCountry] = useState<Country>(countries[0]);
  const [receiveCountry, setReceiveCountry] = useState<Country>(countries[1]);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const rates: ExchangeRates = {
    INR: 170,
    PKR: 335,
    AFN: 95,
    NPR: 145,
    LKR: 450,
    BDT: 120,
  };

  const handleSendChange = (value: number): void => {
    setSendAmount(value);
    const rate = rates[receiveCountry.code] / rates[sendCountry.code];
    setReceiveAmount(Number((value * rate).toFixed(2)));
  };

  const handleSwap = (): void => {
    const temp = sendCountry;
    setSendCountry(receiveCountry);
    setReceiveCountry(temp);
    const rate = rates[temp.code] / rates[receiveCountry.code];
    setReceiveAmount(Number((sendAmount * rate).toFixed(2)));
    setIsFlipped(!isFlipped);
  };

  const handleSendCountryChange = (country: Country): void => {
    setSendCountry(country);
    const rate = rates[receiveCountry.code] / rates[country.code];
    setReceiveAmount(Number((sendAmount * rate).toFixed(2)));
  };

  const handleReceiveCountryChange = (country: Country): void => {
    setReceiveCountry(country);
    const rate = rates[country.code] / rates[sendCountry.code];
    setReceiveAmount(Number((sendAmount * rate).toFixed(2)));
  };

  const exchangeRate = (receiveAmount / sendAmount).toFixed(4);

  return (
    <div className="bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 flex items-center justify-center p-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-950/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-900/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 w-full max-w-md">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-black bg-gradient-to-r from-red-700 via-white to-red-700 bg-clip-text text-transparent mb-1">
            Ayan Exchange 
          </h1>
          <p className="text-white/50 text-xs tracking-wider">GLOBAL CURRENCY TRANSFER</p>
        </div>

        {/* Main Card */}
        <div className="relative">
          {/* Outer glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-800/50 to-red-900/40 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
          
          {/* Card */}
          <div className="relative bg-gradient-to-br from-white/10 to-white/4 backdrop-blur-2xl rounded-2xl p-6 border border-white/20 shadow-2xl hover:border-white/30 transition-all duration-500">
            
            {/* Send Section */}
            <div className="mb-1">
              <label className="block text-white/70 font-semibold text-sm tracking-wide uppercase">You Send</label>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-red-700/30 to-red-800/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative flex items-center gap-3 bg-white/8 border border-white/15 rounded-xl px-5 py-3 group-hover:border-white/25 transition-all duration-300 backdrop-blur-md">
                  <input
                    type="number"
                    value={sendAmount}
                    onChange={(e) => handleSendChange(Number(e.target.value))}
                    className="flex-1 text-2xl font-black text-white bg-transparent outline-none placeholder-white/30"
                    placeholder="0"
                  />
                  <select
                    value={sendCountry.code}
                    onChange={(e) =>
                      handleSendCountryChange(
                        countries.find((c) => c.code === e.target.value)!
                      )
                    }
                    className="px-4 py-1 bg-white/10 hover:bg-white/15 text-white font-bold rounded-lg cursor-pointer border border-white/15 outline-none transition-all duration-300 text-lg"
                  >
                    {countries.map((c) => (
                      <option key={c.code} value={c.code} className="bg-gray-800">
                        {c.flag} {c.code}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Swap Button */}
            <div className="flex justify-center">
              <button
                onClick={handleSwap}
                className="p-3 bg-gradient-to-r from-red-800 to-red-900 hover:from-red-700 hover:to-red-800 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 border border-red-600/50"
              >
                <Icon icon="mdi:swap-horizontal" className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Receive Section */}
            <div className="mb-2">
              <label className="block text-white/70 mb-3 font-semibold text-sm tracking-wide uppercase">You Receive</label>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-red-700/30 to-red-800/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative flex items-center gap-3 bg-white/8 border border-white/15 rounded-xl px-5 py-4 group-hover:border-white/25 transition-all duration-300 backdrop-blur-md">
                  <div className="flex-1">
                    <div className="text-3xl font-black text-white">
                      {receiveAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                  </div>
                  <select
                    value={receiveCountry.code}
                    onChange={(e) =>
                      handleReceiveCountryChange(
                        countries.find((c) => c.code === e.target.value)!
                      )
                    }
                    className="px-4 py-1 bg-white/10 hover:bg-white/15 text-white font-bold rounded-lg cursor-pointer border border-white/15 outline-none transition-all duration-300 text-lg"
                  >
                    {countries.map((c) => (
                      <option key={c.code} value={c.code} className="bg-gray-800">
                        {c.flag} {c.code}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Exchange Rate */}
            <div className="mb-8 p-4 bg-gradient-to-r from-red-900/25 to-red-800/15 border border-red-700/40 rounded-xl backdrop-blur-sm hover:border-red-700/60 transition-all duration-300">
              <p className="text-white/80 text-sm">
                <span className="font-semibold text-white">Exchange Rate:</span> 1 {sendCountry.code} = <span className="font-black text-white/90">{exchangeRate}</span> {receiveCountry.code}
              </p>
            </div>

            {/* CTA Button */}
            <button className="w-full relative group mb-4 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-900 rounded-xl opacity-100 group-hover:opacity-90 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              <div className="relative px-6 py-4 text-center text-white font-black text-lg tracking-wider uppercase hover:tracking-widest transition-all duration-300 group-hover:scale-105 active:scale-95 transform">
                Start Transfer Now
              </div>
            </button>

            {/* Promo Banner */}
            <div className="relative overflow-hidden rounded-xl border border-red-700/40 bg-gradient-to-r from-red-800/15 to-red-900/10 p-4 backdrop-blur-sm group hover:border-red-700/60 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-red-700/0 via-red-600/20 to-red-700/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl animate-bounce">🎁</span>
                  <span className="font-black text-white">Limited Offer</span>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  Send money by Oct 31st to win iPhone 16 Pro & <span className="font-bold text-white">0% transfer fee!</span>
                </p>
                <button className="underline text-white flex items-center gap-1 text-sm mt-2 hover:text-white/80 transition-colors">
                  Learn more <Icon icon="mdi:arrow-right" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-6 text-center">
          <p className="text-white/40 text-xs tracking-widest uppercase">Trusted by 500K+ Users Worldwide</p>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;