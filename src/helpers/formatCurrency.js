function formatCurrency(value) {
  value = value.split("").reverse().join("");

  let formatedValue = "";
  let counter = 1;

  for (let char of value) {
    if (counter === 3) {
      formatedValue += `.${char}`;
    } else {
      formatedValue += value;
    }
  }

  return formatedValue.split("").reverse().join("") + "00";
}

export { formatCurrency };
