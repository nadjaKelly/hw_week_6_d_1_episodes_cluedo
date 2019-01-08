//Episode 4


let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);

console.log(`Suspect three is ${suspectThree}.`);

//the const function declareAllSuspects changed the new variable suspectThree to Colonel Mustard.
//the let variable suspectThree is not affected and stays Mrs Peacock.
