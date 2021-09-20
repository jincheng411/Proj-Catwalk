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
        <ul>
          {features && features.map((feature) => {
            return <li key={feature.value}>{feature.value}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default Description;