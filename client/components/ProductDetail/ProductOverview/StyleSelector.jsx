import React from 'react';

function StyleSelector({styles, changeStyle, currentStyleId}) {
  function handleOnClick(style) {
    changeStyle(style);
  }
  return (
    <div className="style-selector">
      <span>{styles.length} colors available</span>
      <div>
      {styles && styles.map((style) => {
        return <img
        className={style.style_id === currentStyleId ? "selected" : ""}
        key={style.style_id}
        onClick={(()=>{handleOnClick(style)})}
        src={style.photos[0].thumbnail_url}
        />
      })}

      </div>
    </div>
  )
}

export default StyleSelector;