import { useState } from 'react';
import './CovidForm.css';
import { FaMapMarkerAlt, FaPlusCircle } from 'react-icons/fa';

export default function CovidForm({ onAddCase }) {
  const [provinsi, setProvinsi] = useState('');
  const [jumlah, setJumlah] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!provinsi || !jumlah) {
      alert('Isi semua field');
      return;
    }
    onAddCase(provinsi, parseInt(jumlah));
    setProvinsi('');
    setJumlah('');
  };

  return (
    <div className="covid-form-container">
      <h2 className="form-title">Tambah Kasus Baru</h2>
      <form className="covid-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <FaMapMarkerAlt className="form-icon" />
          <input
            type="text"
            placeholder="Nama Provinsi"
            value={provinsi}
            onChange={(e) => setProvinsi(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <FaPlusCircle className="form-icon" />
          <input
            type="number"
            placeholder="Jumlah Kasus"
            value={jumlah}
            onChange={(e) => setJumlah(e.target.value)}
            className="form-input"
          />
        </div>
        <button type="submit" className="submit-button">
          Tambah
        </button>
      </form>
    </div>
  );
}
