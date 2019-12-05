export const promoPrice = (cost, per) => {
  return cost - (cost /100) * per;
};
