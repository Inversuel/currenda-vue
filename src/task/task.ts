export const cardss = [
  "WPIK",
  "WKIE",
  "WTRE",
  "WTRE",
  "WTRE",
  "WKAR",
  "DPIK",
  "DKIE",
  "DTRE",
  "DKAR",
  "KPIK",
  "KKIE",
  "KTRE",
  "KKAR",
  "APIK",
  "AKIE",
  "ATRE",
  "AKAR",
];

export const fullCards = [
  "WPIK",
  "WKIE",
  "WTRE",
  "WKAR",
  "DPIK",
  "DKIE",
  "DTRE",
  "DKAR",
  "KPIK",
  "KKIE",
  "KTRE",
  "KKAR",
  "APIK",
  "AKIE",
  "ATRE",
  "AKAR",
];

export const fullCards2 = [
  "WPIK",
  "WKIE",
  "WTRE",
  "WKAR",
  "DPIK",
  "DKIE",
  "DTRE",
  "DKAR",
  "KPIK",
  "KKIE",
  "KTRE",
  "KKAR",
  "APIK",
  "AKIE",
  "ATRE",
  "AKAR",
  "WPIK",
  "WKIE",
  "WTRE",
  "WKAR",
  "DPIK",
  "DKIE",
  "DTRE",
  "DKAR",
  "KPIK",
  "KKIE",
  "KTRE",
  "KKAR",
  "APIK",
  "AKIE",
  "ATRE",
  "AKAR",
];

export const fullCards4 = [
  "WPIK",
  "APIK",
  "AKIE",
  "ATRE",
  "AKAR",
];


const checkIfContains = (arr: string[], target: string[]) =>
  target.every((v) => arr.includes(v));

const cleanArray = (cards: string[]) => {
  fullCards.forEach((element) => {
    let index = cards.indexOf(element);
    if (index !== -1) {
      cards.splice(index, 1);
    }
  });
  return cards;
};

function countDeck(cards: string[]) {
  let newCards = [...cards];
  let fullDeck = 0;

  if (newCards.length < 16) return fullDeck;
  while (newCards.length > 15) {
    if (checkIfContains(fullCards, newCards)) {
      fullDeck++;
      newCards = cleanArray(cards);
    } else {
      newCards.shift();
    }
  }
  return fullDeck;
}

console.log(countDeck(cardss));
