/*Write an if/else statement that runs one of two console.log methods. 
Your console.log methods must incorporate the variables: name, age, and birthday.
○ If detroitGC is true, log the following message to the console:
■ My name is name and I am a student at Grand Circus in Detroit, Michigan.
I am currently age years old and my birthday is on birthday. ○ else
■ My name is name and I am a student at Grand Circus in Grand Rapids, Michigan.
 I am currently age years old and my birthday is on birthday.*/

const name = "Mitch Cuckovich";
const age = 25;
const birthday = "January 24";
const detroitGC = false;
const lifeEvents = [
  "I was born in Troy,Michiga.",
  "I went to Hope College.",
  "I went to Junior Olympics when I was 10 years old. I placed 14th in the nation in the 800 meter event.",
  "I'm a graduate of the front-end bootcamp,",
];
if (detroitGC) {
  console.log(
    "My name is",
    name,
    "and I am a student at Grand Circus in Detroit,Michigan.I am currently",
    age,
    "years old and my birthday is on",
    birthday
  );
} else {
  console.log(
    "My name is",
    name,
    "and I am a student at Grand Circus in Grand Rapids,Michigan.I am currently",
    age,
    "years old and my birthday is on",
    birthday
  );
}

/* Write a for loop that starts at 0 and iterates by increments of 1 while i is less than 
the length of the lifeEvents array. Each iteration of the loop should log a new sentence 
from the lifeEvents array. You should only have one console.log method.
● Declare and initialize a variable named counter to the value of 0.*/

for (i = 0; i <= lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

/*Write a while loop that loops while true.
○ Declare a variable named randomNumber that is initialized to a random integer between 1 and 10. 
Google search how to do this.
○ Write an if/else statement that has two conditions
■ If randomNumber is not equal to 5
    ● Increment counter
     Use a console.log method to say: “randomNumber !== 5” 
■ Else
    ● Increment counter
    ● Use a console.log method to say: “5 === 5. It took counter
            iterations to randomly generate the number 5.”
    ● Break */

const i = 0;

while (i > 0) {
  const randomNumber = Math.floor(Math.random() * 11);

  if (randomNumber !== 5) {
    i++;
    console.log("randomNumber !== 5");
  } else {
    i++;
    console.log(
      "5 === 5.It took",
      i,
      "iterations to randomly generate the number 5."
    );
    break;
  }
}
