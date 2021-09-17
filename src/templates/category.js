import React, { useEffect, useState } from 'react';
import { Router } from '@reach/router';
import { useStaticQuery, graphql, Link } from 'gatsby';
import classNames from 'classnames';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { Nav } from '../components/Nav';
import { useFlexSearch } from 'react-use-flexsearch';
import SearchIcon from '../assets/svg/search.svg';
import CloseSearch from '../assets/svg/plus-circle.svg';
import { Footer } from '../components/Footer';
import Slider from 'react-slick';

const PAGINATION_LIMIT = 1;

const CategoryItem = ({ cat }) => {
  const data = useStaticQuery(graphql`
    query CategoryQuery {
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
        }
      }
    }
  `);

  const [page, setPage] = useState(PAGINATION_LIMIT);

  const categories = {};
  const categoryList = data.allStrapiRooms.nodes.filter(({ Category }) => {
    categories[Category.toLowerCase()] = '';
    return Category.toLowerCase() === cat.toLowerCase();
  });

  return (
    <Layout>
      <SEO
        title="Payall Leadership"
        description="Banktech & FinTech industry leaders. The team behind Payall brings expertise in every leadership role driving the implementation and operation of a global cross-border payment system."
        // image={metaImage.childImageSharp.fixed.src}
      />
      <header>
        <Nav />
        <div className="-mt-10 blog-header lg:-mt-16 xxl:-mt-32">
          <div className="container relative mx-auto lg:px-16">
            <div className="flex items-center default search md:justify-between md:flex-row ">
              <div className="flex flex-col search__head">
                <h1 className="font-bold">News search</h1>
                <div className="count-search">
                  <span className="mr-2 font-medium count">Category:</span>
                  <span className="conclusion">{cat}</span>
                </div>
              </div>
              <div className="relative items-center search-field d-flex">
                <input
                  type="text"
                  name="search"
                  // value={search}
                  placeholder="Search ..."
                  className="p-2 pr-6 text-base leading-tight bg-transparent border-b-2"
                  // onChange={(event) => { setSearch(event.target.value); setPage(PAGINATION_LIMIT); }}
                />
                <div className="absolute inset-y-0 right-0 flex mt-2 search-field__icon">
                  <CloseSearch className="mr-4 icon close" />
                  <SearchIcon className="icon search" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container px-6 mx-auto mb-10 blog-body search-result lg:px-16 lg:mb-16">
        <div className="blog-list">
          {categoryList.slice(0, page).map((item, index) => (
            <div className="mb-10" key={index}>
              <Link to={`/newsroom/${item.strapiId}`}>
                <div className="item item__mini">
                  {item.image && (
                    <div className="cover">
                      <img
                        src={item.image.childImageSharp.original.src}
                        alt={item.Title}
                      />
                    </div>
                  )}
                  <div className="info">
                    <h3 className="text-xl font-bold leading-7 title">
                      {item.Title}
                    </h3>
                    <ul className="article">
                      {item.Author && (
                        <li className="author">
                          <img
                            src={item.Author.Avatar.publicURL}
                            alt={item.Author.Name}
                            className="avatar"
                          />
                        </li>
                      )}
                      {item.Author && (
                        <li className="name">{item.Author.Name}</li>
                      )}
                      {item.Author && <span className="">on</span>}
                      <li className="category">
                        <Link to={`/category/${item.Category.toLowerCase()}`}>
                          {item.Category}
                        </Link>
                      </li>
                      <li className="date">2020-11-10</li>
                    </ul>
                    <p className="description">{item.Title}</p>
                  </div>
                </div>
              </Link>
              {categoryList.length > page && (
                <button
                  className="mt-10 load-post"
                  onClick={() => {
                    setPage(page + PAGINATION_LIMIT);
                  }}
                >
                  <span>load more</span>
                </button>
              )}
            </div>
          ))}
          {categoryList.length === 0 && <p>No results</p>}
        </div>

        <div className="container px-6 mx-auto mb-10 sidebar-right blog-body pt-15 lg:px-16 lg:mb-16">
          <div className="z-10 block w-full mb-10 sidebar lg:w-1/6">
            <div className="text-lg font-semibold text-gray-500 title">
              Topics
            </div>
            <Link
              to="/newsroom"
              className="flex items-center h-10 mb-1 font-normal leading-6 text-gray-500 cursor-pointer text-xsm hover:text-blue-600"
            >
              All
            </Link>
            {Object.keys(categories).map(category => (
              <Link
                to={`/category/${category.toLowerCase()}`}
                aria-current="page"
                className={classNames(
                  'h-10 flex capitalize items-center cursor-pointer leading-6 text-xsm hover:text-blue-600 mb-1 text-xsm',
                  [
                    category.toLowerCase() === cat
                      ? 'text-gray-800 font-bold border-r-2 border-blue-600 -mr-2px'
                      : 'font-normal text-gray-500',
                  ]
                )}
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

const Category = () => (
  <Router>
    <CategoryItem path="/category/:cat" />
  </Router>
);

export default Category;
