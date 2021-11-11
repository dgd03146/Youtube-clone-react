import React, { useRef } from 'react';
import styles from './header.module.css';
import menu from './images/menu.png';
import logo from './images/logo.png';
import search from './images/search.png';
import github from './images/github.png';
import tstory from './images/tstory.png';
import jeong from './images/jeong.jpg';

const Header = ({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };
  const onClick = event => {
    handleSearch();
  };

  const onKeyPress = event => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <nav className={styles.header}>
      <div className={styles.left}>
        <img className={styles.menu} src={menu} alt="menu" />
        <img className={styles.logo} src={logo} alt="logo" />
        <span className={styles.youtube}>YouTube</span>
      </div>
      <div className={styles.center}>
        <input
          ref={inputRef}
          type="search"
          placeholder="Search"
          onKeyPress={onKeyPress}
        />
        <button className={styles.search_btn} onClick={onClick}>
          <img className={styles.search} src={search} alt="search" />
        </button>
      </div>
      <div className={styles.right}>
        <a href="https://github.com/dgd03146">
          <img className={styles.github} src={github} alt="github" />
        </a>
        <a href="https://imgeozi.tistory.com">
          <img className={styles.tstory} src={tstory} alt="blog" />
        </a>
        <a href="https://www.youtube.com/channel/UCEPrexquOQfiDxFr8uIJ-8Q">
          <img className={styles.jeong} src={jeong} alt="jeong" />
        </a>
      </div>
    </nav>
  );
};

export default Header;
