import React, {useEffect, useRef, useState} from 'react';

function ImageZoom({src}) {
  const [isPanning, setPanning] = useState(false);
  const [image, setImage] = useState();
  const [position, setPosition] = useState({
    oldX: 0,
    oldY: 0,
    x: 0,
    y: 0,
    z: 1,
  });

  const containerRef = useRef();

  const onLoad = (e) => {
    setImage({
      width: e.target.naturalWidth,
      height: e.target.naturalHeight,
    });
  };

  const onMouseDown = (e) => {
    e.preventDefault();
    setPanning(true);
    setPosition({
      ...position,
      oldX: e.clientX,
      oldY: e.clientY
    });
  };

  const onWheel = (e) => {
    if (e.deltaY) {
      // const sign = Math.sign(e.deltaY) / 10;
      // const scale = 1 - sign;
      const rect = containerRef.current.getBoundingClientRect();

      setPosition({
        ...position,
        x: position.x * 2 - (rect.width / 2 - e.clientX + rect.x) * 2,
        y: position.y * 2 - (image.height * rect.width / image.width / 2 - e.clientY + rect.y) * 2,
        z: position.z * 2,
      });
    }
  };

  useEffect(() => {
    const mouseup = () => {
      setPanning(false);
    };

    const mousemove = (event) => {
      if (true) {
        setPosition({
          ...position,
          x: position.x + event.clientX - position.oldX,
          y: position.y + event.clientY - position.oldY,
          oldX: event.clientX,
          oldY: event.clientY,
        });
      }
    };

    // window.addEventListener('mouseup', mouseup);
    window.addEventListener('mousemove', mousemove);

    return () => {
      // window.removeEventListener('mouseup', mouseup);
      window.removeEventListener('mousemove', mousemove);
    };
  });

  return (
    <div
      className="PanAndZoomImage-container"
      ref={containerRef}
      onHover={onMouseDown}
      onWheel={onWheel}
    >
      <div
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${position.z})`,
        }}
      >
        <img
          className="PanAndZoomImage-image"
          alt="floorplan"
          src={src}
          onLoad={onLoad}
        />
      </div>
    </div>
  );
}

export default ImageZoom;