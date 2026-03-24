import "../styles/CompGalerie.css";
import { useState } from "react";

function CompGalerie() {
  const [selected, setSelected] = useState(null);

  const images = [
    "/images/gallery/1.jpg",
    "/images/gallery/2.jpg",
    "/images/gallery/3.jpg",
    "/images/gallery/4.jpg",
    "/images/gallery/5.jpg",
    "/images/gallery/6.jpg",
    "/images/gallery/7.jpg",
    "/images/gallery/8.jpg",
    "/images/gallery/9.jpg",
  ];

  return (
    <>
      <div className="gallery-container">
        {images.map((img, index) => (
          <div key={index} className="gallery-item">
            <img src={img} onClick={() => setSelected(img)} />
          </div>
        ))}
      </div>

      {selected && (
        <div className="lightbox" onClick={() => setSelected(null)}>
          <img src={selected} />
        </div>
      )}
    </>
  );
}
export default CompGalerie;
