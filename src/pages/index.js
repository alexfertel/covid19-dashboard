import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="w-full h-64 p-20 text-gray-900">
      <h3 className="w-full text-5xl font-quicksand">Quicksand</h3>
      <p className="w-full mt-4 text-gray-800 font-nunito">This is some nunito text, used for regular text</p>
    </div>
  </Layout>
);

export default IndexPage;
