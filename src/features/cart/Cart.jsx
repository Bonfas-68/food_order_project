import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import { clearCartItem, getCart } from './cartSlice';
import EmptyCart from './EmptyCart';

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: 'Mediterranean',
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: 'Vegetale',
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: 'Spinach and Mushroom',
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

function Cart() {
  // const cart = fakeCart;
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  const username = useSelector((store) => store.user.username);

  if (!cart.length) return <EmptyCart />;
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      {cart.map((item) => (
        <CartItem item={item} key={item.pizzaId} />
      ))}

      <div className="space-x-4">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>

        <Button type="secondary" onClick={() => dispatch(clearCartItem())}>
          Clear cart
        </Button>

        {/* <Link to="/order/new">Order pizzas</Link> */}
      </div>
    </div>
  );
}

export default Cart;
