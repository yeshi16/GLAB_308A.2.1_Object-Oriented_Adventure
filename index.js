// Part 1: Humble Beginnings

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            name: "Frank",
            type: "Flea",
            belongings: ["hat", "sunglasses"]
        }
    },

    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
}

// adventurer.inventory.forEach(item => {console.log(item)})
// adventurer.roll();

// Part 2: Class Fantasy
class Character {
    static MAX_HEALTH = 100;

    constructor(name) {
        this.name = name;
        this.health = Character.MAX_HEALTH; // Set health to the maximum health
        this.inventory = [];
    }

    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
        return result;
    }
}

class Adventurer extends Character {
    static ROLES = ["Fighter", "Healer", "Wizard"];

    constructor(name, role) {
        super(name);
        if (!Adventurer.ROLES.includes(role)) {
            console.log(`${this.name} has entered an invalid role: ${role}`);
        }
        this.role = role;
        this.inventory.push("bedroll", "50 gold coins");
    }

    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }

    duel(advent) {
        let currentHealth = this.health;
        let adventHealth = advent.health;
        while (currentHealth > 50 && adventHealth > 50) {
            const thisRoll = this.roll();
            const adventRoll = advent.roll();
            
            if (thisRoll > adventRoll) {
                adventHealth--;
            } else {
                currentHealth--;
            }
            console.log(`For this round ${this.name} has ${currentHealth} health. ${advent.name} has ${adventHealth} health`);
        }
        if (currentHealth > adventHealth) {
            console.log(`The winner of this duel is ${this.name}, the adventurer still above 50 health.`);
        } else {
            console.log(`The winner of this duel is ${advent.name}, the adventurer still above 50 health.`);
        }
    }
}

const duelAdventurer = new Adventurer("jane", "Fighter");
const opposingAdventurer = new Adventurer("john", "Healer");

// duelAdventurer.duel(opposingAdventurer);

// Part 5: Gather your Party
// Define the AdventurerFactory class
class AdventurerFactory {
    constructor(role) {
        this.role = role;
        this.adventurers = [];
    }
    generate(name) {
        const newAdventurer = new Adventurer(name, this.role);
        this.adventurers.push(newAdventurer);
    }
    findByIndex(index) {
        return this.adventurers[index];
    }
    findByName(name) {
        return this.adventurers.find((a) => a.name === name);
    }
}
const healersFactory = new AdventurerFactory("Healer");
healersFactory.generate("Alice");

// Part 6: Developing Skills
const invalidRole = new Adventurer("jane", "warrior")
const duelAdventurer1 = new Adventurer("jane", "Fighter");
const opposingAdventurer1 = new Adventurer("john", "Healer");

duelAdventurer1.duel(opposingAdventurer1)