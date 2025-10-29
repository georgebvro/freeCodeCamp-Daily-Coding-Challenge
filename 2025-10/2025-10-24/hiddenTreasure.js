function dive(map, coordinates) {
  if (map[coordinates[0]][coordinates[1]] === "-")
    return "Empty";

  const updatedMap = [...map];
  updatedMap[coordinates[0]][coordinates[1]] = "X";

  for (const row of updatedMap) 
    for (const location of row) 
      if (location === "O")
        return "Found";
        
  return "Recovered";
}

console.log(dive([[ "-", "X"], [ "-", "X"], [ "-", "O"]], [2, 1]));
console.log(dive([[ "-", "X"], [ "-", "X"], [ "-", "O"]], [2, 0]));
console.log(dive([[ "-", "X"], [ "-", "O"], [ "-", "O"]], [1, 1]));
console.log(dive([[ "-", "-", "-"], [ "X", "O", "X"], [ "-", "-", "-"]], [1, 2]));
console.log(dive([[ "-", "-", "-"], [ "-", "-", "-"], [ "O", "X", "X"]], [2, 0]));
console.log(dive([[ "-", "-", "-"], [ "-", "-", "-"], [ "O", "X", "X"]], [1, 2]));