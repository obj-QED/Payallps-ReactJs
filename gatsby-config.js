const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Unique Cross-Border Payment Product`,
    description: `Make or receive payments globally.`,
    siteName: 'Payall Payment Systems',
    siteUrl: `https://payall.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'https://admin.payallps.com',
        singleTypes: [
          'instant-payment',
          'home-page',
          'founders-message-slider',
        ],
        contentTypes: ['rooms', 'leaderships'],
        queryLimit: 1000,
      },
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'pages',
        engine: 'flexsearch',
        // engineOptions: 'score',
        query: `
          {
            allStrapiRooms(sort: {order: DESC, fields: Posted_date}) {
              nodes {
                url
                id
                strapiId
                Posted_date
                Title
                Content
                Category
                Author {
                  Name
                  Avatar {
                    url
                  }
                }
                Short_description
                created_at
                image {
                  url
                }
              }
            }
          }
        `,
        ref: 'id',
        index: ['Title', 'Content', 'Category'],
        store: [
          'id',
          'Content',
          'Title',
          'strapiId',
          'image',
          'Category',
          'Short_description',
          'Posted_date',
          'url',
        ],
        normalizer: ({ data }) => {
          return data.allStrapiRooms.nodes.map(node => {
            return {
              id: node.id,
              strapiId: node.strapiId,
              Title: node.Title,
              Author: node.Author,
              Content: node.Content,
              Short_description: node.Short_description,
              Category: node.Category,
              created_at: node.created_at,
              Posted_date: node.Posted_date,
              image: node.image,
              url: node.url,
            };
          });
        },
      },
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'leaderships',
        engine: 'flexsearch',
        // engineOptions: 'score',
        query: `
          {
            allStrapiLeaderships(sort: {order: ASC, fields: Order}) {
              nodes {
                id
                strapiId
                Order
                Name
                Content
                Slug
                Position
                Email
                created_at
              }
            }
          }
        `,
        ref: 'id',
        index: ['Name', 'Content', 'Slug'],
        store: [
          'id',
          'strapiId',
          'Order',
          'Name',
          'Content',
          'Slug',
          'Position',
          'Email',
          'created_at',
        ],
        normalizer: ({ data }) => {
          return data.allStrapiLeaderships.nodes.map(node => {
            return {
              id: node.id,
              strapiId: node.strapiId,
              Order: node.Order,
              Name: node.Name,
              Content: node.Content,
              Slug: node.Slug,
              Position: node.Position,
              created_at: node.created_at,
              Email: node.Email,
            };
          });
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/business`,
        name: `business`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/cookies`,
        name: `cookies`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/terms`,
        name: `terms`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/privacy`,
        name: `privacy`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#1A5BD1`,
        theme_color: `#1A5BD1`,
        display: `minimal-ui`,
        icon: `src/assets/favicon/logo.png`,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: path.resolve(__dirname, 'src/assets/svg'),
        },
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-recaptcha`,
      options: {
        async: false,
        defer: false,
        args: `?onload=onloadCallback&render=explicit`,
      },
    },
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-N7T4D5H',

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: 'gatsby' },
      },
    },
    // {
    //   resolve: `gatsby-plugin-hotjar`,
    //   options: {
    //     id: 1614811,
    //     sv: 6,
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
