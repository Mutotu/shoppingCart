import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import Button from "../Button/Button";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const { title, quantity, total, price, id } = props.item;

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };
  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };
  const resetCartHandler = () => {
    dispatch(cartActions.resetCart(id));
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <Button onClick={removeItemHandler}>-</Button>
          <Button onClick={addItemHandler}>+</Button>
        </div>
        <div>
          <Button className={classes.reset} onClick={resetCartHandler}>
            Remove
          </Button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
