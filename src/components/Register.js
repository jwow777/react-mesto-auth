import { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { register } from './Auth';

function Register({setIsSuccessRegistration, setIsErrorRegistration, history}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  function handleChange(e) {
    e.target.name === 'email' ? setEmail(e.target.value) : setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (email, password) {
      setEmail(email);
      setPassword(password);
      register(email, password).then(res => {
        if (res) {
          setIsSuccessRegistration(true);
          history.push('/sign-in');
        } else {
          setIsErrorRegistration(true);
        }
      }).catch(err => {
        setIsErrorRegistration(true);
        console.log(err);
      })
    };
  }

  return (
    <div className='sign'>
      <h2 className='sign__title'>Регистрация</h2>
      <form className='sign__form' onSubmit={handleSubmit}>
        <input className='sign__input' type='email' name='email' placeholder='Email' value={email || ''} onChange={handleChange}/>
        <input className='sign__input' type='password' name='password' placeholder='Пароль' value={password || ''} onChange={handleChange}/>
        <button className='sign__button btn' type='submit'>Зарегистрироваться</button>
      </form>
      <Link to='/sign-in' className='sign__link'>Уже зарегистрированы? Войти</Link>
    </div>
  );
}

export default withRouter(Register);