

## Start Project

```sh
npm i
npm start
```



## How

1. Create Auth0 account and build a application
2. Fill the config
```js
const auth = new auth0.WebAuth({
    domain: 'dev--fjtj9b2.us.auth0.com',
    clientID: 'c8AlWkVeRX9ynTeGqVx0re3jbAbC834Y',
    redirectUri: 'http://localhost:3000/va',
    audience: 'https://dev--fjtj9b2.us.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid profile'
})
```

3. Then search some methods about `auth`


## Articles and Tool
https://jwt.io/
https://auth0.com/