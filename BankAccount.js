"use strict";

let depositTimes = new WeakMap();

class BankAccount {
    constructor() {
        this.acc_balance = 0;
    }

    //Handles the Balance Enquiry Endpoint
    balance() {
        return(this.acc_balance);
    }

    //Handles the Deposit Endpoint
    deposit(amount) {
        this.amount = amount;
        const maxDepositPerDay = 150000;
        const maxDepositPerTxn = 40000;
        const maxDepositFreq = 4;

        if(this.amount > maxDepositPerDay) {
            throw new Error("Exceeded Maximum Deposit Per Day");
        } else if(this.amount > maxDepositPerTxn ) {
            throw new Error("Exceeded Maximum Deposit Per Transaction");
        } else if(depositTimes > maxDepositFreq) {
            throw new Error("Exceeded Maximum Deposit Frequency");
        }
        this.acc_balance += amount;

    }

    //Handles the Withdrawal Endpoint
    withdraw(amount) {

    }
}

let account = new BankAccount(0);

// module.exports = BankAccount;