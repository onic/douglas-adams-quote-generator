// Random quote generator that displays a new quote each time the button is clicked
import { quotes, getNextQuoteIndex } from './quotes.js';

const quoteOutput = document.getElementById("quote-output");
const quoteSource = document.getElementById("quote-source");
const newQuoteButton = document.getElementById("new-quote-button");
const copyButton = document.getElementById("copy-button");

if (!quoteOutput) {
  throw new Error('Element with id "quote-output" not found');
}

if (!quoteSource) {
  throw new Error('Element with id "quote-source" not found');
}

if (!newQuoteButton) {
  throw new Error('Element with id "new-quote-button" not found');
}

if (!copyButton) {
  throw new Error('Element with id "copy-button" not found');
}

let previousIndex = -1;
let copyFeedbackTimer = null;

function resetCopyButton() {
  copyButton.textContent = "Copy";
  copyButton.classList.remove("copy-success", "copy-error");
  copyButton.setAttribute("aria-label", "Copy quote to clipboard");
}

function showQuote() {
  const nextIndex = getNextQuoteIndex(previousIndex, quotes.length);
  previousIndex = nextIndex;
  const quote = quotes[nextIndex];
  quoteOutput.textContent = quote.text;
  quoteSource.textContent = `— ${quote.source}`;
  
  // Show copy button when quote is displayed
  copyButton.style.display = "inline-block";
  
  // Reset copy button to default state
  resetCopyButton();
  
  // Clear any pending feedback timer
  if (copyFeedbackTimer) {
    clearTimeout(copyFeedbackTimer);
    copyFeedbackTimer = null;
  }
}

async function copyQuoteToClipboard() {
  const quoteText = quoteOutput.textContent;
  const sourceText = quoteSource.textContent;
  const fullText = `${quoteText}\n${sourceText}`;
  
  try {
    await navigator.clipboard.writeText(fullText);
    
    // Show success feedback
    copyButton.textContent = "Copied!";
    copyButton.classList.add("copy-success");
    copyButton.classList.remove("copy-error");
    copyButton.setAttribute("aria-label", "Quote copied to clipboard");
    
    // Reset after 2.5 seconds
    copyFeedbackTimer = setTimeout(() => {
      resetCopyButton();
      copyFeedbackTimer = null;
    }, 2500);
    
  } catch (error) {
    // Show error feedback
    copyButton.textContent = "Failed";
    copyButton.classList.add("copy-error");
    copyButton.classList.remove("copy-success");
    copyButton.setAttribute("aria-label", "Failed to copy quote");
    
    // Reset after 2.5 seconds
    copyFeedbackTimer = setTimeout(() => {
      resetCopyButton();
      copyFeedbackTimer = null;
    }, 2500);
  }
}

newQuoteButton.addEventListener("click", showQuote);
copyButton.addEventListener("click", copyQuoteToClipboard);
