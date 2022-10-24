export const numbersFractionCalculator = (numbers: number[]) => {
  const total = numbers.length;

  let amountPositives = 0;
  let amountNegatives = 0;
  let amountZeros = 0;

  numbers.forEach((num) => {
    if (num === 0) {
      amountZeros++;
    } else if (num > 0) {
      amountPositives++;
    } else {
      amountNegatives++;
    }
  });

  let positives = 1 / (total / amountPositives);
  let negatives = 1 / (total / amountNegatives);
  let zeros = 1 / (total / amountZeros);

  return {
    positives: positives.toFixed(6),
    negative: negatives.toFixed(6),
    zeros: zeros.toFixed(6),
  };
};
