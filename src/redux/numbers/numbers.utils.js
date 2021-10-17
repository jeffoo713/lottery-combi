export const drawNumbersWithExceptions = numbersNotToDraw => {
  const numbersToDrawArr = [];
  let numbersToDraw = {};
  const numbersNotToDrawArr = Object.keys(numbersNotToDraw)
    .map(key => {
      if (numbersNotToDraw[key] === '') return 0;
      return Number(numbersNotToDraw[key]);
    })
    .filter(number => number !== 0);

  for (let i = 0; i < 6; i++) {
    let goodToAdd = false;
    let numberToAdd;

    while (!goodToAdd) {
      numberToAdd = Math.floor(Math.random() * 49 + 1);
      if (
        !numbersToDrawArr.includes(numberToAdd) &&
        !numbersNotToDrawArr.includes(numberToAdd)
      )
        goodToAdd = true;
    }

    numbersToDrawArr.push(numberToAdd);
  }

  numbersToDrawArr.forEach((number, i) => {
    Object.assign(numbersToDraw, { [`num${i + 1}`]: number });
  });

  return numbersToDraw;
};
