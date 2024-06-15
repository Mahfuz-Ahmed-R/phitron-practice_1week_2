const array = [1,10,11,2,6,19,20,12,13,14,3,4,,7,8,9,5,17,18,15,16];
array.sort((a,b) => a - b);
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}
