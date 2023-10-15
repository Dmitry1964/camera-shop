import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { Link } from 'react-router-dom';
import { PageRoute } from '../../constants/const';
import './page-not-found.css';

const PageNotFound = (): JSX.Element => (
  <div className="wrapper">
    <Header />
    <section className='page-not-found' >
      <div className='page-not-found__wrapper'>
        <div className='page-not-found__image'>
          <img src='img/content/notfound.jpg' srcSet='img/content/notfound@2x.jpg 2x' width="600" height="400" alt="Сломанный фотоаппарат" />
        </div>
        <h2 className='page-not-found__title'>Страница не найдена</h2>
        <Link className='page-not-found__link' to={PageRoute.Catalog}>
          На главную страницу
        </Link>
      </div>
    </section >
    <Footer />
  </div >

);

export default PageNotFound;
