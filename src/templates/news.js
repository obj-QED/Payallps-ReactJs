import React, { useState, useEffect, useMemo } from 'react';
import { useFlexSearch } from 'react-use-flexsearch';
import queryString from 'query-string';
import { useLocation } from '@reach/router';
import moment from 'moment';
import { SEO } from '../components/SEO';
import { Nav } from '../components/Nav';
import { Layout } from '../components/Layout';
import { Footer } from '../components/Footer';
import { graphql, useStaticQuery, a } from 'gatsby';
import classNames from 'classnames';
import SearchIcon from '../assets/svg/search.svg';
import CloseSearch from '../assets/svg/plus-circle.svg';
import { CtaBlueSection } from '../components/CtaBlueSection';
import ReactMarkdownWithHtml from 'react-markdown/with-html';

const PAGINATION_LIMIT = 5;

const NewsTemplate = ({ pageContext }) => {
  const { search: query } = useLocation();
  const { category: categoryQuery } = queryString.parse(query);

  const [page, setPage] = useState(PAGINATION_LIMIT);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (categoryQuery) {
      setCategory(categoryQuery.toLowerCase());
    }
  }, []);

  useEffect(() => {
    setSearch('');
    setPage(PAGINATION_LIMIT);
  }, [category]);

  const queryData = useStaticQuery(graphql`
    query {
      localSearchPages {
        index
        store
      }
      metaImage: file(absolutePath: { regex: "/og-index.webp/" }) {
        childImageSharp {
          fixed(quality: 100, width: 1200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const index = queryData.localSearchPages.index;
  const store = queryData.localSearchPages.store;

  const results = useFlexSearch(search, index, store);

  const featured = pageContext.nodes
    .filter(({ Featured }) => Featured)
    .slice(0, '4');

  const posts = useMemo(() => {
    return search
      ? results
      : pageContext.nodes.filter(({ Category: CategoryName }) =>
          category ? CategoryName.toLowerCase() === category : true
        );
  }, [category, search]);

  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <Layout>
      <SEO
        title="Newsroom"
        ogDescription={'Latest company news, updates and industry insights. '}
        description={'Latest company news, updates and industry insights. '}
        image={queryData.metaImage.childImageSharp.fixed.src}
      />
      <header>
        <Nav />
        <section className="-mt-16 header-blog pt-15 xxl:-mt-32">
          <div className="container mx-auto px-6 lg:px-16">
            <div className="flex-row justify-between flex items-center	 flex-wrap pb-7">
              <div className="w-full lg:w-6/12">
                <h1 className="text-3xl font-bold text-gray-800 carbo">
                  {search && results.length
                    ? 'News search'
                    : featured.length > 0
                    ? 'Featured'
                    : ''}
                </h1>
                {search && (
                  <div className="text-sm count-search">
                    <span className="mr-2 font-medium count">
                      {results.length}
                    </span>
                    <span className="conclusion">results</span>
                  </div>
                )}
              </div>
              <div className="w-full lg:w-3/12">
                <div
                  className={`search relative overflow-hidden mt-5 lg:mt-0 ${
                    isActive ? 'open' : 'close'
                  }`}
                >
                  <input
                    type="text"
                    name="search"
                    value={search}
                    placeholder="Search ..."
                    className="w-full p-2 pr-6 text-base leading-tight bg-transparent border-b border-b-2"
                    onChange={event => {
                      setSearch(event.target.value);
                      setPage(PAGINATION_LIMIT);
                    }}
                  />
                  <div className="absolute right-0 z-50 flex search__btn top-1/2 -translate-y-2/4">
                    {search && isActive && (
                      <CloseSearch
                        className="mr-4 icon closed"
                        onClick={() => {
                          setSearch('');
                        }}
                      />
                    )}
                    <SearchIcon onClick={handleToggle} className="icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={classNames('container mx-auto px-6 lg:px-16', {
              hidden: search,
            })}
          >
            {featured.length > 0 && (
              <div
                className={classNames('flex flex-wrap feature-list pb-14', {
                  'justify-between': featured.length === 2,
                  'justify-start': featured.length >= 3,
                })}
              >
                {featured.map((item, index) => (
                  <a
                    href={`/newsroom/${item.url}`}
                    target="_blank"
                    className={classNames('feature-list__item bg-white', {
                      'feature-list__item--full w-full flex items-start lg:max-h-72':
                        featured.length === 1,
                      'feature-list__item--2x1 w-5/12-2': featured.length === 2,
                      'feature-list__item--default': featured.length >= 3,
                      'feature-list__item--default mb-5': featured.length > 3,
                    })}
                    key={index}
                  >
                    <div
                      className={classNames({
                        'cover w-full h-full lg:w-6/12 lg:h-full':
                          featured.length === 1,
                      })}
                    >
                      {item.image && (
                        <img
                          src={`https://admin.payallps.com${item.image.url}`}
                          alt={item.Title}
                        />
                      )}
                    </div>
                    <div
                      className={classNames('info p-7', {
                        '': featured.length === 1,
                      })}
                    >
                      <h3
                        className={classNames(
                          'title font-bold text-xl text-gray-900 leading-7 h-full',
                          {
                            'order-2 my-3': featured.length === 1,
                          }
                        )}
                      >
                        {item.Title}
                      </h3>
                      <ul
                        className={classNames(
                          'article text-gray-800 font-normal text-xs my-3',
                          {
                            'order-1 my-0': featured.length === 1,
                          }
                        )}
                      >
                        {item.Author && (
                          <li className="mr-2 author">
                            <img
                              src={`https://admin.payallps.com${item.Author.Avatar.url}`}
                              alt={item.Author.Name}
                              width="24"
                              height="24"
                              className="avatar"
                            />
                          </li>
                        )}
                        {item.Author && (
                          <li className="font-semibold text-blue-800 name">
                            {item.Author.Name}
                          </li>
                        )}
                        {item.Author && <span className="mx-1">|</span>}
                        <li className="font-semibold text-blue-800 category ">
                          <a
                            to={`/newsroom?category=${item.Category.toLowerCase()}`}
                            target="_blank"
                          >
                            {item.Category}
                          </a>
                        </li>
                        <li className="list-disc date ml-7">
                          {moment(item.Posted_date).format('MMM, YYYY')}
                        </li>
                      </ul>

                      <div
                        className={classNames(
                          'description text-gray-800 text-sm	font-normal',
                          {
                            'order-3': featured.length === 1,
                          }
                        )}
                      >
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
                ))}
              </div>
            )}
          </div>
        </section>
      </header>
      <section className="content-blog">
        <div
          className={classNames(
            'container flex  justify-between	px-6 py-15 mx-auto lg:px-16 flex-wrap md:flex-nowrap',
            { 'search-result min-h-3/4': search },
            [!featured ? ' mb-10 lg:mb-16' : '-mt-0 lg:-mt-0 xxl:-mt-0']
          )}
        >
          <div
            className={classNames(
              'sidebar relative z-10 block w-full  border-r-1 mb-10 w-full md:w-3/12 lg:w-2/12',
              { hidden: search }
            )}
          >
            <div className="mb-8 text-lg font-semibold text-gray-500 title">
              Category
            </div>
            <div className="category-list">
              <a
                to="/newsroom"
                onClick={() => setCategory('')}
                className={classNames(
                  'h-10 flex capitalize items-center cursor-pointer leading-6 text-xsm hover:text-blue-600 mb-1 text-xsm',
                  [
                    !category
                      ? 'text-gray-800 font-bold border-r-2 border-blue-600 -mr-2px'
                      : 'font-normal text-gray-500',
                  ]
                )}
              >
                All
              </a>
              {Object.keys(pageContext.categories).map((categoryItem, i) => (
                <a
                  to={`/newsroom?category=${categoryItem}`}
                  key={i}
                  aria-current="page"
                  onClick={() => setCategory(categoryItem)}
                  className={classNames(
                    'h-10 flex capitalize items-center cursor-pointer leading-6 text-xsm hover:text-blue-600 mb-1 text-xsm',
                    [
                      category.toLowerCase() === categoryItem.toLowerCase()
                        ? 'text-gray-800 font-bold border-r-2 border-blue-600 -mr-2px'
                        : 'font-normal text-gray-500',
                    ]
                  )}
                >
                  {categoryItem}
                </a>
              ))}
            </div>
          </div>
          <div
            className={classNames('blog-list w-full md:w-8/12 lg:w-9/12', {
              'w-3/5': results.length,
            })}
          >
            {posts.slice(0, page).map((item, index) => (
              <div className="blog-list__item mb-11" key={index}>
                <a href={`/newsroom/${item.url}`} target="_blank">
                  {/* <div className="cover">
                  {item.image && (
                    <img
                      src={`https://admin.payallps.com${item.image.url}`}
                      alt={item.Title}
                    />
                  )}
                </div> */}
                  <div className="info">
                    <h3 className="h-full text-xl font-bold leading-7 text-gray-900 title">
                      {item.Title}
                    </h3>
                    <ul className="hidden my-3 text-xs font-normal text-gray-800 article sm:flex">
                      {item.Author && (
                        <li className="mr-2 author">
                          <img
                            src={`https://admin.payallps.com${item.Author.Avatar.url}`}
                            // src='https://admin.payallps.com/uploads/thumbnail_avatar_payall6_735dcb3cd9.jpeg'
                            alt={item.Author.Name}
                            className="avatar"
                          />
                        </li>
                      )}
                      {item.Author && (
                        <li className="font-semibold text-blue-800 name">
                          {item.Author.Name}
                        </li>
                      )}
                      {item.Author && <span className="mx-1">|</span>}
                      <li className="font-semibold text-blue-800 category ">
                        <a
                          to={`/newsroom?category=${item.Category.toLowerCase()}`}
                          onClick={e => {
                            e.stopPropagation();
                            setCategory(item.Category.toLowerCase());
                          }}
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
            {search && results.length === 0 && (
              <div className="text-3xl font-bold dont-result">
                <h2>We couldn’t find any posts.</h2>
              </div>
            )}
            {posts.length > page && (
              <button
                className="py-5 mt-10 load-post"
                onClick={() => {
                  setPage(page + PAGINATION_LIMIT);
                }}
              >
                <span className="py-5 text-sm font-bold uppercase border px-18">
                  load more
                </span>
              </button>
            )}
          </div>
        </div>
      </section>
      <CtaBlueSection
        link={{
          to: '/contact',
          label: "Let's talk",
        }}
      >
        <div className="max-w-screen-sm">
          <h3 className="mb-10 text-3xl font-bold text-white lg:text-35px">
            Contact Us
          </h3>
          <p className="mb-12 text-sm font-semibold leading-snug text-center text-white lg:text-base">
            Evolve the way in which you do Cross-Border Payments
          </p>
        </div>
      </CtaBlueSection>
      <Footer />
    </Layout>
  );
};

export default NewsTemplate;
