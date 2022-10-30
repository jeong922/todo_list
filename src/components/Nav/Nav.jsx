import React from 'react';
import styles from './Nav.module.css';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { useDarkMode } from '../context/DarkMode';

export default function Nav({ filter, handleFilter }) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const handleClick = (e) => {
    handleFilter(e.target.value);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.mode}>
        <button className={styles.theme} onClick={toggleDarkMode}>
          {darkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
        </button>
      </div>
      <div className={styles.tab}>
        <button
          onClick={handleClick}
          value="all"
          className={`${styles.button} ${filter === 'all' && styles.seleted}`}
        >
          All
        </button>
        <button
          onClick={handleClick}
          value="active"
          className={`${styles.button} ${
            filter === 'active' && styles.seleted
          }`}
        >
          Active
        </button>
        <button
          onClick={handleClick}
          value="completed"
          className={`${styles.button} ${
            filter === 'completed' && styles.seleted
          }`}
        >
          Completed
        </button>
      </div>
    </nav>
  );
}
