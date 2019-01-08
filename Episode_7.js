//Episode 7


let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
console.log(changeMurderer());
const verdict = declareMurderer();
console.log(verdict);
//changeMurderer function changes it from Professor Plum to Mr Green. Nested functions? Both? declareMurderer function returns
//Mr Green. this is put in const variable verdict and logged out as Mr Green. 
