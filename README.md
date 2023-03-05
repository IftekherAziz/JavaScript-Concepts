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

