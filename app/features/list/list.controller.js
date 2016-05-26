/*global Firebase */

export default class ListController {
    
    constructor($firebaseArray) {
        
    let ref = new Firebase("https://justyna.firebaseio.com/items");
    this.items = $firebaseArray(ref);
    
    console.log(this.items);

  }

}