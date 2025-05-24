import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: string;
  image?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Credits Granted - Maximize Your R&D Tax Credits',
  description = 'Learn how your business can benefit from R&D tax credits with expert guidance and audit-ready support.',
  canonical,
  type = 'website',
  image = '/og-default.png', // <-- Add your branded Open Graph image later in /public
}) => {
  const siteTitle = 'Credits Granted';
  const fullTitle = `${title} | ${siteTitle}`;

  return (
    <Helmet>
      {/* Basic */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;