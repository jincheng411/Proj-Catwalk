import React from 'react';

function ImageGallery({ styles }) {
  return (
    <div className="image-gallery">
      {styles[0] && <img src={styles[0].photos[0].url}/>}
    </div>
  )
}

export default ImageGallery;