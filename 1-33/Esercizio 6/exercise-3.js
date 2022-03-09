//qui fatto eseguito col push
//

function adultFilter2(persons) {
  let resultFilter = []
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].age >= 18) {
      console.log("sto qui")
      resultFilter.push(persons[i])

    }
  }
  return resultFilter
}

// qui eseguito col filter
//
function isAdult(value) {
  return value.age >= 18
}

function adultFilter(persons) {
  return persons.filter(isAdult)

}

const persons = [{
    name: 'Paul',
    age: 16
  },
  {
    name: 'George',
    age: 17
  },
  {
    name: 'Lucas',
    age: 21
  },
  {
    name: 'Marco',
    age: 32
  },
  {
    name: 'Peter',
    age: 18
  },
  {
    name: 'Carl',
    age: 13
  },
  {
    name: 'Simon',
    age: 24
  },
  {
    name: 'Mark',
    age: 15
  },
  {
    name: 'Sandra',
    age: 34
  },
  {
    name: 'Alice',
    age: 28
  }
];

const adults = adultFilter(persons);
const adults2 = adultFilter2(persons);
console.log(persons);
console.log(adults);
console.log(adults2);