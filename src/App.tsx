import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AboutContainer } from './containers/AboutContainer';
import { ContactContainer } from './containers/ContactContainer';
import { HomeContainer } from './containers/HomeContainer';
import { OfficeContainer } from './containers/OfficeContainer';
import { PrivacyPolicyContainer } from './containers/PrivacyPoliticsContainer';
import { ServicesContainer } from './containers/ServicesContainer';
import { ServiceDetailsContainer } from './containers/ServicesDetailsContainer';
// import { BlogContainer } from './containers/BlogContainer';
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<HomeContainer />} /> {/* Strona Główna */}
          <Route path='/o-mnie' element={<AboutContainer />} /> {/* O mnie */}
          <Route path='/zakres-uslug' element={<ServicesContainer />} />
          <Route path='/uslugi/:id' element={<ServiceDetailsContainer />} />
          {/* <Route path="/honorarium" element={<PricingContainer />} /> Honorarium */}
          {/* <Route path="/wspolpraca" element={<CooperationContainer />} /> Współpraca */}
          {/* <Route path="/blog" element={<BlogContainer />} /> Blog */}
          <Route path='/kontakt' element={<ContactContainer />} /> {/* Kontakt */}
          {/* <Route path='/certyfikaty' element={<CertificatesContainer />} /> Certyfikaty */}
          <Route path='/polityka-prywatnosci' element={<PrivacyPolicyContainer />} /> {/* Polityka prywatności */}
          <Route path='/kancelaria' element={<OfficeContainer />} /> {/* Biuro */}
          <Route path='*' element={<HomeContainer />} /> {/* 404 redirect to home */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
