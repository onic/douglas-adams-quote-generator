import { test } from 'node:test';
import assert from 'node:assert';
import { quotes, getNextQuoteIndex } from '../quotes.js';

test('quotes is an array with at least 16 entries', () => {
  assert.ok(Array.isArray(quotes), 'quotes should be an array');
  assert.ok(quotes.length >= 16, `quotes should have at least 16 entries, but has ${quotes.length}`);
});

test('quotes array has increased to at least 28 entries after new quote addition', () => {
  // Baseline was 27 quotes; after adding 1 new quote, should have at least 28
  assert.ok(quotes.length >= 28, `quotes should have at least 28 entries after new quote addition, but has ${quotes.length}`);
});

test('every quote has non-empty text and source strings', () => {
  quotes.forEach((quote, index) => {
    assert.ok(
      typeof quote.text === 'string' && quote.text.length > 0,
      `Quote at index ${index} should have a non-empty text string`
    );
    assert.ok(
      typeof quote.source === 'string' && quote.source.length > 0,
      `Quote at index ${index} should have a non-empty source string`
    );
  });
});

test('no duplicate text values in quotes array', () => {
  const textValues = quotes.map(q => q.text);
  const uniqueTexts = new Set(textValues);
  assert.strictEqual(
    textValues.length,
    uniqueTexts.size,
    'All quote text values should be unique'
  );
});

test('getNextQuoteIndex returns in-range index', () => {
  const len = quotes.length;
  for (let i = 0; i < 20; i++) {
    const index = getNextQuoteIndex(0, len);
    assert.ok(index >= 0 && index < len, `Index ${index} should be in range [0, ${len})`);
  }
});

test('getNextQuoteIndex never returns prev when len > 1', () => {
  const len = quotes.length;
  // Test with various previous indices
  for (let prev = 0; prev < Math.min(5, len); prev++) {
    for (let i = 0; i < 20; i++) {
      const next = getNextQuoteIndex(prev, len);
      assert.notStrictEqual(next, prev, `getNextQuoteIndex should not return prev (${prev})`);
    }
  }
});

test('getNextQuoteIndex returns valid index when prev is null', () => {
  const len = quotes.length;
  for (let i = 0; i < 10; i++) {
    const index = getNextQuoteIndex(null, len);
    assert.ok(index >= 0 && index < len, `Index ${index} should be in range [0, ${len})`);
  }
});

test('getNextQuoteIndex returns valid index when prev is undefined', () => {
  const len = quotes.length;
  for (let i = 0; i < 10; i++) {
    const index = getNextQuoteIndex(undefined, len);
    assert.ok(index >= 0 && index < len, `Index ${index} should be in range [0, ${len})`);
  }
});

test('getNextQuoteIndex with len=1 always returns 0', () => {
  const index = getNextQuoteIndex(0, 1);
  assert.strictEqual(index, 0, 'With len=1, should always return 0');
});

test('getNextQuoteIndex with len=2 alternates', () => {
  // With only 2 items, we should always get the other one
  let prev = 0;
  let next = getNextQuoteIndex(prev, 2);
  assert.strictEqual(next, 1, 'After 0, should get 1');
  
  prev = 1;
  next = getNextQuoteIndex(prev, 2);
  assert.strictEqual(next, 0, 'After 1, should get 0');
});
