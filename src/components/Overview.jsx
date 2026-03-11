import '../styles/Overview.css'

function Overview() {

  return (
     <div className="grid-container">

  <div className="grid-row">
    <div className="grid-item text">
      <p>7 ans</p>
      <h3>Salon d'Excellence</h3>
      <p>Metuat quem tempus quam ferunt quos intellexisse eum a se intellexisse amicorum referre se se aut metui cim se intellexisse.</p>
    </div>
    <div className="grid-item image">
      <img src="/images/overview_img/coupe1.jpg" alt="Image 1" />
    </div>
    <div className="grid-item text">
      <p>Service Attentif</p>
      <h3>Meilleur Service</h3>
      <p>Metuat quem tempus quam ferunt quos intellexisse eum a se intellexisse amicorum referre se se aut metui cim se intellexisse.</p>
    </div>
  </div>

  <div className="grid-row">
    <div className="grid-item image">
      <img src="/images/overview_img/coupe4.jpg" alt="Image 2" />
    </div>
    <div className="grid-item text">
      <p>Plus de 1000 clients satisfaits</p>
      <h3>Client Satisfait</h3>
      <p>Metuat quem tempus quam ferunt quos intellexisse eum a se intellexisse amicorum referre se se aut metui cim se intellexisse.</p>
    </div>
    <div className="grid-item image">
      <img src="/images/overview_img/coupe5.jpg" alt="Image 3" />
    </div>
  </div>

</div>
   );
 
 
 }
 
 export default Overview