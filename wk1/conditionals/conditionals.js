const age = window.prompt("How old are you?");
// console.log("As a number", Number(age));
// console.log("As a string", age);

//if (age === "21") {
if (Number(age) > 20) {
    console.log("old enough");
} else {
    console.log("nope (not old enough)");
}