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
  title: 'Mridhul | Backend Developer & Software Engineer',
  description:
    'Portfolio of Mridhul, a software engineer architecting scalable systems and engineering high-performance software. Turning complex problems into elegant logic.',
  keywords:
    'Mridhul Krishna, Backend Developer India, Python Developer Kerala, Django Developer, Software Engineer Portfolio, Full Stack Developer, REST API Developer, Scalable Web Applications, High Performance Backend, React Developer, Next.js Developer, TypeScript Developer, Python Django REST, Web Application Developer, API Development, Cloud Deployment, Firebase Integration, Portfolio Website Developer',
  siteUrl: 'https://mridhulkrishna.in',
  defaultImage: 'https://mridhulkrishna.in/mridhul.webp',
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
    : `${title} | Mridhul - Backend Developer & Software Engineer`;

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
      <meta name="author" content="Mridhul" />
      <link rel="canonical" href={currentCanonical} />

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

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentCanonical} />
      <meta name="twitter:title" content={metaTwitterTitle} />
      <meta name="twitter:description" content={metaTwitterDesc} />
      <meta name="twitter:image" content={twitterImage} />
    </Helmet>
  );
};

export default SEO;
