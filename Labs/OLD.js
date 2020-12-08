// Declare a variable named submissions that is initialized to an array with the following
// objects:
const submissions = [
    {name: 'Jane', score: 95, date: '2020-01-24', passed: true},
    {name: 'Joe', score: 77, date: '2018-05-14', passed: true},
    {name: 'Jack', score: 59, date: '2019-07-05', passed: false},
    {name: 'Jill', score: 88, date: '2020-04-22', passed: true}
];

// Declare a function named addSubmission
// ○ Parameter(s): array, newName, newScore, newDate

/*function addSubmission(array, newName, newScore, newDate) {
    // ○ Functionality: construct an object and push it into the array. The object must
    // have the same properties as the objects already in the array. Use conditional
    // statements to set the value for the passed property to true if the score is
    // greater than or equal to 60 and false otherwise.
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
console.log(submissions);*/

 
/*Declare a function named deleteSubmissionByIndexcl
Parameter(s): array, index
○ Functionality: remove the object from the array at the specified index using the
splice method */
function deleteSubmissionByIndex(array,deleteIdx){
    //let startIdx;
    //let deleteIdx;
    /*const delObj1 = {
        name:newName,
        score:newScore,
        date:newDate,
        passed:passed
        };*/

  let delArray =  array.splice(deleteIdx,1);
}
deleteSubmissionByIndex(submissions,1);
console.log(submissions);

 

// Declare a function named findLowestScore
// ○ Parameter(s): array
// ○ Functionality: return the object in the array that has the lowest score. Use the
// forEach method to loop through the whole array.
// [5,2,3,4]

/// Declare a function named findLowestScore
// ○ Parameter(s): array
// ○ Functionality: return the object in the array that has the lowest score. Use the
// forEach method to loop through the whole array.
// [5,2,3,4]
/*function getLowestScore(submissions) {
    let lowest = null;
  
    submissions.forEach(function (submission) {
      if (lowest === null || lowest.score > submission.score) {
        lowest = submission;
      }
    });
  
    return lowest;
  }*/
