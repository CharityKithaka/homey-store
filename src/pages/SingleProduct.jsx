import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLoaderData } from 'react-router-dom';
import { addItem } from '../features/cart/cartSlice';
import { customFetch, formatPrice, generateAmountOptions } from '../utilis';

import { IonIcon } from '@ionic/react';
import { star } from 'ionicons/icons';

const singleProductQuery = (id) => {
  return {
    queryKey: ['singleProduct', id],
    queryFn: () => customFetch(`/products/${id}`),
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const response = await queryClient.ensureQueryData(
      singleProductQuery(params.id),
    );
    return { product: response.data.data };
  };

const SingleProduct = () => {
  const { product } = useLoaderData();
  const { image, title, price, description, colors } = product.attributes;
  const dollarsAmount = formatPrice(price);
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };

  const cartProduct = {
    cartID: product.id + productColor,
    productID: product.id,
    image,
    title,
    price,
    productColor,
    amount,
  };

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }));
  };
  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
        />
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl mt-4 flex items-center">
            Customer Reviews:{' '}
            <span className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <IonIcon
                  key={index}
                  icon={star}
                  style={{ color: index < 4 ? '#ffd700' : '#c4c4c4' }}
                />
              ))}
            </span>
          </h4>
          <p className="mt-3 text-xl font-bold">{dollarsAmount}</p>
          <p className="mt-6 leading-8">{description}</p>

          {/*color */}
          <div className="mt-6">
            <div className="flex items-center">
              <h4 className="text-md font-medium tracking-wider capitalize mr-4">
                colors :
              </h4>
              <div className="flex">
                {colors.map((color) => (
                  <button
                    key={color}
                    type="button"
                    className={`badge w-6 h-6 mr-2 ${
                      color === productColor && 'border-2 border-secondary'
                    }`}
                    style={{ backgroundColor: color, position: 'relative' }}
                    onClick={() => setProductColor(color)}
                  >
                    {color === productColor && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="6"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/*amount */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <h4 className="text-md font-bold -tracking-wider capitalize">
                amount
              </h4>
            </label>
            <select
              className="select select-secondary select-bordered select-md"
              id="amount"
              value={amount}
              onChange={handleAmount}
            >
              {generateAmountOptions(10)}
            </select>
          </div>
          {/*cart*/}
          <div className="mt-10">
            <button className="btn btn-secondary btn-md" onClick={addToCart}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
