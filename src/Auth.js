
import auth0 from 'auth0-js'

const LOGIN_SUCCESS_PAGE = 'user-privacy'
const LOGIN_FAILED_PAGE = ''

function Auth() {
    const auth = new auth0.WebAuth({
        domain: 'dev--fjtj9b2.us.auth0.com',
        clientID: 'c8AlWkVeRX9ynTeGqVx0re3jbAbC834Y',
        redirectUri: 'http://localhost:3000/va',
        audience: 'https://dev--fjtj9b2.us.auth0.com/userinfo',
        responseType: 'token id_token',
        scope: 'openid'
    })

    this.login = () => auth.authorize()

    this.validate = () => {
        auth.parseHash((err, res) => {
            if (res && res.accessToken && res.idToken) {
                let expiredAt = JSON.stringify((res.expiresIn) * 1000 + new Date().getTime())
                localStorage.setItem('access_token', res.accessToken)
                localStorage.setItem('id_token', res.idToken)
                localStorage.setItem('expires_at', expiredAt)
                window.location.hash = ''
                window.location.pathname = LOGIN_SUCCESS_PAGE
            } else if (err) {
                window.location.pathname = LOGIN_FAILED_PAGE
            }
        })
    }

    this.isAuthenticated = () => {
        let expiredAt = JSON.parse(localStorage.getItem('expires_at'))
        let now = new Date().getTime()
        return now < expiredAt
    }

    this.logout = () => {
        localStorage.removeItem('access_token')
        localStorage.removeItem('id_token')
        localStorage.removeItem('expires_at')
        window.location.pathname = LOGIN_FAILED_PAGE
    }
}

export default Auth;
