const readline = require('readline');
 
const inputRL = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
inputRL.question('Enter username : ',(name)=>{
    inputRL.question('Enter password : ',(pass)=>{
        if (name === "user" && pass === "password") {
            console.log("Login successful");
        } else {
            console.log("Login failed");
        }
    })
});
   
