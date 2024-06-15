var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
let mx = 0;
let str;
for(let i = 0; i < friends.length; i++){
    let a = friends[i].length;
    if(a > mx){
        str = friends[i];
        mx = a;
    }

}
console.log(str);