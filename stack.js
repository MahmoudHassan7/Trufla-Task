export function stack( stackOperation, stackValue ) {
	 var stackHolder = {
	count: 4, // initial count was 3 which is wrong cause the count here is 4
	storage : [
	  1,
	  '{id: 1,value: "obj"}',
	  "stringHolder",
	  46
	]
  };
  
  var push = function(value) {
	stackHolder.storage[stackHolder.count] = value;
	 stackHolder.count++; // the stackholder count must increase by 1 after each push
	return stackHolder.storage;
  }
  
  var pop = function() {
    if (stackHolder.count === 0) {
	  return [];
    }
	
    var poppedItem = stackHolder.storage[stackHolder.count-1]; // the poppedItem is indexed by count-1 
    delete stackHolder.storage[stackHolder.count-1]; // the poppedItem is indexed by count-1 
	stackHolder.count--;
    return poppedItem;
  }
  
  var peek = function() {
	return stackHolder.storage[stackHolder.count-1]; // the peek which is the top element is indexed by count-1
  }
  
  var swap = function() {
  	var ptrav = stackHolder.storage[stackHolder.count-1]; // we save the top first element value in a variable
  	stackHolder.storage[stackHolder.count-1] = stackHolder.storage[stackHolder.count-2]; // we make the first top element equals to the second top element
  	stackHolder.storage[stackHolder.count-2] = ptrav; // we make the second top element equals to the variable which is the first top element
	return stackHolder.storage;
  }
  
  switch(stackOperation) {
	case 'push':
	  push(stackValue);
	break;
	case 'pop':
	  pop();
	break;
	case 'swap':
	  swap();
	break;
	case 'peek':
	  peek();
	break;
	default:
	  return stackHolder.storage;
  }
}
