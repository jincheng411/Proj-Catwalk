import React, { useState } from 'react';
import ThumbnailList from './ThumbnailList';
import MainImg from './MainImg';
import './ImageGallery.css'

function ImageGallery({ style }) {
  const [currImg, setCurrImg] = useState(null);
  const [imgIndex, setImgIndex] = useState(0);

  function changeCurrImg(index) {
    setImgIndex(index);
  }

  function changeIndex(num) {
    const length = style.photos.length;
    setImgIndex((imgIndex + num + length) % length);
  }

  return (
    <div className="image-gallery">
      <MainImg index={imgIndex} style={style} currImg={currImg} defaultImg={style.name ? style.photos[0].url : ''}/>
      <ThumbnailList list={style.photos} changeCurrImg={changeCurrImg}/>
      <button onClick={()=>changeIndex(-1)}>&lt; </button>
      <button onClick={()=>changeIndex(1)}>&gt; </button>
    </div>
  )
}

export default ImageGallery;