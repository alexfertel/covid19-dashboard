exports.onCreatePage = async ({ page, actions }) => {
  if (page.path === '/') {
    const { createPage, deletePage } = actions;
    deletePage(page);

    createPage({
      ...page,
      context: {
        ...page.context,
        covidData: 1,
      },
    });
  }
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /p5/,
            use: loaders.null()
          }
        ]
      }
    })
  }
}