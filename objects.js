// This function takes an object with 'first' and 'last' string properties and prints the full name.
function printName(name) {
    console.log("".concat(name.first, " ").concat(name.last));
}
printName({ first: "Murad", last: "Pro" });
// passing this object
var mySong = {
    title: "Unchained Melody",
    artist: "The Righteous Brothers",
    numStreams: 123456789,
    credits: { producer: "Phil Spector", writer: "Alex North" },
};
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
var earnings = calculatePayout(mySong);
console.log(earnings);
var prinitng = printSong(mySong);
console.log(prinitng);
