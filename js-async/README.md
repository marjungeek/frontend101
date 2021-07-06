## Callback function
A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

Here is a quick example:

```
function greeting(name) {
  alert('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(greeting);
```

## Asynchronous JavaScript
Functions running in parallel with other functions are called asynchronous

```
setTimeout(myFunction, 3000);

function myFunction() {
  console.log('You will see me after');
}
```

## Promises
A Promise is a JavaScript object that links producing code and consuming code

"Producing code" is code that can take some time
"Consuming code" is code that must wait for the result

```
let myPromise = new Promise(function(myResolve, myReject) {
  // "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);
```

## Async/Await
The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.

```
let value = await promise;
```
