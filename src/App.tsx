import { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AboutContainer } from './containers/AboutContainer';
import { ContactContainer } from './containers/ContactContainer';
import { FeeContainer } from './containers/FeeContainer';
import { HomeContainer } from './containers/HomeContainer';
import { PrivacyPolicyContainer } from './containers/PrivacyPoliticsContainer';
import { ServicesContainer } from './containers/ServicesContainer';
import { ServiceDetailsContainer } from './containers/ServicesDetailsContainer';
// import { BlogContainer } from './containers/BlogContainer';

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path='/' element={<HomeContainer />} /> {/* Strona Główna */}
          <Route path='/o-mnie' element={<AboutContainer />} /> {/* O mnie */}
          <Route path='/zakres-uslug' element={<ServicesContainer />} />
          <Route path='/uslugi/:id' element={<ServiceDetailsContainer />} />
          <Route path='/honorarium' element={<FeeContainer />} /> {/* Honorarium */}
          {/* <Route path="/wspolpraca" element={<CooperationContainer />} /> Współpraca */}
          {/* <Route path="/blog" element={<BlogContainer />} /> Blog */}
          <Route path='/kontakt' element={<ContactContainer />} /> {/* Kontakt */}
          {/* <Route path='/certyfikaty' element={<CertificatesContainer />} /> Certyfikaty */}
          <Route path='/polityka-prywatnosci' element={<PrivacyPolicyContainer />} /> {/* Polityka prywatności */}
          {/* <Route path='/kancelaria' element={<OfficeContainer />} /> Biuro */}
          <Route path='*' element={<HomeContainer />} /> {/* 404 redirect to home */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
