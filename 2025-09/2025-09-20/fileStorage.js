function numberOfFiles(fileSize, fileUnit, driveSizeGb) {
  
  return Math.floor(driveSizeGb / (
    fileUnit === "MB" ? fileSize / 1000
    : fileUnit === "KB" ? fileSize / 1000000
    : fileSize / 1000000000));
}

console.log(numberOfFiles(500, "KB", 1));
console.log(numberOfFiles(50000, "B", 1));
console.log(numberOfFiles(5, "MB", 1));
console.log(numberOfFiles(4096, "B", 1.5));
console.log(numberOfFiles(220.5, "KB", 100));
console.log(numberOfFiles(4.5, "MB", 750));