function DecendingOrder(arr){
    return arr.sort((a,b) => b-a);
}
const number = [10,30,20,40,60,50];
const sortedNumbers = DecendingOrder(number);
console.log("Sorted array in decending order:",sortedNumbers);