// @ts-check

/**
 * Docs: https://graphcommerce.org/docs/framework/config
 *
 * @type {import('@graphcommerce/next-config/src/generated/config').GraphCommerceConfig}
 */
const config = {
  hygraphEndpoint: 'https://eu-central-1.cdn.hygraph.com/content/ckhx7xadya6xs01yxdujt8i80/master',
  magentoEndpoint: 'https://main.magento2-d55b3.reward-cloud.io/graphql',
  canonicalBaseUrl: 'https://graphcommerce.vercel.app',
  storefront: [
    { locale: 'en', magentoStoreCode: 'en_US', defaultLocale: true },
    { locale: 'nl', magentoStoreCode: 'nl_NL' },
  ],
  recentlyViewedProducts: {
    enabled: true,
  },
}

module.exports = config
