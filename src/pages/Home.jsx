import React, { useState } from "react";
import "./Home.css";
import Navbar from "../components/Navbar";
import SummaryCard from "../components/SummaryCard";
import ProvinceList from "../components/ProvinceList"; // GANTI ProvinceCard jadi ProvinceList
import CovidForm from "../components/CovidForm";
import VaccinationStatus from "../components/VaccinationStatus";
import ReadingList from "../components/ReadingList";
import LatestInfo from "../components/LatestInfo";
import Footer from "../components/Footer";
import indonesia from "../constants/indonesia";
import initialProvinces from "../constants/provinces";

export default function Home() {
  const [provinces, setProvinces] = useState(initialProvinces);

  const handleAddCase = (provinsiName, jumlahBaru) => {
    const updatedProvinces = provinces.map((prov) =>
      prov.nama.toLowerCase() === provinsiName.toLowerCase()
        ? { ...prov, kasus: prov.kasus + jumlahBaru }
        : prov
    );
    setProvinces(updatedProvinces);
  };

  return (
    <div className="home-container">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h2 className="hero-title">Update Terkini Covid-19</h2>
          <p className="hero-news">
            <strong>Berita:</strong> Varian baru mulai menyebar di wilayah Asia Tenggara.
          </p>
          <p className="hero-news">
            Pemerintah menghimbau masyarakat tetap menjaga protokol kesehatan dan segera vaksinasi booster.
          </p>
          <button className="hero-button">Lihat Berita</button>
        </div>
        <div className="hero-image">
          <img src="/covid.jpg" alt="Covid News" />
        </div>
      </section>

      {/* Summary Section */}
      <section className="summary-section">
        <h2 className="section-title">Statistik Covid Indonesia</h2>
        <div className="summary-cards">
          <SummaryCard title="Positif" value={indonesia.positif} />
          <SummaryCard title="Sembuh" value={indonesia.sembuh} />
          <SummaryCard title="Meninggal" value={indonesia.meninggal} />
        </div>
      </section>

      {/* Provinces Section */}
      <section className="provinsi-section">
        <h2 className="section-title">Data Covid per Provinsi</h2>
        <ProvinceList provinces={provinces} /> {/* Langsung panggil ProvinceList */}
      </section>

      {/* Form Section */}
      <section className="form-section">
        <h2 className="section-title">Tambah Kasus Provinsi</h2>
        <CovidForm onAddCase={handleAddCase} />
      </section>

      {/* Additional Info Section */}
      <div className="additional-info">
        <VaccinationStatus />
        <ReadingList />
        <LatestInfo />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
