import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from 'src/app/app';
import { store } from './app/store/store';
import { register } from 'swiper/element';

register();
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
