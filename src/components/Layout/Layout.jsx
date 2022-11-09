import { css } from './Layout.module.css';
import { HeaderMain } from '../HeaderMain/HeaderMain';
import Footer from '../Footer/Footer';

export const Layout = ({ children }) => {
  return (
    <>
      <HeaderMain />
      {children}
      <Footer />
    </>
  );
};
