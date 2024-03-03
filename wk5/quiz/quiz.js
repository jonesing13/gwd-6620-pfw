// I have this code:
// let greekMythicalCharacters = ["Athena", "Zeus", "Hermes", "Hercules", "Hera", "that one guy"];
// I would like you to write a script to replace "that one guy" with "Hades" in the space provided below. You may use any method you wish but the final product should not include "that one guy" but should include "Hades" in the last position.
let greekMythicalCharacters = ["Athena", "Zeus", "Hermes", "Hercules", "Hera", "that one guy"];
greekMythicalCharacters.splice(5, 1, 'Hades');
console.log(greekMythicalCharacters);


// I have a problem collecting Chihuahua's. I just can't get enough of those feisty little puppers. My chihuahuas are named Lucky, Lucy, Limda, Lacey, and Carl. I would like a script that loops through each of their names and outputs "My dog <name here> is a really good puppy." for each one of their names. In the space provided,  write the requested script. Do not overly concern yourself with indentation. 
let myDogs = ['Lucky', 'Lucy', 'Limda', 'Lacey', 'Carl'];
for(i = 0; i < myDogs.length; i++) {
    console.log('My dog ' + myDogs[i] + ' is a really good puppy.');
}