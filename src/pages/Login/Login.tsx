import React, { FormEvent } from 'react';
import Input from '../../components/UI/Input/Input';
import { IUserSignIn } from '../../redux/types/types';
import './Login.css';
import Button from '../../components/UI/Button/Button';

const Login = () => {
  const [signIn, setSignIn] = React.useState<IUserSignIn>({
    mail: '',
    password: '',
  });

  function handleClickToButton(e: FormEvent) {
    
  }

  return (
    <div className="login-page">
      <h1 className="login-page-title">Авторизация</h1>
      <form
        className="login-form"
        onSubmit={(e) => {
          return e.preventDefault();
        }}
      >
        <div className="signInInputs">
          <div className="login-item">
            <label className="input-title" htmlFor="umail">
              Ваша почта
            </label>
            <Input
              width="490px"
              onValue={(value) =>
                setSignIn((user) => {
                  return { ...user, mail: value };
                })
              }
              value={signIn.mail}
              titleInput="Введите ваш email..."
              type="mail"
              required={true}
              id="umail"
            />
          </div>
          <div className="login-item">
            <label className="input-title" htmlFor="upassword">
              Пароль
            </label>
            <Input
              width="490px"
              id="upassword"
              onValue={(value) =>
                setSignIn((user) => {
                  return { ...user, password: value };
                })
              }
              style={{ marginBottom: '17px' }}
              type="password"
              value={signIn.password}
              titleInput="введите ваш пароль..."
              required={true}
            />
          </div>
        </div>
        <Button
          title="Войти"
          width="136px"
          onClick={() => {
            console.log(1);
            return false;
          }}
        />
      </form>
    </div>
  );
};

export default Login;
