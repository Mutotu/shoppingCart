import { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import PaymentPage from "./components/Shop/PaymenPage";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { sendCartData, fetchCartData } from "./store/cart-actions";
import { sendUserData } from "./store/user-actions";

let isInitial = true;

function App() {
  const [informUser, setInformUser] = useState(true);
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const isPaying = useSelector((state) => state.cart.pay);
  const users = useSelector((state) => state.users);

  useEffect(() => {
    const timer = setInterval(() => {
      setInformUser(false);
    }, 2000);

    return () => {
      clearInterval(timer);
      setInformUser(true);
    };
  }, [notification]);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);
  useEffect(() => {
    dispatch(sendUserData(users));
    console.log(users);
  }, [users, dispatch]);
  return (
    <Fragment>
      {isPaying ? (
        <PaymentPage />
      ) : (
        <Layout>
          {notification && informUser && (
            <Notification
              status={notification.status}
              title={notification.title}
              message={notification.message}
            />
          )}
          {showCart && <Cart />}
          <Products />
        </Layout>
      )}
    </Fragment>
  );
}

export default App;
