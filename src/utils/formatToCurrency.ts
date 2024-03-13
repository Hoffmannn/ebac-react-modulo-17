export const formatToCurrency = (price: Number | String): String => {
  return price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
};

export const genericValue = <T>(price: T): T => {
  return price;
};
