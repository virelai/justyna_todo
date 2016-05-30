/*global Firebase */

export default class ListController {
    
    
    constructor($firebaseArray, LoginService) {
        
    let listRef = new Firebase("https://justynatodo.firebaseio.com/items");
    
    this.LoginService = LoginService;
        
    this.logged = LoginService.getLoggedIn();
    this.email = LoginService.getEmail();
    this.desc = "";
    this.items = $firebaseArray(listRef);
    this.showOnlyMyTasks = false;
    this.statusFilter = '';
    
  }
  
  addItem()
  {

    if(this.desc == '' || this.email == '')
      return;

    var listRef = new Firebase('https://justynatodo.firebaseio.com/items');

    listRef.push().set({
      owner: this.email,
      status: "false",
      description: this.desc
    });
    this.desc = '';
    
  }

  removeItem(id)
  {
    
    let listRef = new Firebase('https://justynatodo.firebaseio.com/items');
    listRef.child(id).remove();
  
  }
  
  changeStatus(id)
  {
  
    let listRef = new Firebase('https://justynatodo.firebaseio.com/items');

    listRef.once("value", function(itemSnapshot) {
    
    if(itemSnapshot.child(id).val().status == 'true')
      listRef.child(id).update({ 'status': 'false' });
    else
      listRef.child(id).update({ 'status': 'true' });
    
    });
      
  }
  
  logIn()
  {
    if(this.email == '')
      return;
    this.logged = true;
    this.LoginService.setLoggedIn(true);
    this.LoginService.setEmail(this.email);
  }
  
  logOut()
  {
    this.logged = false;
    this.LoginService.setLoggedIn(false);
    this.email = '';
    this.LoginService.setEmail(this.email);
    this.search = this.email;
    this.showOnlyMyTasks = false;
  }
  
  showMyTasks()
  {
    this.search = this.showOnlyMyTasks ? this.email : '';
  }
  
  
  setStatusFilter(status)
  {
    switch(status) {
    case 'all':
      this.statusFilter = '';
        break;
    case 'todo':
        this.statusFilter = 'false';
        break;
    case 'done':
        this.statusFilter = 'true';
        break;
    }
  }
  
}

