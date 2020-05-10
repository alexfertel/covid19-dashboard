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
