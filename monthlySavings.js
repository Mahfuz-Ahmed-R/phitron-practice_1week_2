const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter all payments as comma-separated numbers: ', paymentsInput => {
    readline.question('Enter your living cost: ', livingCostInput => {
        const paymentsArray = paymentsInput.split(',').map(Number);
        const livingCost = Number(livingCostInput);
        const output = monthlySavings(paymentsArray, livingCost);
        console.log(`Your monthly savings is: ${output}`);
        readline.close();
    });
});

function monthlySavings(array, livingCost) {
    let sumAfterTax = 0;
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 3000) {
            sumAfterTax += array[i] * 0.2;
        }
    }
    for (let i = 0; i < array.length; i++) {
            sum += array[i];
    }
    let savings = sum - (sumAfterTax + livingCost);

    return savings >= 0 ? savings : "earn more";
}