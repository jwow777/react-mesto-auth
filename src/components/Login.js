import { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { authorize } from './Auth';

function Login({handleLogin, history}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  function handleChange(e) {
    e.target.name === 'email' ? setEmail(e.target.value) : setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      return
    }
    authorize(email, password)
      .then(data => {
        if (data.token) {
          setEmail('');
          setPassword('');
          handleLogin();
          history.push('/');
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <div className='sign'>
      <h2 className='sign__title'>Вход</h2>
      <form className='sign__form' onSubmit={handleSubmit}>
        <input className='sign__input' type='email' name='email' placeholder='Email' value={email || ''} onChange={handleChange}/>
        <input className='sign__input' type='password' name='password' placeholder='Пароль' value={password || ''} onChange={handleChange}/>
        <button className='sign__button btn' type='submit'>Войти</button>
      </form>
    </div>
  );
}

export default withRouter(Login);