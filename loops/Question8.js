/*8. Sum Digits of a Number (do-while)
Objective: Loop with math operations
 Task:
 Ask the user for a number, e.g., 527. Use a do...while loop to sum its digits:
 5 + 2 + 7 = 14
 */

 let number = 527
 let sum = 0
 let numStr = number.toString();
 let i = numStr.length - 1;
do {
    sum += parseInt(numStr[i]);
    i --;
}while (i >=0);

console.log ("Sum of digits:", sum)