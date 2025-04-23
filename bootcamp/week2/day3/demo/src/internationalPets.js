// An example implementation of the internationalPets exercise

// DO NOT EDIT
let animalNoises = [
  {
    dog: {
      America: "Woof! Woof!",
      Germany: "Wau Wau!",
      England: "Bow wow!",
      Uruguay: "Jua jua!",
      Afrikaans: "Blaf!",
      Korea: "Mong mong!",
      Iceland: "Voff voff!",
      Albania: "Ham!",
      Algeria: "Ouaf ouaf!",
    },
  },
  {
    cat: {
      America: "Meow",
      Germany: "Miauw!",
      England: "mew mew",
      Uruguay: "Miau Miau!",
      Afrikaans: "Purr",
      Korea: "Nyaong!",
      Iceland: "Kurnau!",
      Albania: "Miau",
      Algeria: "Miaou!",
    },
  },
  {
    chicken: {
      America: "Cluck cluck",
      Germany: "tock tock tock",
      England: "Cluck Cluck",
      Uruguay: "gut gut gdak",
      Afrikaans: "kukeleku",
      Korea: "ko-ko-ko",
      Iceland: "Chuck-chuck!",
      Albania: "Kotkot",
      Algeria: "Cotcotcodet",
    },
  },
];
// DO NOT EDIT CODE ABOVE

// Write your code here
function internationalPets(animal, country) {
  // Step 1: analyze the structure of our data
  //  it is an array of objects. each object has a key that is the name of the animal
  //  and the value is an object with keys that are the names of countries and values that are the sounds the animal makes in that country.

  // Step 2: find the animal in the array of objects
  let index;
  for (let i = 0; i < animalNoises.length; i++) {
    const animalNoise = animalNoises[i];
    if (animalNoise[animal]) {
      index = i;
      break;
    }
  }

  // What if we didn't find it? The exercise doesn't specify, but an error would be helpful
  if (index == undefined) {
    throw new Error("animal not found");
  }

  // Step 3: find the animal noises for that animal using the animal name as key
  const noises = animalNoises[index][animal];

  // Step 4: find the noise for that country using the country name as key
  const noise = noises[country];

  // Step 5: format the output string, e.g. "Dogs in America say Woof! Woof!"
  const capitalizedAnimal = animal[0].toUpperCase() + animal.slice(1);
  return `${capitalizedAnimal}s in ${country} say ${noise}`;
}

// try it out
console.log(internationalPets("dog", "America"))

// also see the solution video beneath the exercise :)

// DO NOT EDIT CODE BELOW

module.exports = internationalPets;
