import React, { useState } from "react";
import Modal from "./components/Modal.jsx";
import "./App.css";
import { useEffect } from "react";

const modal = {
  title: (
    <>
      <h1>Renos.id</h1>
    </>
  ),
  body: (
    <>
      <p>
        Renos.id merupakan online marketplace yang fokus kepada Produk dan jasa
        kebutuhan rumah (home living & home improvement), dengan memanfaatan
        teknologi yang menjadi passion kami serta kemitraan dengan seller &
        penyedia jasa, pengguna bisa mendapatkan beragam pilihan serta penawaran
        dari berbagai produk dan jasa yang berkualitas dengan harga yang
        kompetitif dan terjangkau.
      </p>
      <p>
        Mulai beroperasi di Indonesia pada bulan Juni 2021, merupakan bagian
        dari Nocnoc.com dengan model bisnis yang sama yang sudah meraih
        kesuksesan sebelumnya di Thailand. Di Renos kami mempunyai beberapa
        value preposition bagi pengguna kami yaitu:
      </p>
      <ul>
        <li>Pengalaman unik untuk layanan yang diberikan.</li>
        <li>
          Beragam pilihan produk dan jasa khusus home living & home improvement.
        </li>
        <li>Platform yang dapat dipercaya.</li>
        <li>Menawarkan berbagai kemudahan.</li>
      </ul>
    </>
  ),
  footer: (
    <>
      <p>©2022 Renos.id. Segala hak cipta dilindungi.</p>
    </>
  ),
};

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleEscapePress = (e) => {
    if (e.key === "Escape") {
      setShowModal(false);
    }
  }

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  return (
    <div className="App" onKeyDown={handleEscapePress}>
      <div className="demo-container">
        <button
          type="button"
          className="btn-modal-open"
          onClick={() => setShowModal(true)}
        >
          RENOS.ID
        </button>
      </div>
      {showModal ? (
        <Modal
          setShowModal={setShowModal}
          modal={modal}
          onClose={() => setShowModal(false)}
        />
      ) : null}
    </div>
  );
}

export default App;
