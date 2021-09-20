import React from 'react';

function ThumbnailList({ list, changeCurrImg, currIndex }) {
  function handleOnClick(index) {
    changeCurrImg(index);
  }
  return (
    <div className="thumbnail-list">
      {list?.map((item, index) => {
        console.log()
        return <img
          id={currIndex === index ? 'thumbnail-selected' : null}
          key={index}
          src={item.thumbnail_url}
          onClick={() => handleOnClick(index)}
        />
      })}
    </div>
  )
}

export default ThumbnailList;