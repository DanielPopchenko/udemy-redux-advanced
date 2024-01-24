import { useDispatch, useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { addItem } from '../../store/cart-slice';

const ProductItem = (props) => {
  const { title, price, description, id } = props;
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAddItemToCart = () => {
    dispatch(
      addItem({
        id,
        title,
        price,
      }),
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
          <button onClick={handleAddItemToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
