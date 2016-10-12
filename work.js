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
    callback(collection[i], i, collection);
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
var testArrayEach = [1,2,3,4,5];

each(testArrayEach, function(item){
  item = item * 2;
});

test(testArrayEach,
[2,4,6,8,10],
"EACH_PART1_METHOD");


//Filter
function filter(list, predicate){
var x = [];
  each(list, function(list){
    if(predicate(list)){
    x.push(list);
    }
  });
  console.log(x);
}

filter(testArrayEach, function(num){return num%2 == 0;});

//Map
function map(list, iteratee){
  var y = [];
    each(list, function(list){
      y.push(iteratee(list));
    });
    console.log(y);
}

map(testArrayEach, function(num){return num*3;});
