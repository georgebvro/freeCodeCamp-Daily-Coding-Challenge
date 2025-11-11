function getExtension(filename) {

  return /\.(?<extension>[^\.]*)$/g
    .exec(filename)
    ?.groups
    ?.extension
    || "none";
}

console.log(getExtension("document.txt"));
console.log(getExtension("README"));
console.log(getExtension("image.PNG"));
console.log(getExtension(".gitignore"));
console.log(getExtension("archive.tar.gz"));
console.log(getExtension("final.draft."));