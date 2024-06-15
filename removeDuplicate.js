var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
let uniqueNumbers = [...new Set(numbers)];

for(let i = 0; i < uniqueNumbers.length; i++){
    console.log(uniqueNumbers[i]);
}