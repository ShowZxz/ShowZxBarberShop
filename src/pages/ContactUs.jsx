import "../styles/ContactUs.css";

import CompFooter from "../components/CompFooter";

const image = "/images/gallery/1.jpg";

function ContactUs() {
  return (
    <>
    <div className="contactus-header-container">
        <h1>Prendre Contact Avec Nous</h1>
        <p>N'hésitez pas à nous contacter pour toute question</p>
    </div>

    <div className="contactus-container">

      <div className="contactus-image">
        <img src={image} alt="Barbershop" />
      </div>

      <div className="form-container">
        <form className="form-contactus">
            <h1 className="form-header-text">Contactez-nous </h1>

          <div className="form-group">
            <label htmlFor="name">Nom :</label>
            <input type="text" id="name" name="user_name" />
          </div>

          <div className="form-group">
            <label htmlFor="mail">E-mail :</label>
            <input type="email" id="mail" name="user_email" />
          </div>

          <div className="form-group">
            <label htmlFor="msg">Message :</label>
            <textarea id="msg" name="user_message"></textarea>
          </div>

          <button type="submit">Envoyer</button>

        </form>
      </div>

    </div>
    <CompFooter />
    </>
  );
}

export default ContactUs;