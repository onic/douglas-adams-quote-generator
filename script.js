// Random quote generator that displays a new quote each time the button is clicked
import { quotes, getNextQuoteIndex } from './quotes.js';

const quoteOutput = document.getElementById("quote-output");
const quoteSource = document.getElementById("quote-source");
const newQuoteButton = document.getElementById("new-quote-button");

if (!quoteOutput) {
  throw new Error('Element with id "quote-output" not found');
}

if (!quoteSource) {
  throw new Error('Element with id "quote-source" not found');
}

if (!newQuoteButton) {
  throw new Error('Element with id "new-quote-button" not found');
}

let previousIndex = -1;

function showQuote() {
  const nextIndex = getNextQuoteIndex(previousIndex, quotes.length);
  previousIndex = nextIndex;
  const quote = quotes[nextIndex];
  quoteOutput.textContent = quote.text;
  quoteSource.textContent = `— ${quote.source}`;
}

newQuoteButton.addEventListener("click", showQuote);
