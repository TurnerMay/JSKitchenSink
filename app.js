let Myname = "Turner May";

const USstates = 50;

var Step6 = 5 + 4;

function sayHello() {
  alert("Hello World!");
}
sayHello();

function checkAge(name, age) {
  if (age < 21) {
    alert("Sorry " + name + ", you aren't old enough to view this page!");
  }
}

checkAge("Charles", 22);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

var vegetables = [
  "Asparagus",
  "Onion",
  "Brussel Sprouts",
  "Squash",
  "Zucchini",
];

for (var i = 0; i < vegetables.length; i++) {
  console.log(vegetables[i]);
}

var Pet = {
  name: "Meko",
  breed: "Boxer",
};

console.log(Pet.name, Pet.breed);

var Friends = [
  {
    Name: "Will",
    Age: 25,
  },
  {
    Name: "Jimmy",
    Age: 18,
  },
  {
    Name: "Jordan",
    Age: 32,
  },
  {
    Name: "Randy",
    Age: 33,
  },
  {
    Name: "Craig",
    Age: 59,
  },
];

for (var i = 0; i < Friends.length; i++) {
  checkAge(Friends[i].Name, Friends[i].Age);
}

function getLength(string) {
  return string.length;
}

let stringLength = getLength("hello world");

if (stringLength % 2 == 0) {
  console.log("The world is nice and even!");
} else {
  console.log("The world is an odd place!");
}
