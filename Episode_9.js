//Episode 9


let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

//let variable sets murderer to Professor Plum. if clause doesn't change anything.
//const declareMurderer function prints Professor Plum. const variable verdict gets
//function declareMurderer which is still Professor Plum.
