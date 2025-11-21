import SEOSchema from "./SEOSchema";

/**
 * PersonSchema Component
 * Generates Schema.org Person structured data for Sylvain Alexandre
 */
const PersonSchema = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://sylvainalx.github.io/portfolio/#person",
    name: "Sylvain Alexandre",
    alternateName: "Sylvain ALX",
    jobTitle: "Développeur Web & Formateur Indépendant",
    description: "Développeur web full-stack et formateur indépendant spécialisé en React, Node.js, et technologies web modernes. Expérience en développement logiciel avec Delphi et intérêt pour le Web3 et blockchain.",
    url: "https://sylvainalx.github.io/portfolio/",
    email: "contact@alx-solutions-numeriques.fr",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Loire-Authion",
      addressRegion: "Pays de la Loire",
      postalCode: "49",
      addressCountry: "FR"
    },
    sameAs: [
      "https://github.com/SylvainAlx",
      "https://www.linkedin.com/in/sylvain-alx/"
    ],
    knowsAbout: [
      "React",
      "JavaScript",
      "Node.js",
      "MongoDB",
      "Delphi",
      "Next.js",
      "Rust",
      "Web Development",
      "Full-Stack Development",
      "Blockchain",
      "Web3",
      "SASS",
      "Vite",
      "Software Development",
      "Technical Training"
    ],
    worksFor: {
      "@type": "Organization",
      name: "ALX Solutions Numériques",
      url: "https://alx-solutions-numeriques.fr"
    }
  };

  return <SEOSchema schema={personSchema} />;
};

export default PersonSchema;
