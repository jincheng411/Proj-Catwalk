import React, { useState } from 'react';
import ThumbnailList from './ThumbnailList';
import MainImg from './MainImg';
import './ImageGallery.css';

function ImageGallery({ style, setThumbnailShown }) {
  const [imgIndex, setImgIndex] = useState(0);
  const [isThumbnailShown, setIsThumbnailShown] = useState(false);

  function changeCurrImg(index) {
    setImgIndex(index);
  }

  function changeIndex(num) {
    const length = style.photos.length;
    setImgIndex((imgIndex + num + length) % length);
  }

  return (
    <div className="image-gallery" onMouseEnter={() => setIsThumbnailShown(true)} onMouseLeave={() => setIsThumbnailShown(false)}>
      <MainImg index={imgIndex} style={style} defaultImg={style.name ? style.photos[0].url : ''} />
      <ThumbnailList currIndex={imgIndex} list={style.photos} changeCurrImg={changeCurrImg} isShown={isThumbnailShown} />
      <span onClick={() => changeIndex(-1)}><i className="fas fa-arrow-left"></i></span>
      <span onClick={() => changeIndex(1)}><i className="fas fa-arrow-right"></i></span>
    </div>
  )
}

export default ImageGallery;