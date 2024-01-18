import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { toggle } from '../../store/ui-slice';

const CartButton = (props) => {
  const cartIsVisible = useSelector((state) => state.ui.cartIsVisible);

  const dispatch = useDispatch();

  const toggleCartVisibility = () => {
    dispatch(toggle());
  };

  return (
    <button className={classes.button} onClick={toggleCartVisibility}>
      <span> {cartIsVisible ? 'Hide Cart' : 'Show Cart'}</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
