function to12(time) {
  let hour = parseInt(time.slice(0, 2));
  let minute = time.slice(2);
  const meridiem = hour < 12 ? "AM" : "PM";

  hour = hour === 0 ? 12 : hour % 12;

  return `${hour}:${minute} ${meridiem}`;
}

console.log(to12("1124"));
console.log(to12("0900"));
console.log(to12("1455"));
console.log(to12("2346"));
console.log(to12("0030"));