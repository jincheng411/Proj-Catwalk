import React from 'react';

function MainImg({currImg, defaultImg}) {
  return (
    <div className="product-detail-main-img">
      <img src={currImg || defaultImg} />

    </div>
  )
}

export default MainImg;