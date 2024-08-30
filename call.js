// var emp ={
//     name : "emp1",
//     address : "hyd",
//     getInfo : function(country,pincode,hno){
//         return this.name+"\t"+this.address+"\t"+country+"\t"+pincode+"\t"+hno;
//     }
// }
// console.log(emp.getInfo())
// var emp2 ={
//     name : "emp2",
//     address : "Delhi",
// }
// var arr = ["India","517001","898-878A"]
// console.log()

var emp ={
    name:"satheesh",
    address: "Bangalore",
    getInfo : function(country,pincode,hno){
        return this.name+"\t"+this.address+"\t"+country+"\t"+pincode+"\t"+hno;
    }
}
// console.log(emp.getInfo())

var emp2 ={
    name: "Hari",
    address : "Bangalore",
}
var arr = ["India", "517001", "768-98A"]
// console.log(emp.getInfo.call(emp2,arr[0],arr[1],arr[2]))
console.log(emp.getInfo.apply(emp2,arr))