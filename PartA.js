// Q1 
let arr1=[10, 20, 30];
let arr2=[40, 50];
let combined=[...arr1, ...arr2];
console.log("Q1 combined:",combined);

//Q2
let person={name:'Navin', age:25};
let city={city:'Benguluru'};
let profile={...person,...city};
console.log("Q2",profile);

//Q3
function sumAll(...args) {
    return args.reduce((sum, curr)=>sum+curr,0);
}
console.log("Q3 Sum:", sumAll(1, 2, 3, 4));

//Q4
let numbers=[10,20,30,40,50];
let [first,...remaining]=numbers;
console.log("Q4",remaining)



