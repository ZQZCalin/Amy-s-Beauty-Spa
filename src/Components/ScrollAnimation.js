import React, { useEffect, useState, useRef } from "react";

function ScrollAnimation({
  dir, fname, size,
  className,
  scrollStart, scrollEnd,
}) {

  const canvasRef = useRef(null);

  const curFrame = index => (
    `${dir}/${fname}${index.toString().padStart(3, '0')}.jpg`
  )

  const frameCount = size;

  const preloadImages = () => {
    for (let i = 1; i < frameCount; i++) {
      const img = new Image();
      img.src = curFrame(i);
    }
  };

  useEffect(() => {

    const html = document.documentElement;

    // declare default values of scrollStart, scrollEnd
    // canvasRef.current -> current canvas element
    if (!scrollStart) {
      scrollStart = canvasRef.current.offsetTop - window.innerHeight;
    }
    if (!scrollEnd) {
      scrollEnd = canvasRef.current.offsetTop;
    }

    preloadImages();

    const canvas = canvasRef.current;
    canvas.height = 1080;
    canvas.width = 1920;
    const context = canvas.getContext('2d');

    const img = new Image();
    img.src = curFrame(1);
    img.onload = function () {
      context.drawImage(img, 0, 0)
    }

    const updateImage = index => {
      img.src = curFrame(index)
      context.drawImage(img, 0, 0);
    }

    window.addEventListener('scroll', () => {
      const scrollCurrent = html.scrollTop;
      const scrollFraction = Math.max((scrollCurrent - scrollStart) / (scrollEnd - scrollStart), 0);
      const frameIndex = Math.min(frameCount - 1, Math.ceil(scrollFraction * frameCount));

      requestAnimationFrame(() => updateImage(frameIndex));
    });
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} className={className} />
    </div>
  );
}

export default ScrollAnimation;