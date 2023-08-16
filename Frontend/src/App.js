import './App.css';
import ShopContextProvider from './context/shopContext';

import Navbar from './components/navbar';
import Shop from './pages/shop/shop';
import Cart from './pages/cart/cart';
import SignInPage from './pages/login/signIn';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignUpPage from './pages/signup/signup';

function App() {
  return (
    <div className='App'>
      <ShopContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<SignInPage />} />
            <Route path='/signup' element={<SignUpPage />} />
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
