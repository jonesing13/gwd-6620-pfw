// for loop with number
for (let i = 0; i < 10; i++) {
    console.log('this is i', i)
}
// for loop with an array
const myMovies = ['barbie', 'ten things i hate about you', 'legally blonde', 'clueless']
for (let j = 0; j < myMovies.length; j++) {
    console.log('i like ', myMovies[j]);
}
// while loop --> beware the infinite loop
let myVar = false;
while(myVar === false) {
    console.log('this will happen once');
    myVar = true;
}
// while loop removing items in an array
const myNums = [1, 2, 3, 4, 5, 6];
while (myNums.length > 0) {
    console.log('removing ', myNums[myNums.length - 1]);
    myNums.pop();
}
console.log(myNums);
// forEach

// map