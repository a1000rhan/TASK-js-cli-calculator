const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
let num1 = prompt("What's 1st number ");
let num2 = prompt("What's 2nd number ");
let op = prompt("What's op ");
let res=0;

num1=parseInt(num1);
num2=parseInt(num2);
if(op == "+"){
    
    res=num1+num2;
    console.log(`result =  ${res}`);
}
if(op == "-" ){
 
    res=num1-num2;
    console.log(`result =  ${res}`);
}
 if(op == "/"){

res=num1/num2;
console.log(`result =  ${res}`);
} if(op == "*"){

    res=num1*num2;
    console.log(`result =  ${res}`);

}

