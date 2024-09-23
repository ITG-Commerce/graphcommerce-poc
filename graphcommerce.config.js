// @ts-check

/**
 * Docs: https://graphcommerce.org/docs/framework/config
 *
 * @type {import('@graphcommerce/next-config/src/generated/config').GraphCommerceConfig}
 */
const config = {
  hygraphEndpoint: 'https://us-west-2.cdn.hygraph.com/content/cm168x10x02f807waghh0uqfg/master',
  magentoEndpoint: 'https://staging.magento2-d55b3.reward-cloud.io/graphql',
  canonicalBaseUrl: 'https://graphcommerce-poc-delta.vercel.app',
  storefront: [{ locale: 'en', magentoStoreCode: 'default', defaultLocale: true }],
  recentlyViewedProducts: {
    enabled: true,
  },
}

module.exports = config
