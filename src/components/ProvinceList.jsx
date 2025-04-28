import React from 'react';
import './ProvinceCard.css';
import { FaVirus } from 'react-icons/fa';

const ProvinceCard = ({ province }) => {
  const getStatusColor = (cases) => {
    if (cases > 100000) return 'danger';
    if (cases > 50000) return 'warning';
    return 'safe';
  };

  return (
    <div className={`province-card ${getStatusColor(province.kasus)}`}>
      <div className="card-header">
        <FaVirus className="icon" />
        <h3>{province.kota}</h3>
      </div>
      <p>
        Kasus: <span className="jumlah">{province.kasus.toLocaleString()}</span>
      </p>
    </div>
  );
};

// Data provinsi Indonesia
const provinces = [
  { kota: 'Jawa Barat', kasus: 150000 },
  { kota: 'DKI Jakarta', kasus: 120000 },
  { kota: 'Jawa Tengah', kasus: 80000 },
  { kota: 'Bali', kasus: 40000 },
  { kota: 'Sulawesi Selatan', kasus: 35000 },
  { kota: 'Kalimantan Timur', kasus: 60000 },
  { kota: 'Sumatera Utara', kasus: 70000 },
  { kota: 'Papua', kasus: 30000 },
  { kota: 'Banten', kasus: 45000 },
  { kota: 'Yogyakarta', kasus: 25000 },
];

const ProvinceList = () => {
  return (
    <div className="province-list">
      {provinces.map((province, index) => (
        <ProvinceCard key={index} province={province} />
      ))}
    </div>
  );
};

export default ProvinceList;
