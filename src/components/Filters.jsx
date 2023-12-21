import { Form, Link, useLoaderData } from 'react-router-dom';
import FormCheckbox from './FormCheckbox';
import FormInput from './FormInput';
import FormRange from './FormRange';
import FormSelect from './FormSelect';

const Filters = () => {
  const { meta, params } = useLoaderData();
  const { search, company, category, shipping, order, price } = params;

  return (
    <Form
      className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 
    sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center"
    >
      {/* search  */}
      <FormInput
        type="search"
        label="search product"
        name="search"
        size="input-sm"
        defaultValue={search}
      />

      {/* categories */}
      <FormSelect
        label="select category"
        name="category"
        list={meta.categories}
        size="select-sm"
        defaultValue={category}
      />

      {/* companies */}
      <FormSelect
        label="select company"
        name="company"
        list={meta.companies}
        size="select-sm"
        defaultValue={company}
      />

      {/*order */}
      <FormSelect
        label="sort by"
        name="order"
        list={['a-z', 'z-a', 'high', 'low']}
        size="select-sm"
        defaultValue={order}
      />

      {/*price */}
      <FormRange
        name="price"
        label="select price"
        size="range-sm"
        price={price}
      />

      {/*shipping */}
      <FormCheckbox
        name="shipping"
        label="free shipping"
        size="checkbox-sm"
        defaultValue={shipping}
      />

      <button type="submit" className="btn btn-primary btn-sm">
        search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm">
        reset
      </Link>
    </Form>
  );
};

export default Filters;
