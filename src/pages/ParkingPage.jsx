import "../assets/scss/ParkingPage.scss";
import Button from "../components/Button";
import Footer from "../components/Footer";

const ParkingPage = () => {
  return (
    <div className="parking-container">
      <main className="glass-card">
        <header>
          <h1>Nouvelle adresse</h1>
        </header>

        <p className="description">
          Mon portfolio évolue ! Je me concentre désormais sur mon activité
          professionnelle. Je vous invite à découvrir mon nouvel univers ici :
        </p>

        <div className="main-cta">
          <Button
            text="Mon site professionnel"
            name="site"
            id="https://alx-solutions-numeriques.fr/"
          />
        </div>

        <div className="social-links">
          <Button
            text="Email"
            name="mail"
            id="contact@alx-solutions-numeriques.fr"
          />
          <Button
            text="GitHub"
            name="github"
            id="https://github.com/SylvainAlx"
          />
          <Button
            text="LinkedIn"
            name="linkedin"
            id="https://www.linkedin.com/in/sylvain-alx/"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ParkingPage;
