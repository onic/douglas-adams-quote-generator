// Random quote generator that displays a new quote each time the button is clicked
const quotes = [
  "I love deadlines. I like the whooshing sound they make as they fly by.",
  "The answer to the ultimate question of life, the universe and everything is 42.",
  "Time is an illusion. Lunchtime doubly so.",
  "Would it save you a lot of time if I just gave up and went mad now?",
  "Don't panic.",
  "In the beginning the Universe was created. This has made a lot of people very angry and been widely regarded as a bad move.",
  "A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.",
  "The ships hung in the sky in much the same way that bricks don't.",
  "Flying is learning how to throw yourself at the ground and miss."
];

const quoteOutput = document.getElementById("quote-output");
const newQuoteButton = document.getElementById("new-quote-button");

if (!quoteOutput) {
  throw new Error('Element with id "quote-output" not found');
}

if (!newQuoteButton) {
  throw new Error('Element with id "new-quote-button" not found');
}

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
