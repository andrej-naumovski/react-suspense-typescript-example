import React, { FunctionComponent, ImgHTMLAttributes } from 'react';
import { unstable_createResource } from 'react-cache';
import ImageComponent from './Image';

const ImgResource = unstable_createResource((src: string) => {
  const image = new Image();
  return new Promise((resolve) => {
    image.src = src;
    image.onload = resolve;
  });
});

const Img: FunctionComponent<ImgHTMLAttributes<HTMLImageElement>> = ({ src, ...rest }) => {
  ImgResource.read(src!);

  return <ImageComponent src={src} {...rest} />;
};

export default Img;
