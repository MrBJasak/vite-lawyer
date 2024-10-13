import { Layout } from './components/Layout';
import { HomeContainer } from './containers/HomeContainer';
function App() {
  return (
    <>
      <Layout>
        <div className='content'>
          <HomeContainer />
        </div>
      </Layout>
    </>
  );
}

export default App;
