"use strict";
// 43.	Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function makeGreat(magicianNames) {
    const greatMagicians = magicianNames.map(name => name + " the Great");
    return greatMagicians;
}
function showMagicians(magicianNames) {
    for (const name of magicianNames) {
        console.log(name);
    }
}
const magicians = ["Samri", "Goga", "Chintu", "Black"];
const greatMagicians = makeGreat([...magicians]); // Create a copy of the original array
console.log("Original Magicians:");
showMagicians(magicians);
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
