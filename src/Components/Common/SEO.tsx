import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  noindex?: boolean;
}

const DEFAULT_SEO = {
  title: 'Mridhul Krishna | Best Django Full Stack Developer in Kozhikode, Kerala, India',
  description:
    'Portfolio of Mridhul Krishna, top-rated Django full stack developer and backend engineer in Nanminda, Kozhikode, Kerala, India. Expert in Python, Django REST Framework, React, TypeScript, PostgreSQL, Redis, Celery, and scalable system architecture.',
  keywords:
    'best Django fullstack developer in kozhikode, best Django developer in kerala, best Django full stack developer in nanminda, best Django developer in india, python django developer kozhikode, full stack developer calicut kerala, software engineer nanminda kozhikode, backend developer kerala, freelance django developer india, react django full stack developer, django rest framework specialist, python fullstack developer calicut, web application developer kerala, hire django developer kerala india, scalable backend architect india, python developer nanminda, mridhul krishna, mridhul krishna portfolio',
  siteUrl: 'https://mridhulkrishna.in',
  defaultImage: 'https://mridhulkrishna.in/og-image.png',
};

export const SEO = ({
  title,
  description = DEFAULT_SEO.description,
  keywords = DEFAULT_SEO.keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage = DEFAULT_SEO.defaultImage,
  ogUrl,
  twitterTitle,
  twitterDescription,
  twitterImage = DEFAULT_SEO.defaultImage,
  noindex = false,
}: SEOProps) => {
  const isHome = !title;
  const pageTitle = isHome
    ? DEFAULT_SEO.title
    : `${title} | Mridhul Krishna - Best Django Full Stack Developer in Kozhikode, Kerala`;

  const currentCanonical = canonical || (ogUrl ? ogUrl : DEFAULT_SEO.siteUrl);
  const metaOgTitle = ogTitle || pageTitle;
  const metaOgDesc = ogDescription || description;
  const metaTwitterTitle = twitterTitle || pageTitle;
  const metaTwitterDesc = twitterDescription || description;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Mridhul Krishna" />
      <link rel="canonical" href={currentCanonical} />

      {/* Geo Meta Tags for Local & Regional SEO */}
      <meta name="geo.region" content="IN-KL" />
      <meta name="geo.placename" content="Nanminda, Kozhikode, Kerala, India" />
      <meta name="geo.position" content="11.4365;75.8340" />
      <meta name="ICBM" content="11.4365, 75.8340" />

      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentCanonical} />
      <meta property="og:title" content={metaOgTitle} />
      <meta property="og:description" content={metaOgDesc} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Mridhul Krishna - Best Django Full Stack Developer in Kozhikode, Kerala, India" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentCanonical} />
      <meta name="twitter:title" content={metaTwitterTitle} />
      <meta name="twitter:description" content={metaTwitterDesc} />
      <meta name="twitter:image" content={twitterImage} />
      <meta name="twitter:image:alt" content="Mridhul Krishna - Best Django Full Stack Developer in Kozhikode, Kerala, India" />
    </Helmet>
  );
};

export default SEO;
