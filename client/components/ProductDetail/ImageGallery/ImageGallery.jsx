import React, { useState } from 'react';
import ThumbnailList from './ThumbnailList';
import MainImg from './MainImg';
import './ImageGallery.css'

function ImageGallery({ style }) {
  console.log(style.photos)
  const [currImg, setCurrImg] = useState(null);

  return (
    <div className="image-gallery">
      {/* {style.name && <img src={style.photos[0].url} />} */}
      <MainImg img={currImg} defaultImg={style.name ? style.photos[0].url : ''}/>
      <ThumbnailList list={style.photos}/>
    </div>
  )
}

export default ImageGallery;