import React from 'react';
import style from './button.module.css'


function Button(props) {
  return (
    <>
    <button className={style.button}>
      <div className={style.button__text}>{props.children}</div>
    </button>
    </>
  );
}

export default Button;
