def image_search(images, term):

    return [imageName for imageName in images if term.casefold() in imageName.casefold()]

print(image_search(["dog.png", "cat.jpg", "parrot.jpeg"], "dog"))
print(image_search(["Sunset.jpg", "Beach.png", "sunflower.jpeg"], "sun"))
print(image_search(["Moon.png", "sun.jpeg", "stars.png"], "PNG"))
print(image_search(["cat.jpg", "dogToy.jpeg", "kitty-cat.png", "catNip.jpeg", "franken_cat.gif"], "Cat"))