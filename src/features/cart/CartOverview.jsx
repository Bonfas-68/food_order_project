import {useSelector} from "react-redux"
import {Link} from "react-router-dom"
import { formatCurrency } from "../../utils/helpers";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";

function CartOverview() {
  const totalCartQuantity = useSelector( getTotalCartQuantity)
  // const totalPrice = useSelector((store)=> store.cart.cart.totalPrice)
   // const totalCartQuantity = useSelector((store)=> store.cart.cart.reduce((sum, cur)=> sum + cur.quantity, 0))
  // const totalCartPrice = useSelector((store)=> store.cart.cart.reduce((sum, cur)=> sum + cur.price, 0))
  const totalCartPrice = useSelector( getTotalCartPrice)

  if(!totalCartPrice) return null


  return (
    <div className="flex items-center justify-between bg-stone-950 text-stone-200 uppercase px-4 py-4 sm:px-6 text-sm md:text-base">
      <p  className="text-stone-300 font-semibold space-x-4 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
