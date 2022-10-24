export const findLessCostPath = (board: number[][]): number => {
  let result = 0;

  if (board.length === 1 && board[0].length === 1) result = 0;

  const path: { index: number; value: number }[] = [];

  let acc = 0;
  board.forEach((arr, i) => {
    arr.forEach((item, j) => {
      if (i === 0) {
        acc += item;

        if (arr[j + 1] <= board[i + 1][i]) {
          acc += arr[j + 1];
        } else {
          acc += board[i + 1][i];
        }
      }

      if (i === 0) {
        path.push({ index: j, value: item });
        return;
      }
    });
  });

  console.table(board);

  return result;
};
