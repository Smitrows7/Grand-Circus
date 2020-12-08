// Create a Villager class that represents the following properties
// Name
// Birthday
// Species
// Gender
// Catch Phrase
// isNPC = true // (Non-Person Computer)
// sayCatchPhrase()
class Villager {
    constructor(name, birthday, species, gender, catchPhrase) {
      // sets up the data
      // initializing the data, starting place
      this.name = name;
      this.birthday = birthday;
      this.species = species;
      this.gender = gender;
      this.catchPhrase = catchPhrase;
      this.isNPC = true;
    }
  
    sayCatchPhrase() {
      console.log(this.catchPhrase);
    }
  }
  
  const bj = new Villager(
    "BJ",
    new Date("09/16/1900"),
    "human",
    "Male",
    "Cowabunga"
  );
  console.log(`${bj.name} is a ${bj.species}.`);
  bj.sayCatchPhrase();
  
  // Extend this class to create a MainCharacter class, that contains
  // Pockets
  // maxPocketSize
  // isNPC = false // (Non-Person Computer)
  // canAddToPockets()
  class MainCharacter extends Villager {
      constructor(name, birthday, species, gender, catchPhrase) {
          super(name, birthday, species, gender, catchPhrase);
          this.isNPC = false;
          this.pockets = [];
          this.maxPocketSize = 5;
          // whatever you
      }
      // same as 
      // constructor(...butterfly) {
      //     super(...butterfly);
      //     this.isNPC = false;
      // }
  
      canAddToPockets() {
          return (this.pockets.length < this.maxPocketSize);
      }
  }
  
  class MainCharacterPro extends MainCharacter {
      constructor(name, birthday, species, gender, catchPhrase) {
          super(name, birthday, species, gender, catchPhrase);
          this.maxPocketSize = 100;
      }
  }
  
  const mainCharacter = new MainCharacterPro("Batman", new Date(), 'superhero');
  console.log(mainCharacter);
  console.log(mainCharacter.canAddToPockets()); // true
  mainCharacter.pockets = [1,2,3,4,5];
  console.log(mainCharacter.canAddToPockets()); // false
  
  // Create a new array, called island, 
  const island = []; 
  // and add some Villagers,
  // adding new villagers to the end
  island.push(mainCharacter);
  island.push(bj);
  island.push(new Villager('Suguna', new Date(), 'human', 'Female', 'Not really'));
  console.log(island)
  
  // Remove 1 villager, always removing the villager that has been
  // there the longest
  const removed = island.shift();
  console.log(island);
  console.log(removed);
  
  // Add batman back in to the beginning
  island.unshift(removed);
  console.log(island);
  
  // add anywhere .splice()
  
  // Display the following message for each villager:
  //  `Hi! My name is ${villager.name}.`
  // then print the catch phrase
  for( villager of island ) {
     sayHello(villager);
  }
  
  island.forEach(sayHello);
  
  for (let i = 0; i < island.length; i++) {
      const villager = island[i];
      sayHello(villager);
  }
  
  function sayHello(villager) {
      console.log(`Hi! My name is ${villager.name}.`);
      villager.sayCatchPhrase();
  }