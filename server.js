const arr=[1,2,3];
const val=arr.reduce(function(acc,curr){
    console.log(`value in accumulator: ${acc}`);
    console.log(`current value: ${curr}`);
    return curr+acc;
},2);
console.log(val);