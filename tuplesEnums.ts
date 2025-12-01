// tuples
// the order is important
// RBG color
const color: [number, number, number] = [255, 0, 0];
// More about of tuples
type HTTPResponse = [number, string];
const goodRes: HTTPResponse = [200, "OK"];
goodRes[0] = 201; // valid
// goodRes[1] = 404; // invalid
// Wierdly enough, TS allows push method in tuples, this has to do with how tuples are implemented in TS
goodRes.push("New Value"); // valid
// or even popping values
goodRes.pop(); // valid
// tuples are not necessary to use
const responses: HTTPResponse[] = [[404, "Not Found"]];
