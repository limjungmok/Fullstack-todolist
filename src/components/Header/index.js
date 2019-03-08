import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.base}>
      <h1 className={styles.title}>Header</h1>
      <Link to='/'>TodoList</Link>
      <Link to='/about'>About</Link>
    </header>
  );
};

export default Header;