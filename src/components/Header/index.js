import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={`show ${styles.header}`}>
      Header
      <Link to='/'>TodoList</Link>
      <Link to='/about'>About</Link>
    </header>
  );
};

export default Header;