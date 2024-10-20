const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function getEmployee(employees){
    let total = 0
    for(const employee of employees){
        // console.log(employee);
        const currentSalary = employee.starting + (employee.increment * employee.experience);
        total = total + currentSalary;
    }
    return total;
}

const total = getEmployee(employees);
console.log('Total salary is:',total);