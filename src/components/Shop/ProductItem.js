import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartActions } from "../../store/cart-slice";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { id, title, price, description } = props;
  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <Button onClick={addToCartHandler}>Add to Cart</Button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
