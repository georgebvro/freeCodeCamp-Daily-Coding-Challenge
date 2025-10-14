function getHeadings(csv) {

  return csv
    .split(",")
    .map(heading => heading.trim());
}


console.log(getHeadings("name,age,city"));
console.log(getHeadings("first name,last name,phone"));
console.log(getHeadings("username , email , signup date "));