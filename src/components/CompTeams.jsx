import "../styles/CompTeams.css";
import { FaFacebookF, FaInstagram, FaSnapchatGhost } from "react-icons/fa";

function CompTeams() {

    const barbers = [
  {
    name: "Alex",
    specialty: "Fade & Beard",
    desc: "Barbier avec 10 ans d'expérience",
    image: "/images/teams/barber1.jpg",
    social: {
      facebook: "#",
      instagram: "#",
      snapchat: "#"
    }
  },
  {
    name: "Sam",
    specialty: "Classic Cut",
    desc: "Expert des coupes traditionnelles",
    image: "/images/teams/barber2.jpg",
    social: {
      facebook: "#",
      instagram: "#",
      snapchat: "#"
    }
  },
  {
    name: "Mike",
    specialty: "Modern Style",
    desc: "Spécialiste des styles modernes",
    image: "/images/teams/barber3.jpg",
    social: {
      facebook: "#",
      instagram: "#",
      snapchat: "#"
    }
  }
];





    return(
    <div className="teams-container">

        <div className="teams-header">
            <div className="teams-header-text">
                <h6>° Rencontrez</h6>
                <h2>Meilleur Équipe de Barbiers</h2>
            </div>
            <div className="teams-header-sidetext">
                <p>Notre équipe de barbiers talentueux et passionnés est dédiée à offrir des services de coiffure et de rasage de la plus haute qualité. Avec des années d'expérience et une expertise approfondie, nos barbiers sont prêts à transformer votre look et à vous offrir une expérience de salon exceptionnelle.</p>
                <button className="teams-header-btn">Rencontrez notre équipe</button>    
            </div>
        </div>

            <div className="teams-members">
        {barbers.map((barber, index) => (
            
            <div
            key={index}
            className="teams-members-items"
            style={{ backgroundImage: `url(${barber.image})` }}
            >
            <h5>{barber.name}</h5>
            <p>{barber.specialty}</p>
            <p>{barber.desc}</p>

            <div className="teams-icons-container">
                <a href={barber.social.facebook}><FaFacebookF className="icon-teams" /></a>
                <a href={barber.social.instagram}><FaInstagram className="icon-teams" /></a>
                <a href={barber.social.snapchat}><FaSnapchatGhost className="icon-teams" /></a>
            </div>

            </div>
        ))}
        </div>
    </div>    
    )
}

export default CompTeams;