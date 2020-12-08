const animal = {
    name: "BJ",
    pockets: [],
    bells: 400,
    homeLoan: 2000,
    displayName() {
      console.log(`Hello! My name is ${this.name}`);
    },
  };
  
  // Print out the contents of the animal's bells
  console.log(animal.bells);
  
  // Create another animal with completely different properties
  const animal1 = {
    name: "Tiia",
    pockets: [],
    bells: 300,
    homeLoan: 2000,
  };
  console.log(animal1.bells);
  
  let name;
  
  // console.log the name of the animal with the most bells?
  if (animal.bells > animal1.bells) {
    name = animal.name;
  } else if (animal1.bells > animal.bells) {
    name = animal1.name;
  } else {
    name = "No one";
  }
  
  console.log(`${name} has more bells`);
  
  // Change BJ's name to Bradley
  animal.name = "Bradley";
  console.log(animal);
  
  animal.displayName();
  
  // const car = {
  //   speed: 0,
  //   make: "Ford",
  //   model: "Ranger",
  //   year: 2019,
  //   color: "blue",
  //   isOn: false,
  //   turnOn() {
  //     this.isOn = true;
  //   },
  //   vroom() {
  //     if (this.isOn) {
  //       this.speed++;
  //     } else{
  //         console.log("Car no on. Car no vroom vroom.")
  //     }
  //   },
  // };
  
  // console.log(car.speed);
  // car.turnOn();
  // car.vroom();
  // console.log(car.speed);
  