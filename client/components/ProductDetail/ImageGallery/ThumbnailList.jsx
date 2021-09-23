import React from 'react';

function ThumbnailList({ list, changeCurrImg, currIndex, isShown }) {
  return (
    <div className="thumbnail-list">
      {list?.map((item, index) => {
        return <img
          className={isShown ? 'show-thumbnail' : 'hide-thumbnail'}
          id={currIndex === index ? 'thumbnail-selected' : null}
          key={index}
          src={item.thumbnail_url}
          onClick={() => changeCurrImg(index)}
        />
      })}
    </div>
  )
}

export default ThumbnailList;