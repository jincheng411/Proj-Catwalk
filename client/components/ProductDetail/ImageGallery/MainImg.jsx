import React from 'react';

function MainImg({index, style}) {
  return (
    <div className="product-detail-main-img">
      <img src={style.name? style.photos[index].url : ''} />
    </div>
  )
}

export default MainImg;