import React from 'react';

function Description({ product, features }) {
  return (
    <div className="product-detail-description">
      <h4>{product.slogan}</h4>
      <p>{product.description}</p>
      {features && features.map((feature) => {
      return <p>{feature.value}</p>
    })}
    </div>
  )
}

export default Description;