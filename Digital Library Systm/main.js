import { Book,Movie,Library } from "./library.js";
console.log("\n________ 📖Welcome To MY Library📖_________ \n");

const lib = new Library();
lib.addItem(new Book("Dune", "Frank Herbert", 1965, "Sci-Fi", 412));
lib.addItem(new Movie("Dune", "Denis Villeneuve", 2021, "Sci-Fi", 155));

console.log("Search results for 'dune':");
lib.search("dune").forEach(item => console.log(item.getSummary()));

console.log("\nItems in 'Sci-Fi':");
lib.listByGenre("Sci-Fi").forEach(item => console.log(item.getSummary()));

console.log("\n______________________\n");
