// export const promoPrice = (cost, per) => {
// return cost - (cost /100) * per;
// };

export const promoPrice = (cost, per) => {
  let price = cost.replace('$', '').replace(',', '');
  return (price - (price / 100) * per).toFixed(2);
};
