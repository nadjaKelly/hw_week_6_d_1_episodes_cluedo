//Episode 3


let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

//first verdict is Mrs Peacock since the function declareMurderer is a constant and this block cannot change.
//second murderer is Professor Plum, it was set under let murderer and ut into const second verdict and now cannot be changed anymore.
