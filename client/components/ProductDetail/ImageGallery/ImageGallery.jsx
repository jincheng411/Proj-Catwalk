import React from 'react';

function ImageGallery({ style }) {
  return (
    <div className="image-gallery">
      {style.name && <img src={style.photos[0].url}/>}
    </div>
  )
}

export default ImageGallery;