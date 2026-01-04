import { Bank, BankAccount } from "./banking.js";
import readline from "readline-sync";

const bank = new Bank();

while (true) {
    console.log("\n1. Create Account");
    console.log("2. Transfer");
    console.log("3. Show Balances");
    console.log("4. Exit");
    
    const choice = readline.question("\nChoose an option (1-4): ");
    
    try {
        if (choice === '1') {
            const owner = readline.question("Enter account owner name: ");
            const initialBalance = parseFloat(readline.question("Enter initial balance: "));
            
            const account = new BankAccount(owner, initialBalance);
            bank.addAccount(account);
            console.log(`Account created for ${owner} with balance $${initialBalance}`);
            
        } else if (choice === '2') {
            const from = readline.question("Transfer from : ");
            const to = readline.question("Transfer to : ");
            const amount = parseFloat(readline.question("Enter transfer amount: "));
            
            bank.transfer(from, to, amount);
            console.log(`Transferred $${amount} from ${from} to ${to}`);
            
        } else if (choice === '3') {
            bank.showBalances();
            
        } else if (choice === '4') {
            console.log("Exiting banking system...");
            break;
            
        } else {
            console.log("Invalid option. Please try again.");
        }
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}
