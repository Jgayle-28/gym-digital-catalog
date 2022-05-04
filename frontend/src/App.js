import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout Components
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
// Screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <main>
          <Routes>
            <Route path='/' element={<HomeScreen />} exact />
            <Route path='/products/:type' element={<ProductScreen />} />
            <Route
              path='/products/:type/:equipmentType'
              element={<ProductScreen />}
            />
            <Route path='/products' element={<ProductScreen />} />
          </Routes>
        </main>
      </BrowserRouter>

      <Footer />
    </>
  );
};

export default App;
