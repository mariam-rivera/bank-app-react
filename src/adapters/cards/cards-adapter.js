export const cardAdapter = (cards) => {
  if (!cards) return;
  return Object.keys(cards).map((card) => cards[card]);
};
