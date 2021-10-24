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
const prices = (items) => {
  let arr = [];
  for (let i = 0; i < items.length; i++) {
    let number = items[i].price;
    arr.push(number);
  }
  return arr;
};

// sum: (numbers: [number]) -> number
const sum = (numbers) => {
  let number = 0;
  for (let i = 0; i < numbers.length; i++) {
    number += numbers[i];
  }
  return number;
};

// selectTaxable: (items: [{taxable: boolean}]) -> [{taxable: boolean}]
const selectTaxable = (items) => {
  let arr = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i].taxable === true) {
      arr.push(items[i]);
    }
  }
  return arr;
};

// applyTax: (prices: [number], tax: number) -> [number]
const applyTax = (prices, tax) => {
  let arr = [];
  for (let i = 0; i < prices.length; i++) {
    let number = prices[i] * tax;
    arr.push(number);
  }
  return arr;
};

// baseSum: TODO - Type Signature
const baseSum = (items) => sum(prices(items));

// taxSum: TODO - Type Signature
const taxSum = (items, tax) => sum(applyTax(prices(selectTaxable(items)), tax));

// calculateTotalDeclarative: TODO - Type Signature
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
