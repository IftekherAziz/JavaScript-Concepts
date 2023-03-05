<!-- Introduction to Javascript -->

1. What really is JavaScript?

- JavaScript is a highly abstract programming language.

High Abstraction is the way of:
- hiding the implementation details
- showing only the functionality to the users
Example: ATM Machine 

- We don't have to handle the resource management and memory allocation
- We don't have to handle the garbage collection
- Reduces details so that developers can focus on the logic better
- Improve understandability as well as maintainability of the code

2. How javascript collects garbage automatically?

- First, It collects unused data
- Then, free the memory with the help of an algorithm called 'Mark and sweep'
- The garbage collector goes through the roots making them on their way.
- It then moves on to the references and marks them as well
- The cycles continue until the garbage collector reaches all the roots and references
- The garbage collector removes all the references except for the ones that were marked

3. JavsScript is a JIT-compiled language, explain.

- JIT means 'Just-In-Time'. 
- JavaScript is not a purely interpreted language.
- Modern JavaScript is JIT compiled
- Just-In-Time compiler converts the entire code into machine-readable and executes them immediately.

4. JavaScript is a multi-paradigm programming language.

- Procedural Programming
- Object-Oriented Programming
- Functional Programming

5. JavaScript is a proto-typed-based programming language.

- In javascript, everything (function, array, object) is an object except for primitive types
- A prototypical object is an object that is used as a template from which to get the initial properties of a new object
- Proto-type is a blueprint

6. JavaScript is a Dynamically Typed Language.

- We don't have to assign the data type while declaring a variable

<!-- JavaScript Engine V8 Internal mechanism -->

The V8 engine is an open-source JavaScript engine developed by Google. It is written in C++ and is used in Google Chrome, Node.js, and other applications. The V8 engine compiles JavaScript code to machine code for fast execution.

Here are some of the internal mechanisms of the V8 engine:

Parsing: The first step in executing a JavaScript program is parsing. The V8 engine parses the code and generates an Abstract Syntax Tree (AST) representation of the program.

Optimization: After parsing, the V8 engine optimizes the code. It analyzes the code to find hot functions (functions that are executed frequently) and optimizes them for fast execution.

Compilation: The V8 engine compiles the optimized code to machine code. This is done using the Just-In-Time (JIT) compiler, which compiles the code at runtime.

Garbage Collection: The V8 engine uses a garbage collector to manage memory. It automatically deallocates memory that is no longer in use to prevent memory leaks.

Event Loop: The V8 engine implements an event loop to handle asynchronous operations. It allows the program to execute other code while waiting for an asynchronous operation to complete.

Call Stack: The V8 engine uses a call stack to keep track of function calls. When a function is called, it is added to the top of the call stack. When the function returns, it is removed from the call stack.

Heap: The V8 engine uses a heap to store objects and other data structures. The heap is managed by the garbage collector.

Profiling: The V8 engine can profile the code to identify performance bottlenecks. It provides various tools for profiling, such as the Chrome DevTools.

Overall, the V8 engine is a complex system that optimizes JavaScript code for fast execution. It includes various mechanisms, such as parsing, optimization, compilation, garbage collection, event loop, call stack, heap, and profiling.

<!--  JavaScript Execution Context and Call stack -->

JavaScript execution context refers to the environment in which JavaScript code is executed. Every time a JavaScript function is called, a new execution context is created for that function. The execution context consists of three main components:

Variable Environment: This component contains all the variables declared within the current function and its surrounding scope.

Scope Chain: This component contains references to all the variables and functions available in the current execution context, as well as its parent execution context.

This keyword: This component refers to the current object that the function is being executed upon.

The JavaScript call stack, on the other hand, is a data structure that keeps track of the execution context of all the functions currently being executed. When a function is called, its execution context is pushed onto the top of the call stack, and when a function completes its execution, its execution context is popped off the top of the call stack. This allows JavaScript to keep track of where it is in the code, and to execute functions in the correct order.

In summary, the execution context represents the environment in which JavaScript code is executed, while the call stack keeps track of the execution context of all the functions currently being executed.

<!--  Single-threaded, Asynchronous vs Synchronous -->

- setTimeout is a helper function that sets the timeout for JavaScript 
- setInterval is a helper function that sets the interval for JavaScript


