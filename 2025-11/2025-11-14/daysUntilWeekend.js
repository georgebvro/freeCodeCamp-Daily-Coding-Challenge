function daysUntilWeekend(dateString) {
  const beginningOfWeekend = 6;
  const dayOfTheWeek = new Date(dateString).getDay();

  if (dayOfTheWeek === 0 || dayOfTheWeek === 6)
    return "It's the weekend!";

  const daysUntilTheWeekend = beginningOfWeekend - dayOfTheWeek;
  return `${daysUntilTheWeekend} day${daysUntilTheWeekend === 1 ? "" : "s"} until the weekend.`;
}

console.log(daysUntilWeekend("2025-11-14"));
console.log(daysUntilWeekend("2025-01-01"));
console.log(daysUntilWeekend("2025-12-06"));
console.log(daysUntilWeekend("2026-01-27"));
console.log(daysUntilWeekend("2026-09-07"));
console.log(daysUntilWeekend("2026-11-29"));