export const getRandomNumber = (max: number, playedCards: number[]): number => {
  const randomNum = Math.floor(Math.random() * max) + 1;

  if (playedCards.includes(randomNum)) {
    return getRandomNumber(max, playedCards);
  }

  return randomNum;
};
