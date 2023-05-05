import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redux/reducers/rootReducer';

// Styles
import './vars/vars.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const store = configureStore({
  reducer: rootReducer,
});
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
