import React from 'react';
import styles from './LatestInfo.module.css';

const LatestInfo = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Informasi Terkini</h2>
      <div className={styles.infos}>
        <div className={styles.card}>
          <h3>Pentingnya Vaksinasi untuk Sekolah Tatap Muka</h3>
          <p>26 Juli 2021</p>
        </div>
        <div className={styles.card}>
          <h3>Walim Belajar: Yang Perlu Anda Ketahui</h3>
          <p>29 Juli 2021</p>
        </div>
        <div className={styles.card}>
          <h3>Panduan Menyambut Idul Adha 2021</h3>
          <p>15 Juli 2021</p>
        </div>
        <div className={styles.card}>
          <h3>13 Cara Indonesia Tangguh Melawan COVID-19</h3>
          <p>30 Juni 2021</p>
        </div>
      </div>
    </div>
  );
};

export default LatestInfo;
