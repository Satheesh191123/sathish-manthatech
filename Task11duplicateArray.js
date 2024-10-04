function arrayDuplicates(arr){
    let uniqueElements = [new Set(arr)];
    return uniqueElements;
}
let array = [10,20,30,30,40,50,60,60,70,70,80,90];
let uniqueArray = arrayDuplicates(array);
console.log("Original array:", array);
console.log("Unique elements:",uniqueArray);