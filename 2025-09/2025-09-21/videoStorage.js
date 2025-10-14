function numberOfVideos(videoSize, videoUnit, driveSize, driveUnit) {

  if (!["B", "KB", "MB", "GB"].includes(videoUnit))
    return "Invalid video unit";
  
  if (!/GB|TB/.test(driveUnit))
    return "Invalid drive unit";

  return Math.floor(
    ( driveUnit == "TB" ? driveSize * 1000000000000
    : driveSize * 1000000000 )
    /
    ( videoUnit == "GB" ? videoSize * 1000000000
    : videoUnit == "MB" ? videoSize * 1000000
    : videoUnit == "KB" ? videoSize * 1000
    : videoSize )
  );
}

console.log(numberOfVideos(500, "MB", 100, "GB"));
console.log(numberOfVideos(1, "TB", 10, "TB"));
console.log(numberOfVideos(2000, "MB", 100000, "MB"));
console.log(numberOfVideos(500000, "KB", 2, "TB"));
console.log(numberOfVideos(1.5, "GB", 2.2, "TB"));