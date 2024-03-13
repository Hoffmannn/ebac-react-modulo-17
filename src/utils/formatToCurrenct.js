export const formatToCurrency = (price) => {
  return price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
};
