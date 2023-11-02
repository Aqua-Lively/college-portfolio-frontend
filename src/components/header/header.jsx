import React from 'react';

import style from './header.module.css'
import Button from '../button/button.jsx'

function Header() {
  return (
    <>
      <div className={style.header}>


        <h1 className={`${style.title} text-extra-big`}>Работы студентов</h1>

        <div className={style.filter}>
          <Button>все работы</Button>
          <Button>иллюстрации</Button>
          <Button>фото</Button>
          <Button>шрифты</Button>
        </div>



        {/* Hello */}
      </div>
    </>
  );
}

export default Header;
