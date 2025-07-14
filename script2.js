/*Q2. 2. The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
Sort the array and find the min and max age*/
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let max = 0;
let min = ages[0];
function maxAge() {
  for (i = 0; i <= ages.length - 1; i++) {
    if (ages[i] > max) {
      max = ages[i];
    }
  }
  return max;
}
function minAge() {
  for (i = 1; i <= ages.length - 1; i++) {
    if (ages[i] < min) {
      min = ages[i];
    }
  }
  return min;
}
console.log(`Maximum age is ${maxAge()}`);
console.log(`Minimum age is ${minAge()}`);



/*
Find the median age(one middle item or two middle items divided by two) 
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]*/



const median = (ages) => {
   // const arr = ages.slice();
//   for (i = 0; i < arr.length - 1; i++) {
//     for (j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
const arr=ages.slice().sort((a,b)=>a-b);
  if(arr.length%2===1){
    const medianIndex=Math.floor(arr.length/2);
    return arr[medianIndex];
  }
  else{
   const medianIndex=arr.length/2;
   const medianIndex2=medianIndex-1;
   return (arr[medianIndex]+arr[medianIndex2])/2;
  }
}
console.log(median(ages));

/*
Find the average age(all items divided by number of items)
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]*/
const avg=(arr)=>{
   let sum=0;
// for(let i=0;i<=arr.length-1;i++){
//    sum+=arr[i];

// }
arr.forEach(element => {
   sum+=element
});
return sum/arr.length;
}
console.log(avg(ages));
/*

Find the range of the ages(max minus min)*/
let range = maxAge()-minAge();
console.log(range)
/*
Compare the value of (min - average) and (max - average), use abs() method*/
let minAgeDifference=Math.abs(minAge()-avg(ages));
let maxAgeDifference=Math.abs(maxAge()-avg(ages));
minAgeDifference>maxAgeDifference?console.log(`MinAgeDifference is greater than MaxAgeDifference`):console.log(`MaxAgeDifference is greater than MinAgeDifference`)