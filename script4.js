function evaluateEmployees(employees) {
  // 1. Filter employees with tasksCompleted > 5
  let filtered = employees.filter(emp => emp.tasksCompleted > 5);

  // 2. Map to new array with name and performance level
  let performanceList = filtered.map(emp => {
    let level = "";

    if (emp.rating > 4) {
      level = "Excellent";
    } else if (emp.rating >= 3 && emp.rating <= 4) {
      level = "Good";
    } else {
      level = "Needs Improvement";
    }

    return {
      name: emp.name,
      performance: level
    };
  });

  // 3. Sort by performance priority: Excellent → Good → Needs Improvement
  const priority = {
    "Excellent": 3,
    "Good": 2,
    "Needs Improvement": 1
  };

  performanceList.sort((a, b) => priority[b.performance] - priority[a.performance]);

  // 4. Return final array
  return performanceList;
}
let input = [
  { name: "Alice", tasksCompleted: 8, rating: 4.7 },
  { name: "Bob", tasksCompleted: 4, rating: 4.0 },
  { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
  { name: "David", tasksCompleted: 10, rating: 4.9 },
  { name: "Eve", tasksCompleted: 7, rating: 2.8 }
];

console.log(evaluateEmployees(input));
