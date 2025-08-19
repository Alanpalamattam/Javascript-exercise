const peoplelist = [
  {
    name: "John",
    age: 30,
    city: "New York",
    salary: 50000,
    department: "HR",
    dob: "1993-05-15",
  },
  {
    name: "Jane",
    age: 25,
    city: "Los Angeles",
    salary: 60000,
    department: "Finance",
    dob: "1998-02-20",
  },
  {
    name: "Mike",
    age: 35,
    city: "Chicago",
    salary: 70000,
    department: "IT",
    dob: "1988-10-10",
  },
  {
    name: "Emily",
    age: 28,
    city: "San Francisco",
    salary: 80000,
    department: "Marketing",
    dob: "1995-12-05",
  },
  {
    name: "David",
    age: 40,
    city: "Seattle",
    salary: 90000,
    department: "Sales",
    dob: "1983-07-25",
  },
  {
    name: "Sarah",
    age: 32,
    city: "Boston",
    salary: 55000,
    department: "HR",
    dob: "1991-03-30",
  },
  {
    name: "Chris",
    age: 29,
    city: "Austin",
    salary: 65000,
    department: "Finance",
    dob: "1994-08-15",
  },
];

// 1. Calculate the average salary
const averageSalary =
  peoplelist.reduce((acc, person) => acc + person.salary, 0) /
  peoplelist.length;
console.log("Average Salary:", averageSalary);

// 2. Filter people older than 20 and return their names
const namesAbove20 = peoplelist
  .filter(
    (person) =>
      new Date().getFullYear() - new Date(person.dob).getFullYear() > 20
  )
  .map((person) => person.name);
console.log("People older than 20:", namesAbove20);

// 3. Sort the people list by age and return their names
const sortedByAge = [...peoplelist]
  .sort((a, b) => a.age - b.age)
  .map((person) => person.name);
console.log("People sorted by age:", sortedByAge);

// 4. Count the number of people in each department
const departmentCounts = peoplelist.reduce((acc, person) => {
  acc[person.department] = (acc[person.department] || 0) + 1;
  return acc;
}, {});
console.log("Department Counts:", departmentCounts);

// 5. Find the person with the highest salary
const highestSalaryPerson = peoplelist.reduce((prev, current) =>
  prev.salary > current.salary ? prev : current
);
console.log("Person with the highest salary:", highestSalaryPerson.name);

// 6. List all unique cities
const uniqueCities = [...new Set(peoplelist.map((person) => person.city))];
console.log("Unique Cities:", uniqueCities);

// 7. Calculate the average age of people in the list
const averageAge =
  peoplelist.reduce((acc, person) => acc + person.age, 0) / peoplelist.length;
console.log("Average Age:", averageAge);

// 8. Find the youngest person in the list
const youngestPerson = peoplelist.reduce((prev, current) =>
  prev.age < current.age ? prev : current
);
console.log("Youngest Person:", youngestPerson.name);

// 9. Find the oldest person in the list
const oldestPerson = peoplelist.reduce((prev, current) =>
  prev.age > current.age ? prev : current
);
console.log("Oldest Person:", oldestPerson.name);

// 10. Count the number of people above and below the average salary
const salaryComparison = peoplelist.reduce(
  (acc, person) => {
    if (person.salary > averageSalary) {
      acc.above++;
    } else {
      acc.below++;
    }
    return acc;
  },
  { above: 0, below: 0 }
);
console.log("People above average salary:", salaryComparison.above);
console.log("People below average salary:", salaryComparison.below);
