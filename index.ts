// we need to play with the settings in the config file created by tsc --init
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
