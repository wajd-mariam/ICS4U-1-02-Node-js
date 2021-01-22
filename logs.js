/**
 *
 * The Logs program calculates the number of logs that
 * the truck can carry of the log size the user has chosen.
 * 
 * @author Wajd Mariam <wajd.mariam@mths.ca>
 *
 * Created on : 2020/11/23 
 */
 
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// input
console.log(`Enter the length of the logs (m)`);
rl.question('(Valid options are 0.25, 0.5, 1 m):', (lengthoflogs) => {
  // process
 var trucklogs = (1100 / (lengthoflogs * 20));
 
  // output
  console.log(``);
  console.log(`The truck can carry ${Math.round(trucklogs)} logs.`);

  rl.close();
});
