//Episode 6


let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  //nested function
  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
//murderer is originally Colonel Mustard. then it gets changed with the nested unnamed function with const plotTwist
// to Mrs White. The unnamed function with the const declareMurderer is just returning Mrs White.
//change Murderer unnamed function is executed. const variable verdict gets the declareMurderer function  and is loged out
//with Mrs White. 
