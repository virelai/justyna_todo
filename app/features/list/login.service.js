export default class LoginService {
  constructor(LoginStoreService) {
    this.LoginStoreService = LoginStoreService;
    this.setEmail('');
    this.setLoggedIn(false);
  }
  
    getLoggedIn() {
        return this.LoginStoreService.getLoggedIn();
    };

    setLoggedIn(loggedIn) {
        console.log(loggedIn + "LoginService");
        this.LoginStoreService.setLoggedIn(loggedIn);
    }
    
    getEmail() {
        return this.LoginStoreService.getEmail();
    };

    setEmail(email) {
        console.log(email + "LoginService");
        this.LoginStoreService.setEmail(email);
    }

}