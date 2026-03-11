import "../styles/CompContact.css";

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
                    <p>Lundi - Vendredi: 9h00 - 18h00</p>
                    <p>Samedi: 10h00 - 16h00</p>
                </div>
            </div>
        </div>

    </div>    
    )
}

export default CompContact;
