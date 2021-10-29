/**********/
// EXAMPLES
/**********/

import { result } from "lodash";

// numbers: [number]
const numbers = [1, 2, 3];

// pricedItem: {price: number, taxable: boolean}
const pricedItem = { price: 10, taxable: false };

// pricedItems: [{price: number, taxable: boolean}]
const pricedItems = [pricedItem, pricedItem];

// calculateTotalImperative: (items: [{price: number, taxable: boolean}], tax: number) -> number
const calculateTotalImperative = (items, tax) => {
  let result = 0;
  for (const item of items) {
    const { price, taxable } = item;
    if (taxable) {
      result += price * Math.abs(tax);
    }
    result += price;
  }
  return result;
};

/**********/
// ASSIGNMENT
/**********/

// prices: (items: [{price: number}]) -> [number]
const prices = (items) => items.map((e) => e.price);

// sum: (numbers: [number]) -> number
const sum = (numbers) => numbers.reduce((a, b) => a + b, 0);

// selectTaxable: (items: [{taxable: boolean}]) -> [{taxable: boolean}]
const selectTaxable = (items) => items.filter((e) => e.taxable);

// applyTax: (prices: [number], tax: number) -> [number]
const applyTax = (prices, tax) => prices.map((e) => e * tax);

// baseSum: (items: [{price: number}]) -> number
const baseSum = (items) => sum(prices(items));

// taxSum: (items: [{price: number, taxable: boolean}], tax: number ) -> number
const taxSum = (items, tax) => sum(applyTax(prices(selectTaxable(items)), tax));

// calculateTotalDeclarative: (items: [{price: number, taxable: boolean}], tax: number) -> number
const calculateTotalDeclarative = (items, tax) =>
  baseSum(items) + taxSum(items, Math.abs(tax));

export default {
  prices,
  sum,
  selectTaxable,
  applyTax,
  baseSum,
  taxSum,
  calculateTotalDeclarative,
};
