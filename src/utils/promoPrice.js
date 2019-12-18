// export const promoPrice = (cost, per) => {
// return cost - (cost /100) * per;
// };

export const promoPrice = (cost, per = 0) => {
  if (cost) {
    let price = cost.replace('$', '').replace(',', '');
    return (price - (price / 100) * per);
  }

  return cost;
};
