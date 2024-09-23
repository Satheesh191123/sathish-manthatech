function actualPrice(costPrice){
    const discount = 0.20;
    const discountAmount = costPrice * discount;
    const sellingPrice = costPrice - discountAmount;
    return sellingPrice;
}
const costPrice = 10000;
const sellingPrice = actualPrice(costPrice);
console.log("The selling price after 20% discount is: Rs " + sellingPrice);