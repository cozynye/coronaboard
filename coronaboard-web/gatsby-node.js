const { getDataSource } = require('./src/data-loader');

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  const dataSource = await getDataSource();
  console.log(typeof dataSource.globalStats)
  console.log('dataSource is good')

  createPage({
    path: '/',
    component: require.resolve('./src/templates/single-page.js'),
    context: { dataSource },
  });
};