import { Form, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { clearCart } from '../features/cart/cartSlice';
import { customFetch, formatPrice } from '../utilis';
import FormInput from './FormInput';
import SubmitBtn from './SubmitBtn';

export const action =
  (store, queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);
    const user = store.getState().userState.user;
    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;

    const infor = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatPrice(orderTotal),
      cartItems,
      numItemsInCart,
    };

    try {
      const response = await customFetch.post(
        '/orders',
        { data: infor },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        },
      );
      queryClient.removeQueries(['orders']);
      store.dispatch(clearCart());
      toast.success('Order placed successfully');
      return redirect('/orders');
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message || 'There was an error';
      toast.error(errorMessage);
      if (error?.response?.status === 401 || 403) return redirect('/login');
      return null;
    }
  };

const CheckOutForm = () => {
  return (
    <Form method="POST" className="flex flex-col gap-y-4">
      <h4 className="font-medium text-xl capitalize">Shipping information</h4>
      <FormInput label="first name" name="name" type="text" />
      <FormInput label="address" name="address" type="text" />
      <div className="mt-4">
        <SubmitBtn text="place your order" />
      </div>
    </Form>
  );
};

export default CheckOutForm;
