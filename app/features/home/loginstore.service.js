export default class LoginStoreService {
  constructor() {

  }

    getLoggedIn() {
        return this.loggedIn;
    };

    setLoggedIn(loggedIn) {
        this.loggedIn = loggedIn;
    }
    
    getEmail() {
        return this.email;
    };

    
    setEmail(email) {
        this.email = email;
    };
    
}