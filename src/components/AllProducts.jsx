import { Link } from 'react-router-dom';

const AllProducts = () => {
  return (
    <div className="mt-10 text-center">
      <Link to="/Products" className="btn btn-primary">
        ALL PRODUCTS
      </Link>
    </div>
  );
};

export default AllProducts;
