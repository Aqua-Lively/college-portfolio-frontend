import React from 'react';

import style from './work.module.css'

function Work({src}) {
  return (
    <>
      <img className={style.image} src={src} alt="Картинка" />
    </>
  );
}

export default Work;
