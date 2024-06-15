const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enetr any year: ', input=>{
    let year = parseInt(input);
    if(year % 400 == 0 || year % 4 == 0 && year % 100 != 0){
        console.log('The year is leap year!');
        } else {
            console.log('The year is not leap year!');
        }
    readline.close();
});