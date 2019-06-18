"use strict";

let depositTimes = 0,
    withdrawalTimes = 0;

class BankAccount {
    constructor() {
        this.acc_balance = 0;
    }

    //Handles the Balance Enquiry Endpoint
    get balance() {
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
        this.amount = amount;
        const maxWithdrawalPerDay = 50000;
        const maxWithdrawalPerTxn = 20000;
        const maxWithdrawalFreq = 3;

        if(this.amount > maxWithdrawalPerDay) {
            throw new Error("Exceeded Maximum Withdrawal Per Day");
        } else if(this.amount > maxWithdrawalPerTxn ) {
            throw new Error("Exceeded Maximum Withdrawal Per Transaction");
        } else if(withdrawalTimes > maxWithdrawalFreq) {
            throw new Error("Exceeded Maximum Withdrawal Frequency");
        }
        this.acc_balance = this.acc_balance - amount;
    }
}

let account = new BankAccount(0);

// module.exports = BankAccount;