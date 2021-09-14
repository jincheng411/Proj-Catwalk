import React from 'react';

function ImageGallery({ style }) {
  console.log(style)
  console.log(style.name)
  return (
    <div className="image-gallery">
      {style.name && <img src={style.photos[0].url}/>}
    </div>
  )
}

export default ImageGallery;