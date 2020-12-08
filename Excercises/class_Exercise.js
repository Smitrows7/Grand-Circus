/*Classes, extended classes, and methods
Create a class called "BankAccount"
Properties:
● balance
● interestRate Methods:
● addInterest() // increases the balance by adding the appropriate interest
Next, create a subclass called "BankAccountWithFee"
It inherits all the properties and methods from BankAccount and adds the following. Properties:
● fee // a fixed dollar amount fee Methods:
● applyFee() // subtracts the fee from the balance
Create a few instances (a.k.a. objects) of each class, and test them out by calling the methods. */


class BankAccount{
constructor (balance,interestRate){
    this.balance = balance;
    this.interestRate = interestRate;

}
 
addInterest(){
 const interestAmount = (this.balance * this.interestRate)/100;
  this.balance =+ interestAmount;
}

}

class BankAccountWithFee extends BankAccount{

constructor(balance,interestRate){
    super(balance,interestRate);
    const fee = 5;
    this.fee = fee;
}

applyFee(){
    this.balance =- this.fee;
}
}

console.log(new BankAccountWithFee (100,.5));