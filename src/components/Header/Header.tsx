import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IUserStatus } from '../../redux/types/types';

// Styles
import './Header.css';
import { types } from '../../redux/reducers/types';
import { ReactSVG } from 'react-svg';

const Header = () => {
  const userStatus = useSelector((state: IUserStatus) => state.loggedStatus);
  const dispatch = useDispatch();

  function logOut() {
    dispatch({ type: types.USER_STATUS, loggedStatus: false });
  }

  return (
    <div className="header">
      <div className="header-elements">
        <h1 className="header-title">Система Учета воды</h1>
        <nav className="header-navigate">
          <ul className="header-navigate-list">
            <Link to={'/'} className="header-navigate-item">
              Главная
            </Link>
            {!userStatus ? (
              <Link to={'/login'} className="header-navigate-item">
                <ReactSVG src={require('../../UI/icons/profile.svg').default} />
                <span>Вход</span>
              </Link>
            ) : (
              <span onClick={() => logOut()} className="header-navigate-item">
                <ReactSVG src={require('../../UI/icons/profile.svg').default} />
                Выход
              </span>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
