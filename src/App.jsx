import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/cart/Cart';
import Products from './components/shop/Products';
import Layout from './components/layout/Layout';
import { useEffect } from 'react';
import Notification from './components/UI/Notifications';
import { fetchCartData, sendCartData } from './store/cart-actions';

let isInitial = true;

function App() {
  const cartIsVisible = useSelector((state) => state.ui.cartIsVisible);

  // ! firslty we update out redux state,
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();

  // ! Side-effect logic
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    console.log(cart.changed);
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}

      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
