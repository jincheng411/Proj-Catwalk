import React from 'react';

function ThumbnailList({ list, changeCurrImg, currIndex, isShown }) {
  function handleOnClick(index) {
    changeCurrImg(index);
  }
  return (
    <div className="thumbnail-list">
      {list?.map((item, index) => {
        return <img
          className={isShown ? 'show-thumbnail' : 'hide-thumbnail'}
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