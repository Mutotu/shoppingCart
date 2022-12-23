import { cartActions } from "../../store/cart-slice";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const resetAllHandle = () => {
    dispatch(cartActions.resetAl());
  };
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <Button onClick={resetAllHandle}>Reset All</Button>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
