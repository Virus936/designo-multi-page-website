import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

function Pages({ page }) {
  return (
    <>
      <Header />
      {page}
      <Footer />
    </>
  );
}

export default Pages;
