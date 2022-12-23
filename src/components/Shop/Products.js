import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const DUMMY_PRODUCTS = [
  { id: "p1", price: 6, title: "JavaScript", description: "LOLOLOLO" },
  { id: "p2", price: 6, title: "Python", description: "XOXOXOXOX" },
  { id: "p3", price: 6, title: "Kotlin", description: "XOXOXOXOX" },
  { id: "p4", price: 6, title: "PHP", description: "XOXOXOXOX" },
  { id: "p5", price: 6, title: "JAca", description: "XOXOXOXOX" },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
