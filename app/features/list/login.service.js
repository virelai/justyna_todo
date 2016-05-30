export default class LoginService {
  constructor(LoginStoreService) {
    this.LoginStoreService = LoginStoreService;
  }
  
    getLoggedIn() {
        return this.LoginStoreService.getLoggedIn();
    };

    // setOwner(owner) {
    //     this.LoginStoreService.setOwner(owner);
    // }
    
    setLoggedIn(loggedIn) {
        console.log(loggedIn + "LoginService");
        this.LoginStoreService.setLoggedIn(loggedIn);
    }

}