// Global
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Styles
import './App.css';

// Components
import Header from './components/Header/Header';
import Home from './pages/Home/Home';

// Interface
import { ICategory } from './config/interface/interface';
import { types } from './redux/reducers/types';
import Login from './pages/Login/Login';
import { IUserStatus } from './redux/types/types';
import { tableItems, tableList } from './config/defaultState/defaultState';

function App() {
  const [categories] = React.useState<ICategory[]>([
    { title: 'Местоположения', src: '/location' },
    { title: 'Пользователи', src: '/users' },
    { title: 'Заявки', src: '/applications' },
  ]);

  const dispatch = useDispatch();

  const loadDefaultData = () => {
    dispatch({
      type: types.LOAD_DATA,
      loggedStatus: true,
      categoriesList: categories,
      tableList: tableList,
      tableItems: tableItems,
    });
  };

  const userStatus = useSelector((state: IUserStatus) => state.loggedStatus);

  React.useEffect(() => {
    loadDefaultData();
  }, []);

  return (
    <BrowserRouter basename={'/'}>
      <div className="App">
        <Header />
        <Routes>
          <Route element={<Home />} path="/" />
          {!userStatus ? <Route element={<Login />} path="/login" /> : ''}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
