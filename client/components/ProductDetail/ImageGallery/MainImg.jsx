import React from 'react';

function MainImg({img, defaultImg}) {
  return (
    <div className="product-detail-main-img">
      <img src={defaultImg} />}
    </div>
  )
}

export default MainImg;