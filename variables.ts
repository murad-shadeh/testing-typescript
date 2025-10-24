let movieTitle: string = "Spider-Man: No Way Home";
movieTitle = "Doctor Strange in the Multiverse of Madness";
let myNumber: number = 42;
let isRaining: boolean = false;
//TypeScript inference
let x = 27;
x = "murad";

let thing: any = "hello";
thing = 42;
thing = true;
thing = [];
thing();
thing.toUpperCase();

const movies = ["The Matrix", "Inception", "Interstellar", "The Dark Knight"];
// TypeScript infere to this variable as any since we didn't give it a value
// let foundMovie;
let foundMovie: string;
for (let movie of movies) {
  if (movie === "Inception") {
    foundMovie = movie;
  }
}
