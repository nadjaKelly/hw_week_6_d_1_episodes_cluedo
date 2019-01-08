//Episode 5


const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
}

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
  ;
}

changeWeapon('Revolver');
//console.log(scenario);

const verdict = declareWeapon();
console.log(verdict);

//changeWeapon changes weapon in the object to revolver.
//the const variable verdict gets info from function and then loggs it out
//with weapon revolver




//weapon is candle stick in the object. then a const function change Weapon is created and a const function
// declareWeapon is created. it doesn't change anything. at this point the weapon is still candle stick. then the changeWeapon function
//changes it to revolver. now the object has been changed and the const variabel verdict gets the declareWeapon function, which
//is the unchanged parameter weapon in the scenario object.
