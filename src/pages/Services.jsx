import "../styles/Services.css";

import CompFooter from "../components/CompFooter";

const categories = {
  Cheveux: [
    { name: "Coupe tondeuse", price: "15€" },
    { name: "Coupe ciseaux", price: "15€" },
    { name: "Rasage cranien", price: "10€" },
    { name: "Coupe enfant (-12 ans)", price: "10€" },
    { name: "Contours", price: "5€" },
    { name: "Motif", price: "(à partir de) 5€" },
    { name: "Raie", price: "OFFERT" },
  ],
  Soins: [
    { name: "Défrisage", price: "10€" },
    { name: "Curly", price: "(à partir de) 10€" },
    { name: "Décoloration", price: "10€" },
    { name: "Coloration", price: "(à partir de) 10€" },
    { name: "Polar white", price: "(à partir de) 50€" },
    { name: "Black masque", price: "7€" },
    { name: "Serviette chaude", price: "5€" },
  ],
  Barbe: [{ name: "Rasage complet", price: "10€" }],
  Formules: [
    { name: "Coupe + Barbe", price: "20€" },
    { name: "Coupe + motif", price: "20€" },
    { name: "Rasage cranien + Barbe", price: "15€" },
  ],
};

const categoriesImages = {
  Cheveux: { title: "Cheveux", image: "/images/gallery/1.jpg" },
  Soins: { title: "Soins", image: "/images/gallery/2.jpg" },
  Barbe: { title: "Barbe", image: "/images/gallery/3.jpg" },
  Formules: { title: "Formules", image: "/images/gallery/4.jpg" },
};

function Services() {
  return (
    <>
    <div className="services-page-container">
      <div className="services-page-header">
        <h1>Nos Services</h1>

        <div className="services-page-list">
          {Object.keys(categories).map((category) => (
            <div className="service-page-card" key={category}>
              <img src={categoriesImages[category].image} alt={category} />

              <h2>{categoriesImages[category].title}</h2>
            </div>
          ))}
        </div>
      </div>
      
      <h1 className="services-header-tarifs">Nos Tarifs</h1>

      <div className="categories-container">
        {Object.entries(categories).map(([category, services]) => (
          <div className="category-block" key={category}>
            <h2>{category}</h2>

            {services.map((service, index) => (
              <div className="service-page-item" key={index}>
                <span>{service.name}</span>
                <span>{service.price}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
    <CompFooter />
    </>
  );
}

export default Services;
