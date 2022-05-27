const { getDataSource } = require("./src/data-loader");

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  const dataSource = 'ㅁㄴㅇ'

  createPage({
    path: '/',
    component: require.resolve('./src/templates/single-page.js'),
    context: { dataSource },
  });
};
