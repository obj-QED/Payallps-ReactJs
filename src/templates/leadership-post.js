import React, { useState, useMemo, useRef, useEffect } from 'react';
import { SEO } from '../components/SEO';
import { Nav } from '../components/Nav';
import { Layout } from '../components/Layout';
import { Footer } from '../components/Footer';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { CtaBlueSection } from '../components/CtaBlueSection';
import classNames from 'classnames';
import { Modal } from '../components/Modal';
import ContactForm from '../components/ContactForm';
import CloseCheck from '../assets/svg/close-check.svg';
import { useOnClickOutside } from '../hooks/useOnClickOutside';
import ReactMarkdownWithHtml from 'react-markdown/with-html';

const isClient = typeof window === 'object';

const LeadershipPage = ({ pageContext }) => {
  const data = useStaticQuery(graphql`
    query CategorySingleQueryLeader {
      allStrapiLeaderships(sort: { order: ASC, fields: Order }) {
        nodes {
          id
          strapiId
          Order
          Name
          Content
          Slug
          Position
          created_at
          Type
        }
      }
      metaImage: file(absolutePath: { regex: "/leadership.webp/" }) {
        childImageSharp {
          fixed(quality: 100, width: 1200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const [showModal, setModal] = useState(false);
  if (showModal === true) {
    if (isClient) {
      document.body.style.overflow = 'hidden';
    }
  } else {
    if (isClient) {
      document.body.style.overflow = null;
      document.body.removeAttribute('style');
    }
  }
  const modalRef = useRef(null);

  useOnClickOutside(
    {
      ref: modalRef,
    },
    () => setModal(false)
  );

  return (
    <Layout>
      <SEO
        title="Payall Leadership"
        description="Banktech & FinTech industry leaders. The team behind Payall brings expertise in every leadership role driving the implementation and operation of a global cross-border payment system."
        image={data.metaImage.childImageSharp.fixed.src}
      />
      <header>
        <Nav />
      </header>

      <div className="container relative flex flex-col justify-between px-6 mx-auto my-10 md:flex-row lg:px-16 lg:mt-8 lg:mb-20">
        <div className="z-10 block w-full mb-10 lg:w-1/4">
          <div className="sticky left-0 top-0 pt-3">
            <h1 className="text-base font-bold leading-7.5 lg:text-xl text-gray-800 uppercase mb-9">
              Leadership
            </h1>

            <div className="lg:border-r-2 lg:border-gray-150">
              {data.allStrapiLeaderships.nodes
                .filter(leader => !leader.Type || leader.Type === 'Leadership')
                .map((leader, key) => (
                  <Link
                    key={key}
                    to={`/leadership/${leader.Slug}`}
                    className={classNames(
                      'h-10 flex items-center cursor-pointer leading-6 text-xsm hover:text-blue-600 mb-1',
                      {
                        'text-gray-800 font-bold border-r-2 border-blue-600 -mr-2px':
                          pageContext.Slug === leader.Slug,
                        'font-normal text-gray-500 text-xsm':
                          pageContext.Slug !== leader.Slug,
                      }
                    )}
                  >
                    {leader.Name}
                  </Link>
                ))}
            </div>

            <h1 className="text-base font-bold leading-7.5 lg:text-xl text-gray-800 uppercase mt-18 mb-10">
              Advisors
            </h1>

            <div className="lg:border-r-2 lg:border-gray-150">
              {data.allStrapiLeaderships.nodes
                .filter(leader => leader.Type === 'Advisors')
                .map((leader, key) => (
                  <Link
                    key={key}
                    to={`/leadership/${leader.Slug}`}
                    className={classNames(
                      'h-10 flex items-center cursor-pointer leading-6 text-xsm hover:text-blue-600 mb-1',
                      {
                        'text-gray-800 font-bold border-r-2 border-blue-600 -mr-2px':
                          pageContext.Slug === leader.Slug,
                        'font-normal text-gray-500 text-xsm':
                          pageContext.Slug !== leader.Slug,
                      }
                    )}
                  >
                    {leader.Name}
                  </Link>
                ))}
            </div>

            {data.allStrapiLeaderships.nodes.filter(
              leader => leader.Type === 'Board'
            ).length > 0 && (
              <>
                <h1 className="text-base font-bold leading-7.5 lg:text-xl text-gray-800 uppercase mt-18 mb-10">
                  Board
                </h1>

                <div className="lg:border-r-2 lg:border-gray-150">
                  {data.allStrapiLeaderships.nodes
                    .filter(leader => leader.Type === 'Board')
                    .map((leader, key) => (
                      <Link
                        key={key}
                        to={`/leadership/${leader.Slug}`}
                        className={classNames(
                          'h-10 flex items-center cursor-pointer leading-6 text-xsm hover:text-blue-600 mb-1',
                          {
                            'text-gray-800 font-bold border-r-2 border-blue-600 -mr-2px':
                              pageContext.Slug === leader.Slug,
                            'font-normal text-gray-500 text-xsm':
                              pageContext.Slug !== leader.Slug,
                          }
                        )}
                      >
                        {leader.Name}
                      </Link>
                    ))}
                </div>
              </>
            )}
          </div>
        </div>
        <div className="mt-20 relative w-full md:pl-10 lg:pl-26 lg:pr-8 lg:block lg:w-3/4">
          <div>
            <div className="flex flex-col justify-between mb-5 md:flex-row">
              <div className="mb-5">
                <h2 className="mt-2 mb-1 font-bold leading-10 text-gray-800 text-1xl lg:text-3xl">
                  {pageContext.Name}
                </h2>
                <h3 className="font-bold leading-6 tracking-widest text-gray-400 uppercase text-13px">
                  {pageContext.Position}
                </h3>
              </div>
              <div className="mt-4 md:text-center">
                <button
                  onClick={() => setModal(true)}
                  className="py-1 font-bold leading-5 tracking-wide text-blue-600 uppercase border border-blue-600 rounded-sm px-7 text-xxs hover:bg-blue-100"
                >
                  Contact
                </button>
              </div>
            </div>
            <div className="single-leadership">
              <ReactMarkdownWithHtml
                escapeHtml={false}
                allowDangerousHtml
                linkTarget="_blank"
                source={pageContext.Content}
                renderers={{ paragraph: 'p' }}
                className="body-post-inner"
              />
            </div>
          </div>
        </div>
      </div>

      <CtaBlueSection
        link={{
          to: '/contact',
          label: 'Request More Info',
        }}
      >
        <div className="max-w-screen-sm">
          <h3 className="mb-10 text-3xl font-bold text-white lg:text-35px">
            Contact Us
          </h3>
          <p className="mb-12 text-sm font-semibold leading-snug text-center text-white lg:text-base">
            Learn all the ways your business can benefit <br /> from better
            payment solutions
          </p>
        </div>
      </CtaBlueSection>
      <Footer />
      {showModal ? (
        <Modal showModal={showModal} outsideRef={modalRef}>
          <div className="pt-10">
            <ContactForm sentTo={pageContext.Name} isModal>
              <div className="mt-16 mb-12 xxl:mb-15">
                <div className="flex items-center justify-between">
                  <h2 className="mt-2 mb-1 text-2xl font-bold leading-10 text-gray-800">
                    {pageContext.Name}
                  </h2>
                  <CloseCheck
                    className="cursor-pointer"
                    onClick={() => setModal(false)}
                  />
                </div>
                <h3 className="text-sm font-bold leading-6 tracking-widest text-gray-400 uppercase">
                  {pageContext.Position}
                </h3>
              </div>
            </ContactForm>
          </div>
        </Modal>
      ) : null}
    </Layout>
  );
};

export default LeadershipPage;
