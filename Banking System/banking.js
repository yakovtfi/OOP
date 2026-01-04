export class BankAccount {
    constructor(owner, balance = 0) {
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (this.balance < amount) {
            throw new Error("Insufficient funds");
        }
        this.balance -= amount;
    }
}

export class Bank {
    constructor() {
        this.accounts = [];
    }

    addAccount(account) {
        this.accounts.push(account);
    }

    findAccount(name) {
        return this.accounts.find(acc => acc.owner === name);
    }

    transfer(fromName, toName, amount) {
        const fromAccount = this.findAccount(fromName);
        const toAccount = this.findAccount(toName);
        
        if (!fromAccount) throw new Error(`Account for ${fromAccount} not found`);
        if (!toAccount) throw new Error(`Account for ${toAccount} not found`);
        
        fromAccount.withdraw(amount);
        toAccount.deposit(amount);
    }

    showBalances() {
        console.log("\n___ Bank Balances ___");
        this.accounts.forEach(account => {
            console.log(`${account.owner}: $${account.balance}`);
        });
        console.log("__________\n");
    }
}

