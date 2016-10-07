// Read what filter, map, and reduce does on underscorejs.org
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

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
    array[i] = callback(collection[i], i, collection);
  }
}





// TEST function
function test(argument, answer, description){
  if (argument === undefined) {
    console.log("ERROR: Argument Evaluated to UNDEFINED!");

	// toString comparison is temporary solution
  } else if (JSON.stringify(argument) === JSON.stringify(answer)) {
		console.log("Test for " + description + ": PASSED");
	} else {
		console.log("Test for " + description + ": FAILED");
		console.log("Recieved: " + argument);
		console.log("Expected: " + answer);
	}
}

// TEST CASES
var testArray = [1, 2, 3, 4, 5];
var testObj = {a:1, b:2, c:3, d:4, e:5}

each(testObj, function(item, index, collection){
  collection[index] = item * 2;
});

test(testObj,
[2,4,6,8,10],
"EACH_PART1_METHOD");

console.log(testObj.a);
console.log(typeof(testArray));
console.log(Array.isArray(testArray));
console.log(Array.isArray(testObj));
