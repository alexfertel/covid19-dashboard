/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/react-in-jsx-scope */
import '../css/tailwind.css';
import 'typeface-quicksand';
import 'typeface-montserrat';
import Layout from '../components/Layout';

const App = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default App;
