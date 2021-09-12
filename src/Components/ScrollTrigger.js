import React, { useEffect, useState, useRef } from "react";

function ScrollTrigger({
  dir, fname, size, className, FPS,
  boundTop, boundBot
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

    // we must wait to define html after the entire page is loaded
    const html = document.documentElement;

    if (!boundTop) {
      boundTop = 0;
    }
    if (!boundBot) {
      boundBot = html.scrollHeight - window.innerHeight;
    }

    preloadImages();

    const canvas = canvasRef.current;
    canvas.height = 1080;
    canvas.width = 1920;
    const context = canvas.getContext('2d');

    const img = new Image();

    let frameIndex = 1;

    img.src = curFrame(frameIndex);
    img.onload = function () {
      context.drawImage(img, 0, 0)
    }

    const updateImage = index => {
      img.src = curFrame(index)
      context.drawImage(img, 0, 0);
    }

    let timer;
    let isTiming = false;
    const clearTimer = () => {
      clearInterval(timer);
      frameIndex = 1;
      updateImage(1);
      isTiming = false;
    };

    window.addEventListener('scroll', () => {
      const scrollCurrent = html.scrollTop;

      // MAIN PART: timer
      if (scrollCurrent >= boundTop && scrollCurrent <= boundBot) {
        if (!isTiming) {
          isTiming = true;  // IMPORTANT: set isTiming to true
          timer = setInterval(() => {
            frameIndex = frameIndex + 1;
            updateImage(frameIndex);
          }, 1000 / FPS);
        } else if (frameIndex > frameCount) {
          clearInterval(timer);
          isTiming = false;
        }
      } else {
        clearTimer();
      }
    });
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} className={className} />
    </div>
  );
}

export default ScrollTrigger;