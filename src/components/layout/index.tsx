import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import NavBar from './NavBar';

const Layout = () => {
  return (
    <div className='flex min-h-screen flex-col text-slate-800'>
      <NavBar />
      <main className='container flex-1 py-5'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
