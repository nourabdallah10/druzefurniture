import { useEffect } from 'react';

interface OrganizationSchemaProps {
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
}

/**
 * Schema.org JSON-LD markup for organization
 */
export const OrganizationSchema = ({
  name = 'Furniture Store',
  url = window.location.origin,
  logo,
  description,
}: OrganizationSchemaProps) => {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name,
      url,
    };

    if (logo) {
      (schema as any).logo = logo;
    }

    if (description) {
      (schema as any).description = description;
    }

    // Remove existing schema script if present
    const existingScript = document.querySelector('script[type="application/ld+json"][data-organization-schema]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new schema script
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-organization-schema', 'true');
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.querySelector('script[type="application/ld+json"][data-organization-schema]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [name, url, logo, description]);

  return null;
};

