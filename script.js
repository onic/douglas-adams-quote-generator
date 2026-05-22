const quotes = [
  "I love deadlines. I like the whooshing sound they make as they fly by.",
  "The answer to the ultimate question of life, the universe and everything is 42.",
  "Time is an illusion. Lunchtime doubly so.",
  "Would it save you a lot of time if I just gave up and went mad now?",
  "Don't panic."
];

const quoteOutput = document.getElementById("quote-output");
const newQuoteButton = document.getElementById("new-quote-button");

let previousIndex = -1;

function getNextQuoteIndex() {
  if (quotes.length <= 1) {
    return 0;
  }

  let nextIndex = previousIndex;
  while (nextIndex === previousIndex) {
    nextIndex = Math.floor(Math.random() * quotes.length);
  }

  return nextIndex;
}

function showQuote() {
  const nextIndex = getNextQuoteIndex();
  previousIndex = nextIndex;
  quoteOutput.textContent = quotes[nextIndex];
}

newQuoteButton.addEventListener("click", showQuote);
