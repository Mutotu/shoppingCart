import { cartActions } from "../../store/cart-slice";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalCharge = useSelector((state) => state.cart.totalCharge);
  console.log(totalCharge);
  const resetAllHandle = () => {
    dispatch(cartActions.resetAl());
    dispatch(cartActions.calcTotal());
  };
  const paymentHandle = () => {
    dispatch(cartActions.makePayment());
  };
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {cartItems.length > 0 && (
        <Button onClick={resetAllHandle}>Reset All</Button>
      )}
      <Button onClick={paymentHandle}>Pay</Button>
      <h3>Total Charge: ${totalCharge}</h3>
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
