class Api {
  constructor({baseUrl, headers}) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }
  
    _checkResponse(res) {
      if (res.ok) {
          return res.json();
      }
      return Promise.reject(`Ошибка ${res.status}`);
    }

    getUserInfo() {
      return fetch(`${this._baseUrl}/users/me`, { 
        method: 'GET', 
        headers: this._headers
      })      
        .then(this._checkResponse);
    }
  
    getInitialCards() {
      return fetch(`${this._baseUrl}/cards`, { 
        method: 'GET', 
        headers: this._headers
      })
        .then(this._checkResponse);
    }
  
    setUserInfo(userData) {
      return fetch(`${this._baseUrl}/users/me`, { 
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify(userData)
      })
        .then(this._checkResponse);
    }
  
    postCard(cardData) {
      return fetch(`${this._baseUrl}/cards`, { 
        method: 'POST', 
        headers: this._headers, 
        body: JSON.stringify(cardData)
      })
        .then(this._checkResponse);
    }
  
    deleteCard(cardId) {
      return fetch(`${this._baseUrl}/cards/${cardId}`, { 
        method: 'DELETE', 
        headers: this._headers
      })
        .then(this._checkResponse);
    }
  
    like(cardId) {
      return fetch(`${this._baseUrl}/cards/likes/${cardId}`, { 
        method: 'PUT', 
        headers: this._headers
      })
        .then(this._checkResponse);
    }
  
    dislike(cardId) {
      return fetch(`${this._baseUrl}/cards/likes/${cardId}`, { 
        method: 'DELETE', 
        headers: this._headers
      })
        .then(this._checkResponse);
    }
  
    setUserAvatar(userData) {
      return fetch(`${this._baseUrl}/users/me/avatar`, { 
        method: 'PATCH', 
        headers: this._headers, 
        body: JSON.stringify(userData)
      })
        .then(this._checkResponse);
    }
  }

  const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-20',
    headers: {
      authorization: '5e9e6ed0-2e3b-49ef-bceb-982a1b5626d9',
      'Content-Type': 'application/json'
    }
  });

  export default api;