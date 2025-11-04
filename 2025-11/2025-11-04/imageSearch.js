function imageSearch(images, term) {

  return images.filter(imageName => new RegExp(term, "gi").exec(imageName));
}

console.log(imageSearch(["dog.png", "cat.jpg", "parrot.jpeg"], "dog"));
console.log(imageSearch(["Sunset.jpg", "Beach.png", "sunflower.jpeg"], "sun"));
console.log(imageSearch(["Moon.png", "sun.jpeg", "stars.png"], "PNG"));
console.log(imageSearch(["cat.jpg", "dogToy.jpeg", "kitty-cat.png", "catNip.jpeg", "franken_cat.gif"], "Cat"));