import React from 'react';

function ThumbnailList({list}) {
  return (
    <div className="thumbnail-list">
      {list?.map((item) => {
        return <img src={item.thumbnail_url}/>
      })}
    </div>
  )
}

export default ThumbnailList;