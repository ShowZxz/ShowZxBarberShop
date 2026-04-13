import "../styles/CompContact.css";


const horaires = [
    {
      jour: "Lundi",
      open: "Ouverture",
      heuresOpen: "Fermé",
      heuresClose: "Fermé",
      close: "Fermeture",
    },
    {
      jour: "Mardi",
      open: "Ouverture",
      heuresOpen: "10:00",
      heuresClose: "19:00",
      close: "Fermeture",
    },
    {
      jour: "Mercredi",
      open: "Ouverture",
      heuresOpen: "10:00",
      heuresClose: "19:00",
      close: "Fermeture",
    },
    {
      jour: "Jeudi",
      open: "Ouverture",
      heuresOpen: "10:00",
      heuresClose: "19:00",
      close: "Fermeture",
    },
    {
      jour: "Vendredi",
      open: "Ouverture",
      heuresOpen: "10:00",
      heuresClose: "19:00",
      close: "Fermeture",
    },
    {
      jour: "Samedi",
      open: "Ouverture",
      heuresOpen: "10:00",
      heuresClose: "18:00",
      close: "Fermeture",
    },
    {
      jour: "Dimanche",
      open: "Ouverture",
      heuresOpen: "12:00",
      heuresClose: "18:00",
      close: "Fermeture",
    },
  ];

function CompContact() {
    return(
    <div className="contact-container">

        <div className="contact-header">
            <div className="contact-header-text">
                <h6>Nous Contacter</h6>
                <h2>Prendre Contact avec nous</h2>
            </div>
            <div className="contact-header-sidetext">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim lorem ipsum dolor sit amet,
                consectetur adipiscing elit.</p>   
            </div>
        </div>

        <div className="contact-content">
            <div className="contact-content-image">
                <img src="/images/contact/contact.jpg" alt="Contact Us" />
            </div>
            <div className="contact-content-info">
                <div className="contact-content-info-location">
                    <h3>Notre Emplacement</h3>
                    <p>123 Rue du Commerce, 75001 Paris, France</p>
                </div>
                <div className="contact-content-info-phone">
                    <h3>Numéro de Téléphone</h3>
                    <p>+33 1 23 45 67 89</p>
                </div>
                <div className="contact-content-info-hours">
                    <h3>Nos Horaires</h3>
                    <ul>
                        {horaires.map((horaire, index) => (
                            <li key={index}>
                                <strong>{horaire.jour}:</strong> {horaire.open} {horaire.heuresOpen} - {horaire.heuresClose} {horaire.close}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

    </div>    
    )
}

export default CompContact;
