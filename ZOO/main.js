
import { Carnivore,Herbivore,Zookeeper } from "./zoo.js";


const zoo = new Zookeeper();
zoo.addAnimal(new Carnivore("Simba", "Lion"));
zoo.addAnimal(new Herbivore("Longneck", "Giraffe"));
zoo.addAnimal(new Carnivore("Rex", "Tyrannosaurus"));
zoo.addAnimal(new Herbivore("Bessie", "Cow"));

zoo.feedAll();

console.log(`Simba last fed at: ${zoo.getLastFed("Simba")}`);

console.log("\nCarnivores in the zoo:");
zoo.getBySpecies("Lion").forEach(animal => {
    console.log(`- ${animal.name} (${animal.species})`);
});

console.log("\nHerbivores in the zoo:");
zoo.getBySpecies("Giraffe").forEach(animal => {
    console.log(`- ${animal.name} (${animal.species})`);
});

console.log("\n________________________________\


import request from "supertest";
import app from "../app.js";

describe("Health Check", () => {
  it("should return 200 and ok", async () => {
    const res = await request(app).get("/health");

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: "ok" });
  });
});
