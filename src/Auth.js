
import auth0 from 'auth0-js'


function Auth(props) {

    const auth = new auth0.WebAuth({
        domain: 'dev--fjtj9b2.us.auth0.com',
        clientID: 'c8AlWkVeRX9ynTeGqVx0re3jbAbC834Y',
        redirectUri: 'http://localhost:3000/va',
        audience: 'https://dev--fjtj9b2.us.auth0.com/userinfo',
        responseType: 'token id_token',
        scope: 'openid'
    })

    this.login = () => auth.authorize()
}

export default Auth;
