import { Outlet, useNavigation } from 'react-router-dom';
import { Loading, NavBar } from '../components';

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  return (
    <>
      <NavBar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <section className="align-element p-20">
          <Outlet />
        </section>
      )}
    </>
  );
};

export default HomeLayout;
