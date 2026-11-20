import test from 'node:test';
import assert from 'node:assert/strict';
import { isDiscountActive } from './discount.js';

const startDate = '2026-06-01';
const endDate = '2026-06-30';

test('discount is active on the start date', () => {
  assert.equal(isDiscountActive(startDate, startDate, endDate), true);
});

test('discount is inactive before the start date', () => {
  assert.equal(isDiscountActive('2026-05-31', startDate, endDate), false);
});

test('discount is inactive after the end date', () => {
  assert.equal(isDiscountActive('2026-07-01', startDate, endDate), false);
});
