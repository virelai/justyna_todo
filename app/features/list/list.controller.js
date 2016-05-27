/*global Firebase */

export default class ListController {
    
    
    constructor($firebaseArray) {
        
    let listRef = new Firebase("https://justynatodo.firebaseio.com/items");
    this.owner = "Doe";
    this.items = $firebaseArray(listRef);
    
    
     listRef.once("value", function(allItemsSnapshot) {
      allItemsSnapshot.forEach(function(itemSnapshot) {
        // Will be called with a messageSnapshot for each child under the /messages/ node
        var key = itemSnapshot.key();  // e.g. "-JqpIO567aKezufthrn8"
        
        console.log(key);

      });
    });
    
    

    console.log(this.items);
    
    // this.addItem();

  }
  
  addItem(owner, description)
  {

    var listRef = new Firebase('https://justynatodo.firebaseio.com/items');

    listRef.push().set({
      owner: owner,
      status: "false",
      description: description
    });
    this.newTask = '';
    
  }

removeItem(id)
{
  let listRef = new Firebase('https://justynatodo.firebaseio.com/items');
  console.log(id);
  listRef.child(id).remove();
  
  
  // listRef.once("value", function(allItemsSnapshot) {
  //     allItemsSnapshot.forEach(function(itemSnapshot) {
  //       // Will be called with a messageSnapshot for each child under the /messages/ node
  //       var key = itemSnapshot.key();  // e.g. "-JqpIO567aKezufthrn8"
        
  //       console.log(key);
  //       var uid = itemSnapshot.child("uid").val();  // e.g. "barney"
  //       var text = itemSnapshot.child("text").val();  // e.g. "Welcome to Bedrock City!"
        
        
        

  //     });
  //   });
  
}

changeStatus(id)
{

  let listRef = new Firebase('https://justynatodo.firebaseio.com/items');
  let itemRef = new Firebase('https://justynatodo.firebaseio.com/items');
  console.log(itemRef.child(id));
    // if(checkbox.checked)
    // itemRef.update({ 'status': 'false' });
    // else
    // 

itemRef.once("value", function(itemSnapshot) {
  //       // Will be called with a messageSnapshot for each child under the /messages/ node
         var key = itemSnapshot.child(id).val().status;  // e.g. "-JqpIO567aKezufthrn8"


if(itemSnapshot.child(id).val().status == 'true')
itemRef.child(id).update({ 'status': 'false' });
else
itemRef.child(id).update({ 'status': 'true' });

});
    

  
}
}

