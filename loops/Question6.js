/* Reverse a String (for loop)
Objective: Work with string indexes
 Task:
 Reverse a string using a for loop.
Example: "hello" ➝ "olleh"
 */

const str = "hello";
let reversed = ""  //empty string called reversed which will store the reversed version
 for(let i = str.length -1; i >=0; i--){  
    reversed += str[i];

 }
 console.log(reversed);