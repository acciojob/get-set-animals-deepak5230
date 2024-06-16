//complete this code
class Animal {
	  constructor(species) {
    this._species = species;
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method to log the sound the animal makes
  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }
}

// Define the Cat class that extends Animal
class Cat extends Animal {
  // Method to log "purr" to the console
  purr() {
    console.log("purr");
  }
}

// Define the Dog class that extends Animal
class Dog extends Animal {
  // Method to log "woof" to the console
  bark() {
    console.log("woof");
  }
}

}

//class Dog extends Animal {}

//class Cat extends Animal {}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
