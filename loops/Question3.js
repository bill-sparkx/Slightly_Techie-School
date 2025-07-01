/* 3. Countdown Timer (do-while)
Objective: Show do-while guarantees one run
 Task:
 Create a do...while loop that simulates a countdown timer from n to 0.
 Even if n = 0, it should still print once (0).
Challenge: Let them test it with n = 0 to show why do...while is unique. */


let n = 100;

do {
    console.log(n);
    n--;
} while (n >=0);