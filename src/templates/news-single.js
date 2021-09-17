import React from 'react';
import moment from 'moment';
import { SEO } from '../components/SEO';
import { Nav } from '../components/Nav';
import { Layout } from '../components/Layout';
import ReactMarkdownWithHtml from 'react-markdown/with-html';
import { Footer } from '../components/Footer';
import { graphql, Link, useStaticQuery } from 'gatsby';
import FacebookIcon from '../assets/svg/facebook__share.svg';
import TwitterIcon from '../assets/svg/twitter__share.svg';
import LinkedinIcon from '../assets/svg/linkedin__share.svg';

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share';

const NewsSingleTemplate = ({ pageContext, location }) => {
  const categoryData = useStaticQuery(graphql`
    query CategorySingleQuery {
      allStrapiRooms {
        nodes {
          Category
          Content
          Title
          Author {
            Name
            Avatar {
              url
            }
          }
          strapiId
          image {
            url
          }
          Short_description
          url
          Posted_date
        }
      }
      metaImage: file(absolutePath: { regex: "/og-logo.webp/" }) {
        childImageSharp {
          fixed(quality: 100, width: 1200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      metaImageFb: file(absolutePath: { regex: "/og-fb.webp/" }) {
        childImageSharp {
          fixed(quality: 100, width: 597) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const categoryList = categoryData.allStrapiRooms.nodes.filter(
    ({ Category, strapiId }) => {
      return (
        Category.toLowerCase() === pageContext.Category.toLowerCase() &&
        pageContext.strapiId !== strapiId
      );
    }
  );

  return (
    <Layout>
      <SEO
        title={pageContext.Title}
        siteName={false}
        ogDescription={'Latest company news, updates and industry insights.'}
        description={'Latest company news, updates and industry insights.'}
        metaDescription={'Latest company news, updates and industry insights.'}
        image={
          pageContext.image
            ? `https://admin.payallps.com${pageContext.image.url}`
            : categoryData.metaImage.childImageSharp.fixed.src
        }
      />
      <header>
        <Nav />
      </header>
      <div className="container px-6 mx-auto mb-10 blog-list single-post lg:px-16">
        <div className="blog-list__item">
          <div className="info">
            <ul className="flex my-3 text-xs font-normal text-gray-800 article">
              {pageContext.Author && pageContext.Author.Avatar && (
                <li className="mr-2 author">
                  <img
                    src={`https://admin.payallps.com${pageContext.Author.Avatar.url}`}
                    // src='https://admin.payallps.com/uploads/thumbnail_avatar_payall6_735dcb3cd9.jpeg'
                    alt={pageContext.Author.Name}
                    className="avatar"
                  />
                </li>
              )}
              {pageContext.Author && (
                <li className="font-semibold text-blue-800 name">
                  {pageContext.Author.Name}
                </li>
              )}
              {pageContext.Author && <span className="mx-1">|</span>}
              <li className="font-semibold text-blue-800 category">
                <a
                  href={`/newsroom?category=${pageContext.Category.toLowerCase()}`}
                  target="_blank"
                >
                  {pageContext.Category}
                </a>
              </li>
              <li className="list-disc date ml-7">
                {moment(pageContext.Posted_date).format('MMM, YYYY')}
              </li>
            </ul>
          </div>
          <h1 className="text-xl mb-3 sm:text-2x-1 md:text-3xl md:mb-7 font-bold leading-7.5 lg:text-4x1 text-gray-800 uppercase my-7">
            {pageContext.Title}
          </h1>
        </div>
        <div className="content">
          {/* {pageContext.image && <img
            src={`https://admin.payallps.com${pageContext.image.url}`}
            alt={pageContext.Title}
            className="cover"
          />} */}
          <div className="flex flex-wrap body-post">
            <ReactMarkdownWithHtml
              escapeHtml={false}
              allowDangerousHtml
              linkTarget="_blank"
              source={pageContext.Content.replace(
                /\/uploads/g,
                'https://admin.payallps.com/uploads'
              )}
              renderers={{ paragraph: 'p' }}
              className="w-full body-post-inner sm:w-9/12"
            />
            <div className="sticky flex flex-col items-center justify-center w-full h-56 body-post-social sm:w-3/12">
              <div className="font-bold uppercase body-post-social__title">
                share
              </div>
              <div className="flex flex-row justify-around w-full mt-10 social-list sm:w-auto sm:flex-col">
                <span className="mb-6">
                  <FacebookShareButton
                    quote={pageContext.Title}
                    // description={SEO.description}
                    image={
                      pageContext.image
                        ? pageContext.image.url
                        : categoryData.metaImageFb.childImageSharp.fixed.src
                    }
                    url={location.href}
                  >
                    <FacebookIcon size={36} />
                  </FacebookShareButton>
                </span>
                <span className="mb-6">
                  <TwitterShareButton
                    quote={pageContext.Title}
                    // description={SEO.description}
                    image={
                      pageContext.image
                        ? pageContext.image.url
                        : categoryData.metaImage.childImageSharp.fixed.src
                    }
                    url={location.href}
                  >
                    <TwitterIcon size={36} />
                  </TwitterShareButton>
                </span>
                <span>
                  <LinkedinShareButton
                    quote={pageContext.Title}
                    // description={SEO.description}
                    image={
                      pageContext.image
                        ? pageContext.image.url
                        : categoryData.metaImage.childImageSharp.fixed.src
                    }
                    url={location.href}
                  >
                    <LinkedinIcon size={36} />
                  </LinkedinShareButton>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {categoryList.length > 0 && (
        <div className="related-post py-15">
          <div className="container px-6 mx-auto lg:px-16">
            <div className="h-auto text-3xl font-bold leading-snug text-gray-800 title">
              Related posts
            </div>
            <div className="flex flex-wrap justify-start blog-list">
              {categoryList.slice(0, 3).map((item, index) => (
                <div
                  className="p-8 bg-white blog-list__item blog-list__item--default"
                  key={index}
                >
                  <a href={`/newsroom/${item.url}`}>
                    {item.image && (
                      <div className="cover">
                        <img src={item.image.url} alt={item.Title} />
                      </div>
                    )}
                    <div className="info">
                      <h3 className="h-full text-xl font-bold leading-7 text-gray-900 title">
                        {item.Title}
                      </h3>
                      <ul className="flex my-3 text-xs font-normal text-gray-800 article">
                        {item.Author && (
                          <li className="mr-2 author">
                            {pageContext.Author && pageContext.Author.Avatar && (
                              <img
                                src={`https://admin.payallps.com${pageContext.Author.Avatar.url}`}
                                // src='https://admin.payallps.com/uploads/thumbnail_avatar_payall6_735dcb3cd9.jpeg'
                                alt={item.Author.Name}
                                width="24"
                                height="24"
                                className="avatar"
                              />
                            )}
                          </li>
                        )}
                        {item.Author && (
                          <li className="font-semibold text-blue-800 name">
                            {item.Author.Name}
                          </li>
                        )}
                        {item.Author && <span className="mx-1">|</span>}
                        <li className="font-semibold text-blue-800 category">
                          <a
                            href={`/newsroom?category=${item.Category.toLowerCase()}`}
                          >
                            {item.Category}
                          </a>
                        </li>
                        <li className="list-disc date ml-7">
                          {moment(item.Posted_date).format('MMM, YYYY')}
                        </li>
                      </ul>
                      <div className="text-sm font-normal text-gray-800 description">
                        <ReactMarkdownWithHtml
                          escapeHtml={false}
                          allowDangerousHtml
                          linkTarget="_blank"
                          source={item.Short_description.replace(
                            /\/uploads/g,
                            'https://admin.payallps.com/uploads'
                          )}
                          renderers={{ paragraph: 'p' }}
                          className="body-post-inner"
                        />
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </Layout>
  );
};

export default NewsSingleTemplate;
