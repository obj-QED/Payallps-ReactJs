import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

export const SEO = ({
  description,
  lang,
  meta,
  title,
  image,
  ogDescription,
  siteName = true,
}) => {
  const { pathname } = useLocation();

  const { site, logoImage } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteName
            siteUrl
          }
        }
        logoImage: file(absolutePath: { regex: "/payall.svg/" }) {
          id
          publicURL
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s${siteName ? ' | '+site.siteMetadata.siteName : ''}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: `${title} | ${site.siteMetadata.siteName}`,
        },
        {
          property: `og:description`,
          content: ogDescription || metaDescription,
        },
        {
          property: `og:url`,
          content: `${site.siteMetadata.siteUrl}${pathname}`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:site_name`,
          content: site.siteMetadata.siteName,
        },
        {
          property: `og:image`,
          content:
            image && image.startsWith('https')
              ? image
              : `${site.siteMetadata.siteUrl}${image}`,
        },
        {
          property: `og:image:width`,
          content: `1200`,
        },
        {
          property: `og:image:height`,
          content: `630`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:property`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:title`,
          content: `${title} | ${site.siteMetadata.siteName}`,
        },
        {
          name: `twitter:description`,
          content: ogDescription || metaDescription,
        },
        {
          name: `twitter:image`,
          content: `${site.siteMetadata.siteUrl}${image}`,
        },
      ].concat(meta)}
      link={[
        {
          rel: 'canonical',
          href: `${site.siteMetadata.siteUrl}${
            pathname.indexOf('/leadership') === 0 ? '/leadership' : pathname
          }`,
        },
      ]}
    >
      <script type="application/ld+json">
        {`
        {
          "@context":"http://schema.org",
          "@type":"Corporation",
          "name":"Payall – Cross Border Processing for Banks",
          "telephone":"1-888-729-2551",
          "url":"https://www.payall.com",
          "logo":"${site.siteMetadata.siteUrl}${logoImage.publicURL}",

          "address":{
            "@type":"PostalAddress",
            "streetAddress":"820 W. 41st Street, Suite 216",
            "addressLocality":"Miami Beach",
            "addressRegion":"FL",
            "postalCode":"33140",
            "sameAs":[
              "https://www.facebook.com/payall/",
              "https://twitter.com/payall",
              "https://www.linkedin.com/company/payall-payment-systems/"
            ]
          }
        }
    `}
      </script>
    </Helmet>
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  image: null,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
};
