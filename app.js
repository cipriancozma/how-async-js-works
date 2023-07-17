// I.
// Global Execution Context

// logger();
// console.log(1);

// Function Execution Context
function logger() {
  console.log(2);
  finish();
  console.log(3);
  function finish() {
    console.log("finished");
  }
}

// First of all, we go into the logger() and place it into the call stack -> log 2 in the console
// We found finish, go into it and place it into the call stack -> log "finished" in the console
// finish is popped off from the call stack
// Going further and log 3 in the console
// logger is popped off from the call stack
// Going further and log 1 in the console
// main is popped off from the call stack -> call stack is empty, nothing to run

// II.
function first() {
  console.log(1);
}

function second() {
  setTimeout(() => {
    console.log(2);
  }, 0);
}

function third() {
  console.log(3);
}

// first();
// second();
// third();

// Besides Call Stack we have Web API's
// The setTimeout is added to the call stack and to not block all the running code, it is moved to Web API's and it's running there until is done
// Now is moved to the Event Loop
// Once the all call stack is finished and nothing is running, the setTimeout from the event loop is moved to the call stack and ran
// after the setTimeout is finished, is popped off from the call stack

// III. Callback Hell
function message() {
  console.log("hello there");
}

function logger(message) {
  message();
}

// logger(message);

// IV. Promises
const promise = new Promise((res, rej) => {
  //   res("we did it"); // value resolved
  rej("ohhh boy, the server is down"); // value rejected
});

promise.then((data) => console.log(data)).catch((err) => console.error(err));

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is my data");
  }, 2000);
});

// promise2.then((res) => {
//   console.log(res);
// });

// V. Async / Await

async function getTodos() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    console.log(1);
    const data = await response.json();
    console.log(data);
    console.log(2);
  } catch (error) {
    console.log(error);
  }
}

getTodos();
