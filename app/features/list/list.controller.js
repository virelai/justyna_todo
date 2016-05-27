/*global Firebase */

export default class ListController {
    
    
    constructor($firebaseArray) {
        
    let listRef = new Firebase("https://justynatodo.firebaseio.com/items");
    this.owner = "Doe";
    this.items = $firebaseArray(listRef);

  }
  
  addItem(owner, description)
  {

    if(this.desc == '' || this.owner == '')
      return;

    var listRef = new Firebase('https://justynatodo.firebaseio.com/items');

    listRef.push().set({
      owner: owner,
      status: "false",
      description: description
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
    console.log(listRef.child(id));
  
    listRef.once("value", function(itemSnapshot) {
    
    if(itemSnapshot.child(id).val().status == 'true')
      listRef.child(id).update({ 'status': 'false' });
    else
      listRef.child(id).update({ 'status': 'true' });
    
    });
      
  }
  
}

