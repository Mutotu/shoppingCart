import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";

import { uiActions } from "../../store/ui-slice";
import Button from "../Button/Button";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
    dispatch(cartActions.calcTotal());
  };

  return (
    <Button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </Button>
  );
};

export default CartButton;
