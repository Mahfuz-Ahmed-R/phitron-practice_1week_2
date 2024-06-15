const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enetr any number: ', input=>{
    let num = parseInt(input);
    if(num % 2 === 0){
        console.log('The number is even');
        } else {
            console.log('The number is odd');
        }
    readline.close();
});