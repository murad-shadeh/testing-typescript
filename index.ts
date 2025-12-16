// we need to play with the settings in the config file created by tsc --init
// compiling more than one tsc file at once.
interface Chicken {
  breed: string;
  eggsPerWeek: number;
  name: string;
  age: number;
}
const norma: Chicken = {
  breed: "Silkie",
  eggsPerWeek: 4,
  name: "norma",
  age: 2,
};

const juniper: Chicken = {
  breed: "Silkie",
  eggsPerWeek: 7,
  name: "norma",
  age: 1,
};
