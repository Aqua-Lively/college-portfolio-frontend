import React from 'react';

import Work from '../work/work'

import style from './works.module.css'

import image1 from '../../users-posts-images/Rectangle1.png'
import image2 from '../../users-posts-images/Rectangle2.png'
import image3 from '../../users-posts-images/Rectangle3.png'
import image4 from '../../users-posts-images/Rectangle4.png'
import image5 from '../../users-posts-images/Rectangle5.png'
import image6 from '../../users-posts-images/Rectangle6.png'

function Works() {
  return (
    <>
      <div className={style.container}>
        <div className={style.works}>
          <Work src = {image1}></Work>
          <Work src = {image2}></Work>
          <Work src = {image3}></Work>
          <Work src = {image4}></Work>
          <Work src = {image5}></Work>
          <Work src = {image6}></Work>
        </div>
      </div>
    </>
  );
}

export default Works;
