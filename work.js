// PROMPT: Write a for loop than can loop thru any array
/*
var newArray = [1,2,3,4,5];

// for every element double it
for (var i=0; i < newArray.length; i++){
  // i=0, i = index of array
  newArray[i] = newArray[i] * 2;
}

console.log(newArray);
*/
// Start On Underbar Functions
// http://underscorejs.org/

// PROMPT: Implement the each function. Each function will take in collection and callback
// as arguments. It will apply the callback to every item in the collection. The callback
// needs to be able to taking in the item, index, and collection as the arguments.

// Example collection: [1,2,3,4,5]
// Example callback: function(item){ return item * 2;}
// Collection will now be: [2,4,6,8,10]
function each(collection, callback){
  for (var i = 0; i < collection.length; i++){
    callback(collection[i], i, collection);
  }
}
