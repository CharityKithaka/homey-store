import { useSelector } from 'react-redux';
import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CartTotals, CheckOutForm, SectionTitle } from '../components';

export const loader = (store) => () => {
  const user = store.getState().userState.user;

  if (!user) {
    toast.warn('You have to be logged in to access checkout');
    return redirect('/login');
  }
  return null;
};
const Checkout = () => {
  const cartTotal = useSelector((state) => state.cartState.cartTotal);
  if (cartTotal === 0) {
    return <SectionTitle text="Your cart is empty" />;
  }
  return (
    <>
      <SectionTitle text="place your order" />
      <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
        <CheckOutForm />
        <CartTotals />
      </div>
    </>
  );
};

export default Checkout;
