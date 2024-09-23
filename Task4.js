class BankAccount {
    constructor(accountNumber,accountHolderName,balance){
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.balance = balance;
}

Deposit(amountDeposited) {
    if(amountDeposited > 0){
        this.balance += amountDeposited;
        console.log(`The deposited amount is ${amountDeposited}. The balance is ${this.balance}`);
     } else {
        console.log('Please enter correct deposited amount');
        }
 }
Withdraw(substractFromDepositedAmount){
    if(substractFromDepositedAmount > 0 && substractFromDepositedAmount <= this.balance){
    this.balance -= substractFromDepositedAmount ;
    console.log(`The Withdraw amount is ${substractFromDepositedAmount}. The balance is ${this.balance}.`);
 } else if(substractFromDepositedAmount > this.balance){
    console.log('Insufficient Balance')
 } else{
    console.log('Please enter the correct withdrawel amount');
 }
}
checkBalance(){
    console.log(`The Current balance is ${this.balance}`);
    return this.balance;
}
}
const account = new BankAccount(9703589197 , 'Satheesh' , 5000);
account.Deposit(1000);
account.Withdraw(500);
account.checkBalance();
