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

// EACH CAN TAKE IN BOTH ARRAYS AND OBJECTS AS THE COLLECTION

// Array.isArray(what you want to be checked) returns either true or false
// typeof? -> typeof('string') === 'string'
//         -> typeof(9001) === 'number'
//         -> typeof(true) === 'boolean'
//         -> typeof({'a':1,'b':2}) === 'object'
//         -> typeof([1,2,3,4,5]) === 'object'

// objects dont necessarily have an order
// {"a":1, "b":2, "c":3}
// firsrst look at a then b then c <---- this isnt true
// objects dont have a start point or end point, they just contain things

function each(collection, callback){
  if(Array.isArray(collection)){
    for(var i = 0; i < collection.length; i++){
    callback(collection[i], i, collection);
    }
  }
  else {
    for(var key in collection){
      callback(collection[key], key, collection);
    }
  }
}


//Filter (I WANT YOU TO REIMPLEMENT THIS WITH REDUCE)
function filter(list, predicate){
var x = []; // init var
  each(list, function(item){ // run each
    if(predicate(item)){
    x.push(item);
    }
  });
  return x; // output updated var
}


//Map (I WANT YOU TO REIMPLEMENT THIS WITH REDUCE)
function map(list, iteratee){
  var y = [];
    each(list, function(item){
      y.push(iteratee(item));
    });
    return y;
}

function reduce(list, iteratee, accumulator){
  // Second functionality of reduce is that if an accumulator is not provided
  // it takes in the first item of the list as the accumulator
  // and runs each on the rest of the the list (this excludes the first item)


  var output = accumulator; // outside variable that starts

  each(list, function(item, index, collection){
    console.log("EACH IS LOOKING AT THIS ITEM", item);
    console.log("BEFORE ITERATEE OUTPUT =", output);
    output = iteratee(output, item, index, collection);
    console.log("AFTER ITERATEE OUTPUT =", output);
  });

  return output;
}



// you arent pushing to github nearly enough.
// remember that your commits need to be 'atomic'

/* FUNCTIONS TO LOOK AT (IF POSSIBLE USE REDUCE TO IMPLEMENT)
  max             |
  min             |
  pluck           |  -> "easy"
  find            |
  reject          |
  contains                 |
  without                  |
  uniq                     | -> "medium"
  every/ u// use  educe    |
  some  // use every       |
  shuffle      |  -> much
  flatten      |  -> harder   //     */


// MOTIVATION SUPER HARD IMPLEMENTATION
// There is a function called memoize (utilizes something called a closure scope)
// it takes in a function and the function's arguments
// if memoize calls the function for the first time then it calls it and saves the result
// if memoize calls the function any time after with the same exact arguments
// it WONT call the function but will simply return the result it calculated before

// recursion

// when a function calls itself inside the function body
// KEY TO RECURSION AND WHEN TO USE IT

// analogy -> recursion is the while loop for FUNCTIONS
// one of the 'paths' that the recursive function takes
// is the 'switch' to turn off the 'while loop'

// so u use recursion when u DONT know how many times the function needs to run

// EXAPMPLE:
/*
function recursive(){
  recursive();
}
*/

// TST function
function test(argument, answer, description){
  if (argument === undefined) {
    console.log("ERROR: Argument Evaluated to UNDEFINED!");
	// JSON === JavaScriptObjectNotation
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

/*
test(filter(testArrayEach, function(num){return num%2 == 0;}),
[2, 4],
"FILTER_METHOD");

test(map(testArrayEach, function(num){return num*3;}),
[3,6,9,12,15],
"MAP_METHOD");
*/

// WRITE THIS CONSOLE.LOG INTO A TEST
console.log(reduce([1,2,3,4,5], function(output, item){
  if (item % 2 === 0) {
    return output.concat(item);
  } else {
    return output;
  }
  // what does a function return if nothing is returned? -> undefined
}, [1] ));
