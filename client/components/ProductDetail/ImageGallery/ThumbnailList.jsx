import React from 'react';

function ThumbnailList({list, changeCurrImg}) {
  function handleOnClick(index) {
    changeCurrImg(index);
  }
  return (
    <div className="thumbnail-list">
      {list?.map((item, index) => {
        return <img key={index} src={item.thumbnail_url} onClick={()=>handleOnClick(index)}/>
      })}
    </div>
  )
}

export default ThumbnailList;