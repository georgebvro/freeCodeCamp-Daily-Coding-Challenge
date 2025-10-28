function favoriteSongs(playlist) {

  return playlist
    .sort((a, b) => b.plays - a.plays)
    .slice(0, 2)
    .map(song => song.title);
}

console.log(favoriteSongs([{"title": "Sync or Swim", "plays": 3}, {"title": "Byte Me", "plays": 1}, {"title": "Earbud Blues", "plays": 2} ]));
console.log(favoriteSongs([{"title": "Skip Track", "plays": 98}, {"title": "99 Downloads", "plays": 99}, {"title": "Clickwheel Love", "plays": 100} ]));
console.log(favoriteSongs([{"title": "Song A", "plays": 42}, {"title": "Song B", "plays": 99}, {"title": "Song C", "plays": 75} ]));