import React from 'react';

import SEO from '../components/Seo';

const IndexPage = () => (
  <>
    <SEO title="Dashboard | Home" />
    <div className="w-full h-64 p-20 text-gray-900">
      <h3 className="w-full text-5xl font-quicksand">Bienvenido!</h3>
      <p className="w-full mt-4 text-gray-800 font-montserrat">Esto es un tablero de datos sobre Covid-19.</p>
    </div>
  </>
);

export default IndexPage;
