// Part 1: Humble Beginnings

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion:{
        name: "Leo",
        type: "Cat",
        companion: {
            name: "Frank",
            type: "Flea",
            belongings: ["hat", "sunglasses"] 
        }
    },

    roll(mod = 0){
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
}

// adventurer.inventory.forEach(item => {console.log(item)})

// adventurer.roll();

// Part 2: Class Fantasy

class Character {
    static MAX_HEALTH = 100;

    constructor(name){
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }
    roll(mod = 0){
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
}

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo")
robin.companion.type = "Cat"
robin.companion.companion = new Character("Frank")
robin.companion.companion.type = "Flea"
robin.companion.companion.inventory = ["small hat", "sunglasses"];

// robin.roll()
// robin.companion.roll()
// robin.companion.companion.roll()

// Part 3: Class Features

class Adventurer extends Character {
    static ROLES = ["Fighter", "Healer", "Wizard"]
    constructor(name, role){
        super(name);
        if (!Adventurer.ROLES.includes(role)) {
            throw new Error(`Invalid role: ${role}. Must be one of: ${Adventurer.ROLES.join(", ")}`);
        }
        this.role = role;
        this.inventory.push("bedroll", "50 gold conins");
    }

    scout(){
        console.log(`${this.name} is scouting ahead...`);
        super.roll()
    }
}

class Companion extends Character {
    constructor (name, type){
        super(name)
        this.type = type;
    }

}

const robin1 = new Adventurer("robin", "warrior");
const leo = new Companion("Leo", "cat");

robin1.inventory = ["sword", "potion", "artifact"];
robin1.companion = leo;
leo.companion = new Companion("frank", "flea")
leo.companion.inventory = ["small hat", "sunglasses"];

robin1.roll();
leo.roll();
robin1.scout();

// Part 4: Class Uniforms
