import React, { useState } from 'react';
import ThumbnailList from './ThumbnailList';
import MainImg from './MainImg';
import './ImageGallery.css'

function ImageGallery({ style }) {
  const [currImg, setCurrImg] = useState(null);

  function changeCurrImg(url) {
    setCurrImg(url)
  }

  return (
    <div className="image-gallery">
      <MainImg currImg={currImg} defaultImg={style.name ? style.photos[0].url : ''}/>
      <ThumbnailList list={style.photos} changeCurrImg={changeCurrImg}/>
    </div>
  )
}

export default ImageGallery;