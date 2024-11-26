
import { useState, useEffect } from 'react'

// Promotional periods configuration
const PROMO_CONFIG = [
  {
    id: 'black-friday-2024',
    startDate: '2024-11-24', // Black Friday period
    endDate: '2024-12-03',
    message: {
      highlight: 'Black Friday & Cyber Monday Sale!',
      details: 'Get 50% OFF Until 12/3 - Limited Time Offer! 🎉'
    },
    bgColor: 'bg-black'
  },
  {
    id: 'winter-sale-2024',
    startDate: '2024-12-04',
    endDate: '2024-12-31',
    message: {
      highlight: 'End of Year Sale!',
      details: 'Save 50% OFF ❄️'
    },
    bgColor: 'bg-blue-600'
  },
  // Add more promotional periods as needed
  {
    id: 'default',
    startDate: null, // null means this is the default fallback
    endDate: null,
    message: {
      highlight: 'Don’t Miss Out!',
      details: '50% OFF for a Limited Time! 🕒'
    },
    bgColor: 'bg-gradient-to-r from-purple-600 to-blue-600'
  }
]

const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentPromo, setCurrentPromo] = useState(PROMO_CONFIG[PROMO_CONFIG.length - 1]); // Default to last (default) promo

  useEffect(() => {
    const getCurrentPromo = () => {
      const now = new Date();
      
      for (const promo of PROMO_CONFIG) {
        if (!promo.startDate || !promo.endDate) continue; // Skip the default promo

        const startDate = new Date(promo.startDate);
        const endDate = new Date(promo.endDate);
        
        if (now >= startDate && now <= endDate) {
          return promo;
        }
      }
      
      // If no active time-based promo found, return the default (last) promo
      return PROMO_CONFIG[PROMO_CONFIG.length - 1];
    };

    setCurrentPromo(getCurrentPromo());
  }, []); // Empty dependency array means this runs once on mount

  if (!isVisible) return null;

  return (
    <div className={`${currentPromo.bgColor} text-white relative`}>
      <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center flex-wrap">
          <div className="flex items-center">
            <span className="hidden md:inline font-semibold">
              {currentPromo.message.highlight}
            </span>
            <span className="ml-2 text-sm md:text-base">
              {currentPromo.message.details}
            </span>
          </div>
        </div>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded-full transition-colors text-xl leading-none"
        aria-label="Close banner"
      >
        ×
      </button>
    </div>
  );
};

export default PromoBanner;