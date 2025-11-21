import { useEffect } from "react";

/**
 * SEOSchema Component
 * Renders JSON-LD structured data for SEO purposes
 * @param {Object} schema - The schema object to be rendered as JSON-LD
 */
const SEOSchema = ({ schema }) => {
  useEffect(() => {
    // Create script element
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);
    script.id = `schema-${schema["@type"]}-${Date.now()}`;
    
    // Append to head
    document.head.appendChild(script);
    
    // Cleanup on unmount
    return () => {
      const existingScript = document.getElementById(script.id);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [schema]);

  return null; // This component doesn't render anything visible
};

export default SEOSchema;
