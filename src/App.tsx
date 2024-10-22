import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AboutContainer } from './containers/AboutContainer';
import { HomeContainer } from './containers/HomeContainer';
function App() {
  return (
    <>
      <Router>
        <Layout>
          <div className='content'>
            <Routes>
              <Route path='/' element={<HomeContainer />} />
              <Route path='/about' element={<AboutContainer />} />
              <Route path='*' element={<HomeContainer />} />
            </Routes>
          </div>
        </Layout>
      </Router>
    </>
  );
}

export default App;
