import { PROMO_CONFIG } from '../config/promoConfig';

const PROMO_START = new Date(PROMO_CONFIG.startDate).getTime();
const PROMO_END = new Date(PROMO_CONFIG.endDate).getTime();

export const isCyberWauActive = (): boolean => {
  const now = new Date().getTime();
  return now >= PROMO_START && now <= PROMO_END;
};

export const getCyberWauDiscount = (category: string): number => {
  if (!isCyberWauActive()) return 0;
  return PROMO_CONFIG.applicableCategories.includes(category) ? PROMO_CONFIG.discountPercentage : 0;
};

export const calculateDiscountedPrice = (priceStr: string, discountPercentage?: number, category?: string): string => {
  let totalDiscount = discountPercentage || 0;
  
  if (category) {
    totalDiscount += getCyberWauDiscount(category);
  }

  if (totalDiscount <= 0) return priceStr;
  
  const priceNum = parseInt(priceStr.replace(/[^0-9]/g, ''));
  const discountedNum = Math.round(priceNum * (1 - totalDiscount / 100));
  
  return `S/ ${discountedNum.toLocaleString()}`;
};

export const getPriceNumber = (priceStr: string): number => {
  return parseInt(priceStr.replace(/[^0-9]/g, ''));
};
