import React from 'react';
import MiniBasket from '../MiniBasket/MiniBasket';
import './header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">LOGO</div>
      <div className="header___mini-basket">
        <MiniBasket/>
      </div>
    </header>
  )
}
