function formatCurrency(value) {
  value = Number(value);

  const formatedValue = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  }).format(value);

  return formatedValue;
}

export { formatCurrency };
