import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMNMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'My first book',
    description: 'The first book I`ve ever wrote.',
  },
  {
    id: 'p2',
    price: 8,
    title: 'My second book',
    description: 'The second book I`ve wrote.',
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMNMY_PRODUCTS.map((el) => (
          <ProductItem
            key={el.id}
            id={el.id}
            title={el.title}
            price={el.price}
            description={el.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
