export class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
        this.lastFedTime = null;
        this.feedingLog = [];
    }

    feed() {
        this.lastFedTime = new Date();
        this.feedingLog.push(this.lastFedTime);
    }
}

export class Carnivore extends Animal {
    feed() {
        super.feed();
        console.log(`Feeding carnivore ${this.species} - meat served.`);
    }
}

export class Herbivore extends Animal {
    feed() {
        super.feed();
        console.log(`Feeding herbivore ${this.species} - veggies served.`);
    }
}

export class Zookeeper {
    constructor() {
        this.animals = [];
    }

    addAnimal(animal) {
        this.animals.push(animal);
    }

    feedAll() {
        console.log("\n=== Feeding All Animals ===");
        this.animals.forEach(animal => animal.feed());
        console.log("===========================\n");
    }

    getLastFed(name) {
        const animal = this.animals.find(a => a.name.toLowerCase() === name.toLowerCase());
        if (!animal) throw new Error(`Animal ${name} not found`);
        return animal.lastFedTime;
    }

    getBySpecies(species) {
        return this.animals.filter(a => a.species.toLowerCase() === species.toLowerCase());
    }
}
