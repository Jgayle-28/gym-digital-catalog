import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { Container } from 'react-bootstrap';

import HomeScreen from './screens/HomeScreen';
import Hero from './components/layout/Hero';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
