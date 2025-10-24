function stripTags(html) {

  return html.replace(/<[^>]+>/g, "");
}

console.log(stripTags('<a href="#">Click here</a>'));
console.log(stripTags('<p class="center">Hello <b>World</b>!</p>'));
console.log(stripTags('<img src="cat.jpg" alt="Cat">'));
console.log(stripTags('<main id="main"><section class="section">section</section><section class="section">section</section></main>'));