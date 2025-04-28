import React from 'react';
import styles from './ReadingList.module.css';

const ReadingList = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Bacaan Pilihan</h2>
      <div className={styles.readings}>
        <div className={styles.card}>
          <h3>Panduan Isolasi Mandiri</h3>
          <p>27 Juli 2021</p>
        </div>
        <div className={styles.card}>
          <h3>Cara Isolasi Mandiri yang Benar</h3>
          <p>30 Juli 2021</p>
        </div>
      </div>
    </div>
  );
};

export default ReadingList;
