"use strict";
// This function takes an object with 'first' and 'last' string properties and prints the full name.
function printName(name) {
    console.log(`${name.first} ${name.last}`);
}
printName({ first: "Murad", last: "Pro" });
// passing this object
const mySong = {
    title: "Unchained Melody",
    artist: "The Righteous Brothers",
    numStreams: 123456789,
    credits: { producer: "Phil Spector", writer: "Alex North" },
};
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log(`${song.title} - ${song.artist}`);
}
const earnings = calculatePayout(mySong);
console.log(earnings);
const prinitng = printSong(mySong);
console.log(prinitng);
const myPoint = { x: 1, y: 2 }; // if we put z or not ts won't complain
const user = { id: 12345, username: "muradpro" };
console.log(user.id);
//but if we try to change the id it will give an error
user.id = 33; // Error: Cannot assign to 'id' because it is a read-only property
const happyFace = { radius: 4, color: "yellow" };
const christy = { numLives: 7, breed: "Husky", age: 5 };
