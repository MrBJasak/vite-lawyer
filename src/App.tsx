import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AboutContainer } from './containers/AboutContainer';
import { ContactContainer } from './containers/ContactContainer';
import { HomeContainer } from './containers/HomeContainer';
import { PrivacyPoliticsContainer } from './containers/PrivacyPoliticsContainer';
function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<HomeContainer />} />
            <Route path='/about' element={<AboutContainer />} />
            <Route path='/polityka-prywatnosci' element={<PrivacyPoliticsContainer />} />
            <Route path='/kontakt' element={<ContactContainer />} />
            <Route path='*' element={<HomeContainer />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
