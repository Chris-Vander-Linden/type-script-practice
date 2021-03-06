function addNumbers(x: number, y: number) {
  return x + y;
}
console.log(addNumbers(3, 6));

let x: number;   //* Explicitly declares x as a number type
let y = 1;       //* Implicitly declares y as a number type
let z;           //* Declares z without initializing it

enum ContractStatus {
     Permanent,
     Temp,
     Apprentice
}

let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(employeeStatus);