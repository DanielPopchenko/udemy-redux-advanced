import Cart from './components/cart/Cart';
import Products from './components/shop/Products';
import Layout from './components/layout/Layout';
import { useSelector } from 'react-redux';

function App() {
  const cartIsVisible = useSelector((state) => state.ui.cartIsVisible);

  return (
    <Layout>
      {cartIsVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
