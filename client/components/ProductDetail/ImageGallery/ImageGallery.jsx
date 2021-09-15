import React, { useState } from 'react';
import ThumbnailList from './ThumbnailList';
import MainImg from './MainImg';
import './ImageGallery.css'

function ImageGallery({ style }) {
  const [currImg, setCurrImg] = useState(null);
  const [imgIndex, setImgIndex] = useState(0);

  function changeCurrImg(index) {
    setCurrImg(style.photos[index].url);
  }

  function changeIndex(num) {
    setImgIndex(imgIndex + num);
  }

  return (
    <div className="image-gallery">
      <MainImg currImg={currImg} defaultImg={style.name ? style.photos[0].url : ''}/>
      <ThumbnailList list={style.photos} changeCurrImg={changeCurrImg}/>
      <button onClick={()=>changeIndex(-1)}>&lt; </button>
      <button onClick={()=>changeIndex(1)}>&gt; </button>
      {/* <btn>></btn> */}
    </div>
  )
}

export default ImageGallery;