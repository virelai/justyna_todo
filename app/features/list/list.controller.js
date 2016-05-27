/*global Firebase */

export default class ListController {
    
    
    constructor($firebaseArray) {
        
    let listRef = new Firebase("https://justynatodo.firebaseio.com/items");
    this.owner = "Doe";
    this.desc = ""
    this.items = $firebaseArray(listRef);

  }
  
  addItem()
  {

    if(this.desc == '' || this.owner == '')
      return;

    var listRef = new Firebase('https://justynatodo.firebaseio.com/items');

    listRef.push().set({
      owner: this.owner,
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
    if(this.owner == '')
      return;
    this.logged = true;
  }
  
  logOut()
  {
    this.logged = false;
    this.owner = '';
    this.search = this.owner;
  }
  
  showMyTasks()
  {
    this.search = this.showOnlyMyTasks ? this.owner : '';
  }
  
}

