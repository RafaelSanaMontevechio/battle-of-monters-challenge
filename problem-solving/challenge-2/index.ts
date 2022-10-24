export const diceFacesCalculator = (
  dice1: number,
  dice2: number,
  dice3: number,
): number => {
  let result = 0;
  let d1 = 0;
  let d2 = 0;
  let d3 = 0;
  let exit = false;

  const dices = [dice1, dice2, dice3];

  dices.forEach((dice) => {
    if (dice < 1 || dice > 6) {
      exit = true;
    } else if (dice === dice1) {
      d1++;
    } else if (dice === dice2) {
      d2++;
    } else {
      d3++;
    }
  });

  if (exit) throw new Error('Dice out of number range');

  const allTheSame = dices.every((dice) => dice === dice1);

  if (allTheSame) result = dice1 * 3;

  if (d1 === 1 && d2 === 1 && d3 === 1) {
    const bigger = Math.max(dice1, dice2, dice3);
    result = bigger;
  }

  if (d1 === 2) result = dice1 * 2;
  if (d2 === 2) result = dice2 * 2;
  if (d3 === 2) result = dice3 * 2;

  return result;
};
