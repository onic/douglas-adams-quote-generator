// Douglas Adams quotes with source attribution
// Dual-mode ES module: works in browser and Node

export const quotes = [
  {
    text: "I love deadlines. I like the whooshing sound they make as they fly by.",
    source: "The Salmon of Doubt"
  },
  {
    text: "The answer to the ultimate question of life, the universe and everything is 42.",
    source: "The Hitchhiker's Guide to the Galaxy"
  },
  {
    text: "Time is an illusion. Lunchtime doubly so.",
    source: "The Hitchhiker's Guide to the Galaxy"
  },
  {
    text: "Would it save you a lot of time if I just gave up and went mad now?",
    source: "The Hitchhiker's Guide to the Galaxy"
  },
  {
    text: "Don't panic.",
    source: "The Hitchhiker's Guide to the Galaxy"
  },
  {
    text: "In the beginning the Universe was created. This has made a lot of people very angry and been widely regarded as a bad move.",
    source: "The Restaurant at the End of the Universe"
  },
  {
    text: "A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.",
    source: "Mostly Harmless"
  },
  {
    text: "The ships hung in the sky in much the same way that bricks don't.",
    source: "The Hitchhiker's Guide to the Galaxy"
  },
  {
    text: "Flying is learning how to throw yourself at the ground and miss.",
    source: "Life, the Universe and Everything"
  },
  {
    text: "So long, and thanks for all the fish.",
    source: "So Long, and Thanks for All the Fish"
  },
  {
    text: "I may not have gone where I intended to go, but I think I have ended up where I needed to be.",
    source: "The Long Dark Tea-Time of the Soul"
  },
  {
    text: "The fact that we live at the bottom of a deep gravity well, on the surface of a gas covered planet going around a nuclear fireball 90 million miles away and think this to be normal is obviously some indication of how skewed our perspective tends to be.",
    source: "The Salmon of Doubt"
  },
  {
    text: "For a moment, nothing happened. Then, after a second or so, nothing continued to happen.",
    source: "The Hitchhiker's Guide to the Galaxy"
  },
  {
    text: "It is a mistake to think you can solve any major problems just with potatoes.",
    source: "Life, the Universe and Everything"
  },
  {
    text: "He felt that his whole life was some kind of dream and he sometimes wondered whose it was and whether they were enjoying it.",
    source: "The Hitchhiker's Guide to the Galaxy"
  },
  {
    text: "The major difference between a thing that might go wrong and a thing that cannot possibly go wrong is that when a thing that cannot possibly go wrong goes wrong it usually turns out to be impossible to get at or repair.",
    source: "Mostly Harmless"
  },
  {
    text: "There is a theory which states that if ever anyone discovers exactly what the Universe is for and why it is here, it will instantly disappear and be replaced by something even more bizarre and inexplicable. There is another theory which states that this has already happened.",
    source: "The Hitchhiker's Guide to the Galaxy"
  }
];

/**
 * Pure function that returns the next quote index ensuring no immediate repeats
 * @param {number|null|undefined} prev - The previous index (can be null/undefined on first call)
 * @param {number} len - The length of the quotes array
 * @returns {number} A valid index in [0, len) that is different from prev (when len > 1)
 */
export function getNextQuoteIndex(prev, len) {
  if (len <= 0) {
    throw new Error('Array length must be positive');
  }
  
  if (len === 1) {
    return 0;
  }

  let nextIndex;
  do {
    nextIndex = Math.floor(Math.random() * len);
  } while (nextIndex === prev);

  return nextIndex;
}
