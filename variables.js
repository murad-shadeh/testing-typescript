"use strict";
let movieTitle = "Spider-Man: No Way Home";
movieTitle = "Doctor Strange in the Multiverse of Madness";
let myNumber = 42;
let isRaining = false;
//TypeScript inference
let x = 27;
x = "murad";
let thing = "hello";
thing = 42;
thing = true;
thing = [];
thing();
thing.toUpperCase();
const movies = ["The Matrix", "Inception", "Interstellar", "The Dark Knight"];
// TypeScript infere to this variable as any since we didn't give it a value
// let foundMovie;
let foundMovie;
for (let movie of movies) {
    if (movie === "Inception") {
        foundMovie = movie;
    }
}
