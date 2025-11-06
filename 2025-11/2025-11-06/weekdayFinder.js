function getWeekday(dateString) {

  return new Date(dateString).toLocaleString("en", { weekday: "long" });
}

console.log(getWeekday("2025-11-06"));
console.log(getWeekday("1999-12-31"));
console.log(getWeekday("1111-11-11"));
console.log(getWeekday("2112-12-21"));
console.log(getWeekday("2345-10-01"));

console.log(getWeekday("2345-02-04"));