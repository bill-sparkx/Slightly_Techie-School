/*2. Sum of First N Numbers
Objective: Use a loop to perform calculations
 Task:
 Ask the user for a number n. Find the sum of the first n natural numbers using a while loop.
Example Input: n = 5
 Output: 15
*/

let n = 6
let sum = 0  //Initialize sum
let i= 1  //Start from 1

while (i <= n){  //while loop runs as long as i is less than or equal to n
    sum += i; //Add i to sum
    i++;    //Move to the next number 
}

console.log("Sum is: " + sum);