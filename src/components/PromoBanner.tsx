import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Timer, Sparkles} from 'lucide-react';
import { PROMO_CONFIG } from '../config/promoConfig';

const PROMO_START = new Date(PROMO_CONFIG.startDate).getTime();
const PROMO_END = new Date(PROMO_CONFIG.endDate).getTime();

export const PromoBanner = () => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);
  const [isPromoActive, setIsPromoActive] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      
      if (now < PROMO_START) {
        const distance = PROMO_START - now;
        setTimeLeft(calculateTimeLeft(distance));
        setIsPromoActive(false);
      } else if (now >= PROMO_START && now <= PROMO_END) {
        const distance = PROMO_END - now;
        setTimeLeft(calculateTimeLeft(distance));
        setIsPromoActive(true);
      } else {
        setTimeLeft(null);
        setIsPromoActive(false);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const calculateTimeLeft = (distance: number) => {
    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    };
  };

  useEffect(() => {
    const updateHeight = () => {
      if (isPromoActive && timeLeft) {
        const height = window.innerWidth < 768 ? '90px' : '70px';
        document.documentElement.style.setProperty('--banner-height', height);
      } else {
        document.documentElement.style.setProperty('--banner-height', '0px');
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => {
      window.removeEventListener('resize', updateHeight);
      document.documentElement.style.setProperty('--banner-height', '0px');
    };
  }, [isPromoActive, timeLeft]);

  if (!timeLeft || !isPromoActive) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        exit={{ y: -100 }}
        className="fixed top-0 left-0 right-0 z-[100] bg-gradient-to-r from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] text-white flex items-center shadow-[0_10px_30px_rgba(0,0,0,0.3)] border-b border-[#B59410]/20 h-[90px] md:h-[70px]"
      >
        {/* Decorative background element */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <div className="absolute -left-10 -top-10 w-40 h-40 bg-[#B59410] rounded-full blur-3xl animate-pulse" />
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#B59410] rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-center md:justify-between gap-2 md:gap-4 relative z-10">
          <div className="flex items-center gap-3 md:gap-6">
            <div className="bg-gradient-to-br from-[#B59410] to-[#8a710c] p-1.5 md:p-2.5 rounded-xl md:rounded-2xl shadow-[0_0_20px_rgba(181,148,16,0.4)] animate-bounce-slow">
              <Sparkles size={16} className="text-white md:w-5 md:h-5" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2 md:gap-3">
                <span className="text-[#B59410] font-black tracking-tighter text-lg md:text-3xl italic leading-none">
                  {PROMO_CONFIG.name}
                </span>
                <div className="h-4 md:h-6 w-[1px] bg-white/20" />
                <span className="bg-white/10 text-[#B59410] px-1.5 py-0.5 rounded text-[8px] md:text-[10px] font-bold tracking-widest uppercase">
                  Oferta Limitada
                </span>
              </div>
              <p className="text-[9px] md:text-xs uppercase tracking-[0.1em] md:tracking-[0.2em] font-bold text-white/70 mt-0.5 md:mt-1">
                {isPromoActive 
                  ? <><span className="text-white">{PROMO_CONFIG.discountPercentage}% OFF</span> en {PROMO_CONFIG.applicableCategories.join(' y ')}</>
                  : `Próximamente ${PROMO_CONFIG.discountPercentage}% OFF`}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden lg:flex flex-col items-end mr-2">
              <span className="uppercase tracking-widest font-bold text-[#B59410]">Finaliza en:</span>
              <span className="text-white/40 font-medium italic">¡No te lo pierdas!</span>
            </div>
            
            <div className="flex items-center gap-3 md:gap-4 bg-black/40 backdrop-blur-md px-3 md:px-6 py-1.5 md:py-3 rounded-xl md:rounded-2xl border border-white/10 shadow-inner">
              <Timer size={14} className="text-[#B59410] animate-pulse md:w-4 md:h-4" />
              <div className="flex gap-2 md:gap-5 text-xs md:text-xl font-mono font-black tracking-tighter">
                <div className="flex flex-col items-center min-w-[2ch]">
                  <span className="text-white">{String(timeLeft.days).padStart(2, '0')}</span>
                  <span className="text-[10px] md:text-[8px] uppercase tracking-tighter font-bold text-white/30 -mt-0.5 md:-mt-1">Días</span>
                </div>
                <span className="text-[#B59410] opacity-50">:</span>
                <div className="flex flex-col items-center min-w-[2ch]">
                  <span className="text-white">{String(timeLeft.hours).padStart(2, '0')}</span>
                  <span className="text-[10px] md:text-[8px] uppercase tracking-tighter font-bold text-white/30 -mt-0.5 md:-mt-1">Hrs</span>
                </div>
                <span className="text-[#B59410] opacity-50">:</span>
                <div className="flex flex-col items-center min-w-[2ch]">
                  <span className="text-white">{String(timeLeft.minutes).padStart(2, '0')}</span>
                  <span className="text-[10px] md:text-[8px] uppercase tracking-tighter font-bold text-white/30 -mt-0.5 md:-mt-1">Min</span>
                </div>
                <span className="text-[#B59410] opacity-50">:</span>
                <div className="flex flex-col items-center min-w-[2ch]">
                  <span className="text-[#B59410]">{String(timeLeft.seconds).padStart(2, '0')}</span>
                  <span className="text-[10px] md:text-[8px] uppercase tracking-tighter font-bold text-white/30 -mt-0.5 md:-mt-1">Seg</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
