const BASE_URL = 'https://auth.nomoreparties.co';

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({password, email})
  })
  .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
  .catch(err => console.log(err));
}

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({password, email})
  })
  .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
  .then(data => {
    if (data.token) {
      localStorage.setItem('jwt', data.token);
      return data;
    } else {
      return
    }
  })
  .catch(err => console.log(err));
}

export const getContent = (jwt) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`
    },
  })
  .then(res => res.json())
  .then(res => {
    localStorage.setItem('email', res.data.email);
    return res;
  })
  .catch(err => console.log(err));
}