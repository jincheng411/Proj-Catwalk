import React from 'react';

function ThumbnailList({list, changeCurrImg}) {
  function handleOnClick(url) {
    changeCurrImg(url);
  }
  return (
    <div className="thumbnail-list">
      {list?.map((item) => {
        return <img src={item.thumbnail_url} onClick={()=>handleOnClick(item.url)}/>
      })}
    </div>
  )
}

export default ThumbnailList;