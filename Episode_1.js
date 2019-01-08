// Episode 1


const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);


//The murderer is Miss Scarlet' The object is created with a const. Objects cannot be changed and point to other objects, etc.
//but it can be accessed. Properties of objects can be changed.
//The function declareMurederer created with const since
