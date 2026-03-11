import "../styles/CompServices.css";

function CompServices() {
  return(
    
    <div className="services-container">
        <div className="service-item">
            <h5>COUPE DE CHEVEUX</h5>
            <h4>Service de Coupe de Cheveux</h4>
            <p>Obtenez une coupe de cheveux parfaite avec nos barbiers expérimentés. Que vous préfériez un style classique ou moderne, nous sommes là pour réaliser votre vision.</p>
            <a href="/services" className="service-link">En savoir plus</a>
        </div>
        <div className="service-item">
            <h5>RASAGE À L'ANCIENNE</h5>
            <h4>Service de Rasage à l'Ancienne</h4>
            <p>Profitez d'un rasage traditionnel à l'ancienne avec des produits de qualité. Notre équipe de barbiers professionnels vous offrira une expérience de rasage luxueuse et apaisante.</p>
            <a href="/services" className="service-link">En savoir plus</a>
        </div>
        <div className="service-item">
            <h5>ENTRETIENS DE LA BARBE</h5>
            <h4>Service d'Entretien de la Barbe</h4>
            <p>Gardez votre barbe bien entretenue et stylée avec nos services d'entretien de la barbe. Nous proposons des tailles, des formes et des soins adaptés à vos préférences.</p>
            <a href="/services" className="service-link">En savoir plus</a>
        </div>
    </div>
  ) 
  
}

export default CompServices;
