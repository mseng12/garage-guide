import ContactForm from "../components/ContactForm";

function About() {
  return (
    <section className="about-section">
      <h2>About Garage Guide</h2>

      <p>
        Garage Guide is a vehicle reference app that helps users browse cars
        and motorcycles, view manuals, and save favorite vehicles.
      </p>

      <h3>Contact</h3>
      <ContactForm />
    
    </section>
  );
}

export default About;