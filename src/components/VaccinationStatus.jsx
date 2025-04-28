import React from 'react';
import styles from './VaccinationStatus.module.css';

const VaccinationStatus = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Situasi Vaksinasi COVID-19 Saat Ini</h2>
      <div className={styles.vaccineCards}>
        <div className={styles.card}>
          <h3>Vaksinasi Dosis 1</h3>
          <div className={styles.bar}></div>
          <ul className={styles.list}>
            <li>Tenaga Kesehatan: 50%</li>
            <li>Lansia: 40%</li>
            <li>Petugas Publik: 30%</li>
            <li>Umum & Remaja: 45%</li>
            <li>Gotong Royong: 50%</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3>Vaksinasi Dosis 2</h3>
          <div className={styles.bar}></div>
          <ul className={styles.list}>
            <li>Tenaga Kesehatan: 30%</li>
            <li>Lansia: 25%</li>
            <li>Petugas Publik: 25%</li>
            <li>Umum & Remaja: 25%</li>
            <li>Gotong Royong: 20%</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VaccinationStatus;
