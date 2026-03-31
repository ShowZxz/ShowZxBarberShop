import "../styles/AboutUs.css";
import ContactUs from "./ContactUs";
import CompTeams from "../components/CompTeams";

function AboutUs() {
  return (
    <>
      <div className="aboutus-container">
        <h1>À Propos de Nous</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam
          lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam
          viverra nec consectetur ante hendrerit. Donec et mollis dolor.
          Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam
          tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut
          libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </p>
        <div className="aboutus-first-line">
          <img src="/images/gallery/1.jpg" alt="Barbershop" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
            diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac
            quam viverra nec consectetur ante hendrerit. Donec et mollis dolor.
            Praesent et diam eget libero egestas mattis sit amet vitae augue.
            Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec
            ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="aboutus-second-line">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
            diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac
            quam viverra nec consectetur ante hendrerit. Donec et mollis dolor.
            Praesent et diam eget libero egestas mattis sit amet vitae augue.
            Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec
            ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </p>
          <img src="/images/gallery/2.jpg" alt="Barbershop" />
        </div>
      </div>
      <CompTeams />
      <ContactUs />
    </>
  );
}

export default AboutUs;
