import * as prismic from '@prismicio/client';
import * as prismicNext from '@prismicio/next';
import config from './slicemachine.config.json';

/**
 * The project's Prismic repository name.
 */
export const { repositoryName } = config;

/**
 * A list of Route Resolver objects that define how a document's `url` field is resolved.
 *
 * {@link https://prismic.io/docs/route-resolver#route-resolver}
 */
// TODO: Update the routes array to match your project's route structure.
const routes: prismic.ClientConfig['routes'] = [
  {
    type: 'homepage',
    path: '/',
  },
  {
    type: 'menu',
    path: '/menu',
  },
  {
    type: 'e_club',
    path: '/factory-rewards',
  },
  {
    type: 'gift_cards',
    path: '/gift-cards',
  },
  {
    type: 'about_us',
    path: '/about-us',
  },
  {
    type: 'franchising',
    path: '/franchising',
  },
];

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config - Configuration for the Prismic client.
 */
export const createClient = (config: prismicNext.CreateClientConfig = {}) => {
  const client = prismic.createClient(repositoryName, {
    fetchOptions: {
      // cache: process.env.NODE_ENV === 'production' ? 'force-cache' : 'no-store',
      next: { revalidate: 60, tags: ['prismic'] },
    },
    routes,
    ...config,
  });

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
};