- Single-threaded: In computer programming, single-threading is the processing of one command at a time.

- Synchronous:  In JavaScript, synchronous code executes one statement at a time, in sequential order. This means that the next statement cannot start until the current statement has finished executing. Synchronous code can sometimes lead to blocking, which can result in poor performance and user experience.

- Asynchronous: Asynchronous programming in JavaScript is a programming paradigm that allows the program to execute tasks asynchronously, without blocking the execution of the main program. This is particularly useful for tasks that take a long time to complete, such as fetching data from a remote server or performing complex calculations.One of the most common ways to implement asynchronous programming in JavaScript is through the use of callbacks, promises, and async/await functions.

<!--  Promise, Aync/Await -->

In JavaScript, a Promise object represents a value that may not be available yet, but will be resolved in the future.

A Promise object has three possible states:

Pending: The initial state. The Promise is neither fulfilled nor rejected.

Fulfilled: The Promise has resolved and has a resulting value.

Rejected: The Promise has been rejected and has a reason for the rejection.

When a Promise is in the "pending" state, it means that it hasn't been resolved or rejected yet. This typically happens when a Promise is created, but the code that will eventually resolve or reject it has not yet executed.

Here's an example of a Promise that is in the "pending" state:

const myPromise = new Promise((resolve, reject) => {
  // This Promise is currently in the "pending" state
});
To transition a Promise from the "pending" state to either the "fulfilled" or "rejected" state, you need to call either the resolve() or reject() function respectively, inside the Promise's executor function.

For example:

const myPromise = new Promise((resolve, reject) => {
  if (someCondition) {
    resolve('Success!');
  } else {
    reject('Failed!');
  }
});

In this example, if someCondition is true, the Promise will transition to the "fulfilled" state and the then() method will be called with the value "Success!". If someCondition is false, the Promise will transition to the "rejected" state and the catch() method will be called with the reason "Failed

<!-- setInterval and clearInterval with x++ and ++x -->

- x++ executes the statement and then increments the value. 
- ++x increments the value and then executes the statement

- The setInterval() method calls a function at specified intervals (in milliseconds). The setInterval() method continues calling the function until clearInterval() is called, or the window is closed. 1 second = 1000 milliseconds.

- setTimeout() is a built-in JavaScript function that allows you to delay the execution of a function by a specified number of milliseconds. 

- clearTimeout() is a JavaScript method that is used to cancel a timeout previously scheduled with the setTimeout() function. When you call setTimeout(), it schedules a function to run after a specified delay. We can use clearTimeout() to cancel that scheduled function before it executes.The timeoutID parameter is the ID value returned by the setTimeout() method. When you call clearTimeout(), it cancels the timeout associated with the specified timeoutID.

<!-- JavaScript event loop and concurrency -->

- JavaScript has a concurrency runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks. 

- The Event Loop has one simple job — to monitor the Call Stack and the Callback Queue. If the Call Stack is empty, the Event Loop will take the first event from the queue and will push it to the Call Stack, which effectively runs it


<!-- Quiz -->

1. What is garbage collection in JavaScript?

- The process of freeing up memory that is no longer needed being used by a program

2. What is the difference between synchronous and asynchronous code execution in JavaScript?

- Synchronous code execution means that the code is executed in a sequential manner, while asynchronous code execution means that the code is executed without waiting for the previous line to complete.

3. What is the event loop in JavaScript?

- A mechamism that allows asynchronous code to be executed in javascript

4. What is the difference between setTimeout and setInterval in JavaScript?

- setTimeout executes a function once after a specified delay, while setInterval executes a function repeatedly at a specified interval

5. How do you cancel a setTimeout or setInterval in JavaScript?

- Use the clearTimeout or clearInterval methods to cancel the timer.

6. What is a Promise in JavaScript?

-  An object that represents a value that may not be available yet, but will be resolved or rejected in the future.

7. Can you use await outside of an async function?

- No, await can only be used inside a async function.

8. What is the event loop in JavaScript?

- A loop that runs events sequentially on a single thread

9. What is the main difference between synchronous and asynchronous programming?

- Synchronous programming executes code synchronously while asynchronous programming does not

10. Which of the following is an example of a JavaScript runtime error?

- An error caused by trying to divide by zero

