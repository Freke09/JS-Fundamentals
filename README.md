# ALX Front-End Web Development
## **Week 3** - Javascript Fundamentals:
This week JavaScript fundamentals were introdunced in the curriculum. The following tasks demonstrate what I learnt in the week.
### How to Run the code:
Install node on your computer, and run the script with: node filename.js. Example: if flile name is hello.js you would type node hello.js

[Task 0. First Constant, first print](0-javascript_is_amazing.js)  
Write a script that prints “JavaScript is amazing”:

* You must create a constant variable called myVar with the value “JavaScript is amazing”
* You must use console.log(...) to print all output
* You are not allowed to use var

```
guillaume@ubuntu:~/0x12$ node 0-javascript_is_amazing.js 
JavaScript is amazing
guillaume@ubuntu:~/0x12$ 
```

[Task 1. 3 languages](1-multi_languages.js)  
Write a script that prints 3 lines:

* The first line: “C is fun”
* The second line: “Python is cool”
* The third line: “JavaScript is amazing”
* You must use console.log(...) to print all output
* You are not allowed to use var

```
guillaume@ubuntu:~/0x12$ node 1-multi_languages.js 
C is fun
Python is cool
JavaScript is amazing
guillaume@ubuntu:~/0x12$ 
```

[Task 2. Arguments](2-arguments.js)  
Write a script that prints a message depending of the number of arguments passed:

* If no arguments are passed to the script, print “No argument”
* If only one argument is passed to the script, print “Argument found”
* Otherwise, print “Arguments found”
* You must use console.log(...) to print all output
* You are not allowed to use var

```
guillaume@ubuntu:~/0x12$ node 2-arguments.js 
No argument
guillaume@ubuntu:~/0x12$ node 2-arguments.js Best
Argument found
guillaume@ubuntu:~/0x12$ node 2-arguments.js Best School
Arguments found
guillaume@ubuntu:~/0x12$ 
```

[Task 3. Value of my arguments](3-value_argument.js)  
Write a script that prints the first argument passed to it:

* If no arguments are passed to the script, print “No argument”
* You must use console.log(...) to print all output
* You are not allowed to use var
* You are not allowed to use length

```
guillaume@ubuntu:~/0x12$ node 3-value_argument.js 
No argument
guillaume@ubuntu:~/0x12$ node 3-value_argument.js School
School
guillaume@ubuntu:~/0x12$ 
```

[Tast 4. Create a sentence](4-concat.js)  
Write a script that prints two arguments passed to it, in the following format: “ is ”

* You must use console.log(...) to print all output
* You are not allowed to use var

```
guillaume@ubuntu:~/0x12$ node 4-concat.js c cool
c is cool
guillaume@ubuntu:~/0x12$ node 4-concat.js c
c is undefined
guillaume@ubuntu:~/0x12$ node 4-concat.js
undefined is undefined
guillaume@ubuntu:~/0x12$ 
```

[Task 5. An Integer](5-to_integer.js)
Write a script that prints My number: <first argument converted in integer> if the first argument can be converted to an integer:

* If the argument can’t be converted to an integer, print “Not a number”
* You must use console.log(...) to print all output
* You are not allowed to use var
* You are not allowed to use try/catch

```
guillaume@ubuntu:~/0x12$ node 5-to_integer.js 
Not a number
guillaume@ubuntu:~/0x12$ node 5-to_integer.js 89
My number: 89
guillaume@ubuntu:~/0x12$ node 5-to_integer.js "89"
My number: 89
guillaume@ubuntu:~/0x12$ node 5-to_integer.js 89.89
My number: 89
guillaume@ubuntu:~/0x12$ node 5-to_integer.js School
Not a number
guillaume@ubuntu:~/0x12$ 
```
[Task 6. Loop to languages](6-multi_languages_loop.js)  
Write a script that prints 3 lines: (like 1-multi_languages.js) but by using an array of string and a loop

* The first line: “C is fun”
* The second line: “Python is cool”
* The third line: “JavaScript is amazing”
* You must use console.log(...) to print all output
* You are not allowed to use var
* You are not allowed to use any if/else statement
* You can use only one console.log
* You must use a loop (while, for, etc.)

```
guillaume@ubuntu:~/0x12$ node 6-multi_languages_loop.js 
C is fun
Python is cool
JavaScript is amazing
guillaume@ubuntu:~/0x12$ 
```
[Task 7. I love C](7-multi_c.js)  
Write a script that prints x times “C is fun”

* Where x is the first argument of the script
* If the first argument can’t be converted to an integer, print “Missing number of occurrences”
* You must use console.log(...) to print all output
* You are not allowed to use var
* You can use only two console.log
* You must use a loop (while, for, etc.)

```
guillaume@ubuntu:~/0x12$ node 7-multi_c.js 2
C is fun
C is fun
guillaume@ubuntu:~/0x12$ node 7-multi_c.js 5
C is fun
C is fun
C is fun
C is fun
C is fun
guillaume@ubuntu:~/0x12$ node 7-multi_c.js 
Missing number of occurrences
guillaume@ubuntu:~/0x12$ node 7-multi_c.js -3
guillaume@ubuntu:~/0x12$ 
```

[Task 8. Square](8-square.js)  
Write a script that prints a square

* The first argument is the size of the square
* If the first argument can’t be converted to an integer, print “Missing size”
* You must use the character X to print the square
* You must use console.log(...) to print all output
* You are not allowed to use var
* You must use a loop (while, for, etc.)

```guillaume@ubuntu:~/0x12$ node 8-square.js
Missing size
guillaume@ubuntu:~/0x12$ node 8-square.js School
Missing size
guillaume@ubuntu:~/0x12$ node 8-square.js 2
XX
XX
guillaume@ubuntu:~/0x12$ node 8-square.js 6
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
guillaume@ubuntu:~/0x12$ node 8-square.js -3
guillaume@ubuntu:~/0x12$ 
```

[Task 9. Add](9-add.js)  
Write a script that prints the addition of 2 integers

* The first argument is the first integer
* The second argument is the second integer
* You have to define a function with this prototype: function add(a, b)
* You must use console.log(...) to print all output
* You are not allowed to use var
```
guillaume@ubuntu:~/0x12$ node 9-add.js 
NaN
guillaume@ubuntu:~/0x12$ node 9-add.js 1
NaN
guillaume@ubuntu:~/0x12$ node 9-add.js 1 7
8
guillaume@ubuntu:~/0x12$ node 9-add.js 13 89
102
guillaume@ubuntu:~/0x12$ 
```

[Task 10. Factorial](10-factorial.js)  
Write a script that computes and prints a factorial

* The first argument is integer (argument can be cast as integer) used for computing the factorial
* Factorial of NaN is 1
* You must do it recursively
* You must use a function
* You must use console.log(...) to print all output
* You are not allowed to use var

```
guillaume@ubuntu:~/0x12$ node 10-factorial.js 
1
guillaume@ubuntu:~/0x12$ node 10-factorial.js 3
6
guillaume@ubuntu:~/0x12$ node 10-factorial.js 89
1.6507955160908452e+136
guillaume@ubuntu:~/0x12$ node 10-factorial.js 333
Infinity
guillaume@ubuntu:~/0x12$ 
```



