function sortedCategoryCount(arr) {
  let countObj = arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(countObj)
    .sort((a, b) => b[1] - a[1])   // sort by counts in descending order
    .map(entry => entry[0]);       // return only category names
}
