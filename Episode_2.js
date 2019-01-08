//Episode 2


let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);


//const murderer is created and it is Professor Plum.
//changeMurderer function changes it to Mrs Peacock.
//const variable verdict gets return of declareMurderer function and therefor
// murderer is Mrs Peacock.
