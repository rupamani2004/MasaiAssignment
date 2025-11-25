function processStudents(students) {
  // Step 1: Filter students who scored above 60
  const above60 = students.filter(student => student.marks > 60);

  // Step 2: Sort the filtered students by marks in descending order
  above60.sort((a, b) => b.marks - a.marks);

  // Step 3: Extract only the names of the sorted students
  const names = above60.map(student => student.name);

  // Step 4: Return the array of sorted names
  return names;
}

// Example input
const students = [
  { "name": "Alice", "marks": 88 },
  { "name": "Bob", "marks": 85 },
  { "name": "Charlie", "marks": 92 },
  { "name": "David", "marks": 45 },
  { "name": "Emma", "marks": 76 },
  { "name": "Frank", "marks": 63 },
  { "name": "Grace", "marks": 83 },
  { "name": "Hannah", "marks": 69 },
  { "name": "Ian", "marks": 54 },
  { "name": "Jack", "marks": 79 },
  { "name": "Kate", "marks": 67 },
  { "name": "Leo", "marks": 88 },
  { "name": "Mia", "marks": 91 },
  { "name": "Nathan", "marks": 72 },
  { "name": "Olivia", "marks": 82 }
];

console.log(processStudents(students));

