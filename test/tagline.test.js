import { test } from 'node:test';
import assert from 'node:assert';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

test('index.html contains the exact tagline "Built for mildly improbable inspiration."', () => {
  const indexPath = join(__dirname, '..', 'index.html');
  const htmlContent = readFileSync(indexPath, 'utf-8');
  
  const expectedTagline = 'Built for mildly improbable inspiration.';
  
  assert.ok(
    htmlContent.includes(expectedTagline),
    `index.html should contain the exact string "${expectedTagline}"`
  );
});
