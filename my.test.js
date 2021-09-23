// test('adds 1 + 2 to equal 3', () => {
//     expect(1+2).toBe(3);
//   });

const React = require('react');
const ProductCard = require('./client/components/RelatedProductsAndOutfits/ProductCard.jsx')
const RelatedProducts = require ('./client/components/RelatedPoductsAndOutfit.jsx')
const App = require('./client/components/App.js')


test('Updates related products when rendering page', () => {
  productId = '37313';
  App.handleRelatedProductsClick(productId)
  expect(RelatedProducts.state.RelatedProducts).toContain('37315')

})