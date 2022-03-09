// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000
function calculateSalary(role) {
  let risultato
  switch (role) {
    case 'ceo':
      risultato = '2200'
      break;
    case 'manager':
      risultato = '1800'
      break;
    case 'cto':
      risultato = '1800'
      break;
    case 'developer':
      risultato = '1500'
      break;
    case 'other':
      risultato = '1000'
  }
  return risultato
}

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);