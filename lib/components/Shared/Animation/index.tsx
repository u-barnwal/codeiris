import React from 'react';
import Lottie from 'react-lottie';

function Animation({
  loop = false,
  autoplay = true,
  data,
  height = 400,
  width = 400,
}) {
  const defaultOptions = {
    loop,
    autoplay,
    animationData: data,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions} height={height} width={width} />;
}

export default Animation;
