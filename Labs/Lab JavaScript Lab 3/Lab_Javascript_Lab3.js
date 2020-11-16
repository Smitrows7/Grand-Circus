// Declare a variable named submissions that is initialized to an array with the following
// objects:
const submissions = [
    {name: 'Jane', score: 95, date: '2020-01-24', passed: true},
    {name: 'Joe', score: 77, date: '2018-05-14', passed: true},
    {name: 'Jack', score: 59, date: '2019-07-05', passed: false},
    {name: 'Jill', score: 88, date: '2020-04-22', passed: true}
];

/* ○ Functionality: construct an object and push it into the array. The object must
    // have the same properties as the objects already in the array. Use conditional
    // statements to set the value for the passed property to true if the score is
    // greater than or equal to 60 and false otherwise.*/

function addSubmission(array, newName, newScore, newDate) {
    
    let passed;
    if(newScore >= 60){ 
       passed = true;
    }
    else{
        passed = false;
    }

    const newObj1 = {
    name:newName,
    score:newScore,
    date:newDate,
    passed:passed
    };

    let test = array.push(newObj1);
}

addSubmission(submissions,'James',55,'2020-11-06');
console.log(submissions);

 
/*Declare a function named deleteSubmissionByIndexcl
Parameter(s): array, index
○ Functionality: remove the object from the array at the specified index using the
splice method */
function deleteSubmissionByIndex(array,deleteIdx){
  let delArray =  array.splice(deleteIdx,1);
}
deleteSubmissionByIndex(submissions,1);
console.log(submissions);

/*Declare a function named deleteSubmissionByName
○ Parameter(s): array, name
○ Functionality: remove the object from the array that has the provided name.
Incorporate the findIndex method and the splice method.
*/
function deleteSubmissionByName(array,deleteName){
    
  const index = submissions.findIndex(submissions => submissions.name === deleteName);
  console.log(index);
  let delName=  array.splice(index,1);
}

deleteSubmissionByName(submissions,"Jane");
console.log(submissions);

/*Declare a function named editSubmission
○ Parameter(s): array, index, score
○ Functionality: update an object’s score in the array at the specified index. Use
conditional statements to set the value for the passed property to true if the
score is greater than or equal to 60 and false otherwise.*/

function editSubmission(array, updateIndex, updateScore) {
    
    let updatePassed;
    if(updateScore >= 60){ 
        updatePassed = true;
    }
    else{
        updatePassed = false;
    }
    console.log(updatePassed);
    array[updateIndex].passed = updatePassed;
    array[updateIndex].score = updateScore;
}

console.log(submissions);
editSubmission(submissions,1,55);
console.log(submissions);

/*Declare a function named findSubmissionByName
○ Parameter(s): array, name
○ Functionality: return the object in the array that has the provided name. Use the
find method. */

/*function findSubmissionByName(array,findName){
    
  const dispName = submissions.find(submissions => submissions.name === findName);
  console.log(dispName);
}

findSubmissionByName(submissions,"Jane");*/
 
/// Declare a function named findLowestScore
// ○ Parameter(s): array
// ○ Functionality: return the object in the array that has the lowest score. Use the
// forEach method to loop through the whole array.
// [5,2,3,4]
function getLowestScore(submissions) {
    let lowest = null;
  
    submissions.forEach(function (submission) {
      if (lowest === null || lowest.score > submission.score) {
        lowest = submission;
      }
    });
  
    return lowest;
  }
  console.log(submissions);
  const lowestScore = getLowestScore(submissions);
  console.log("Lowest Score :",lowestScore); 

/* Declare a function named findAverageScore
○ Parameter(s): array
○ Functionality: return the average quiz score. Use a for...of loop.*/
function findAverageScore(submissions) {
    
    let totalScore = 0;
    const arrayLength = submissions.length;
    for (const submission of submissions) {

      if (submission.score > 0){
         
         totalScore = totalScore + submission.score;
        
      }
      console.log("totalScore :",totalScore);

    }
    const averageScore = totalScore/arrayLength;
    return averageScore;
  }
  console.log(submissions);
  const avgScore = findAverageScore(submissions);
  console.log("Average Score :",avgScore);

  /* Declare a function named filterPassing
    ○ Parameter(s): array
    ○ Functionality: return a new array using the filter method. 
      The filter method should find objects in the array that have passing scores.*/
   
function filterPassing(submissions) {
    const newArray = submissions.filter(submission => submission.passed === true);
    console.log(newArray);
}

//console.log(submissions);
filterPassing(submissions);

/* Declare a function named filter90AndAbove
○ Parameter(s): array
○ Functionality: return a new array using the filter method. T
The filter method should find objects in the array that have scores greater than or equal to 90.
*/
function filter90AndAbove(submissions) {
    const newArray = submissions.filter(submission => submission.score >= 90);
    console.log(newArray);
}

console.log(submissions);
filter90AndAbove(submissions);

 