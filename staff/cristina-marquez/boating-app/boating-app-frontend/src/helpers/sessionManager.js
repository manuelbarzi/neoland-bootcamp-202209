import axios from 'axios';
import jwt_decode from 'jwt-decode';

class SessionManager {

    loadSessionFromLocalStorage() {
        const token = localStorage.getItem('token')

        if (!token) {
            return null
        } else {
            const decodedToken = jwt_decode(token)
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            return {
                _id: decodedToken.sub,
                email: decodedToken.email,
                name: decodedToken.name,
                token
            }
        }
    }

    saveSessionToLocalStorage(token) {
        localStorage.setItem('token', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    removeSessionToLocalStorage() {
        localStorage.removeItem('token')
    }
}


const appSessionManager = new SessionManager();
export default appSessionManager