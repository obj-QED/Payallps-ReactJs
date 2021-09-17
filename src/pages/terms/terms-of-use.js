import React, { useEffect, useRef, useState } from 'react';
import { SEO } from '../../components/SEO';
import { Nav } from '../../components/Nav';
import { Layout } from '../../components/Layout';
import { Footer } from '../../components/Footer';
import { useStaticQuery, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import classNames from 'classnames';
import { Link } from 'gatsby';

const TermsOfUsePage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query TermsQuery {
      cookies: allMdx(
        sort: { fields: frontmatter___chapter, order: ASC }
        filter: { fileAbsolutePath: { regex: "/terms/" } }
      ) {
        edges {
          node {
            body
            frontmatter {
              name
              chapter
              slug
            }
          }
        }
      }
      metaImage: file(absolutePath: { regex: "/homepage.webp/" }) {
        childImageSharp {
          fixed(quality: 100, width: 1200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const [selectedChapter, setSelectedChapter] = useState(
    data.cookies.edges[0].node.frontmatter.slug
  );
  const [positions, setPositions] = useState([]);
  const [scroll, setScroll] = useState(0);
  const conceptItems = useRef([]);

  useEffect(() => {
    const initialSlug = data.cookies.edges.find(
      item => `#${item.node.frontmatter.slug}` === location.hash
    );

    if (!!initialSlug && initialSlug.node.frontmatter.slug) {
      setSelectedChapter(initialSlug.node.frontmatter.slug);
    }

    const handleScroll = () => {
      setScroll(document.documentElement.scrollTop);
    };

    setTimeout(() => {
      setPositions([
        0,
        ...conceptItems.current.map(
          concept =>
            concept.getBoundingClientRect().top + window.pageYOffset - 100
        ),
        999999,
      ]);

      document.addEventListener('scroll', handleScroll);
    }, 500);

    return () =>
      document.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const element = document.getElementById(selectedChapter);
    const yOffset = -80;
    const yPosition =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    if (location.hash) {
      setTimeout(() => {
        window.scroll({ top: yPosition, behavior: 'smooth' });
      }, 100);
    }
  }, [selectedChapter]);

  const handleChapterChange = slug => {
    window.location.hash = `#${slug}`;
    setSelectedChapter(slug);
  };

  return (
    <Layout>
      <SEO
        title="Terms Of Use"
        image={data.metaImage.childImageSharp.fixed.src}
      />
      <header className="relative overflow-hidden bg-center bg-no-repeat bg-cover">
        <div className="absolute inset-0 z-0 w-full h-full bg-gray-100" />
        <Nav />
        <div className="container relative z-10 flex flex-col justify-between px-6 mx-auto lg:px-16">
          <div className="mb-10 xxl:mb-26">
            <h1 className="w-10/12 mb-6 text-xl font-bold text-gray-800 lg:text-35px lg:mb-14">
              TERMS OF USE
            </h1>
          </div>
        </div>
      </header>
      <div className="container relative flex flex-col justify-between px-6 mx-auto my-10 md:flex-row lg:px-16 lg:my-20 ">
        <div className="relative z-10 hidden max-w-sm lg:block">
          <div className="sticky left-0 pt-1" style={{ top: 80 }}>
            {data.cookies.edges.map((chapter, key) => (
              <Link
                key={key}
                to={`/terms/terms-of-use#${chapter.node.frontmatter.slug}`}
                onClick={() =>
                  handleChapterChange(chapter.node.frontmatter.slug)
                }
                activeClassName="text-gray-800 font-bold text-base border-r-2 border-blue-600 -mr-2px"
                className={classNames(
                  'text-gray-500 flex items-center cursor-pointer leading-6 hover:text-blue-600 mb-2 pr-10 py-2',
                  {
                    'text-gray-800 font-bold text-base border-r-2 border-blue-600 -mr-2px':
                      (scroll >= positions[key + 1] && scroll < positions[key + 2]) || (key === 0 && scroll < positions[key + 2]),
                    'font-normal text-gray-500 ':
                      selectedChapter !== chapter.node.frontmatter.slug,
                  }
                )}
              >
                {chapter.node.frontmatter.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="relative flex-1 w-full lg:border-l-2 md:pl-10 lg:pl-20 lg:pr-8 lg:border-gray-150 lg:block">
          <div className='text-xl font-semibold text-gray-900 mb-12'>
            <h6 className="mb-8 font-bold text-gray-800 uppercase text-xxxs">Last updated: December 4, 2019</h6>
            <p className='mb-8'>Welcome to the Payall website <a href="https://payall.com" className='text-blue-500 underline'>https://payall.com</a> (the "Site"). Thank you for visiting and learning more about Payall!</p>
            <p className='mb-8'>It is important to us that you, and our other visitors, have a special experience while using the Site and that when you use this Site you are fully aware of your respective legal rights and obligations. For that reason, we have created these Terms of Use ("Terms") as the legally binding terms to govern your use of this Site.</p>
            <p className='mb-8'>PLEASE READ THESE TERMS CAREFULLY BEFORE USING THE SITE, BECAUSE THEY AFFECT YOUR LEGAL RIGHTS AND OBLIGATIONS.</p>
            <p className='mb-8'>The registration and use of Payall services shall be subject to separate terms and conditions of Payall User Service Agreement specific to the Service you have enrolled for, as modified from time to time.</p>
          </div>
          <MDXProvider
            components={{
              p: props => (
                <p
                  {...props}
                  className="mb-5 leading-6 text-gray-800 text-xsm"
                />
              ),
              a: props => <a {...props} className="text-blue-600" />,
              h3: props => (
                <h3
                  {...props}
                  className="mb-5 text-xl font-semibold leading-7.5 text-gray-800"
                />
              ),
              ul: props => (
                <ul
                  {...props}
                  className="pl-5 leading-6 text-gray-800 list-disc text-xsm "
                />
              ),
              h5: props => <h5 {...props} className="mb-3 font-bold " />,
              h6: props => (
                <h6
                  {...props}
                  className="mb-6 font-bold text-gray-800 uppercase text-xxxs"
                />
              ),
              table: props => (
                <table
                  {...props}
                  className="block w-full overflow-auto border-collapse "
                />
              ),
              td: props => (
                <td
                  {...props}
                  className="p-4 text-sm text-gray-800 border border-gray-150"
                  valign="top"
                />
              ),
              th: props => (
                <th
                  {...props}
                  className="px-4 py-5 border-none text-xxs border-gray-150"
                />
              ),
              thead: props => (
                <thead
                  {...props}
                  className="font-bold tracking-wide text-left text-gray-400 uppercase border-b-2 border-gray-400"
                />
              ),
            }}
          >
            <div>
              {data.cookies.edges.map((item, key) => (
                <div
                  key={key}
                  id={item.node.frontmatter.slug}
                  className="mb-10"
                  ref={el => (conceptItems.current[key] = el)}
                >
                  <MDXRenderer>{item.node.body}</MDXRenderer>
                </div>
              ))}
            </div>
          </MDXProvider>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default TermsOfUsePage;
