// test('adds 1 + 2 to equal 3', () => {
//     expect(1+2).toBe(3);
//   });


import React from 'react';

import {state} from './client/components/RelatedPoductsAndOutfit.jsx'
import {handleRelatedProductsClick} from './client/components/App.js'


test('Updates related products when rendering page', () => {
  productId = '37313';
  handleRelatedProductsClick(productId)
  expect(state.RelatedProducts).toContain('37315')

})