export default class LoginStoreService {
  constructor() {

  }

    getLoggedIn() {
        return this.loggedIn;
    };

    setLoggedIn(loggedIn) {
        
        console.log(loggedIn + "LoginStoreService");
        this.loggedIn = loggedIn;

    }

}