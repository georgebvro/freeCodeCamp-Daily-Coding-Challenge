function format(seconds) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds - hrs * 3600) / 60);
  const secs = seconds - hrs * 3600 - mins * 60;

  let duration = hrs != 0 ? `${hrs}:` : "";
  duration += hrs != 0 && mins <= 9 ? `0${mins}:` : `${mins}:`;
  duration += secs <= 9 ? `0${secs}` : `${secs}`;

  return duration;
}

console.log(format(500));
console.log(format(4000));
console.log(format(1));
console.log(format(5555));
console.log(format(99999));