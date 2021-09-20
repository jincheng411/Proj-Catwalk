import React from 'react';
import './Description.css'

function Description({ product, features }) {
  return (
    <div className="product-detail-description">
      <div>
        <h4>{product.slogan}</h4>
        <p>{product.description}</p>
      </div>
      <span></span>
      <div>
        {features && features.map((feature) => {
          return <p key={feature.value}>{feature.value}</p>
        })}
      </div>
    </div>
  )
}

export default Description;