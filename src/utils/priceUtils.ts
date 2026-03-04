export const calculateDiscountedPrice = (priceStr: string, discountPercentage?: number): string => {
  if (!discountPercentage || discountPercentage <= 0) return priceStr;
  
  const priceNum = parseInt(priceStr.replace(/[^0-9]/g, ''));
  const discountedNum = Math.round(priceNum * (1 - discountPercentage / 100));
  
  return `S/ ${discountedNum.toLocaleString()}`;
};

export const getPriceNumber = (priceStr: string): number => {
  return parseInt(priceStr.replace(/[^0-9]/g, ''));
};
