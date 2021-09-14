import React from 'react';

function StyleSelector({styles, changeStyle}) {
  function handleOnClick(style) {
    changeStyle(style);
  }
  return (
    <div className="style-selector">
      {styles && styles.map((style) => {
        return <p key={style.style_id} onClick={(()=>{handleOnClick(style)})}>{style.name}</p>
      })}
    </div>
  )
}

export default StyleSelector;