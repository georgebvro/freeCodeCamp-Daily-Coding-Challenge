function canPost(message) {

  return message.length <= 40 ? "short post" : message.length <= 80 ? "long post" : "invalid post";
}

console.log(canPost("Hello world"));
console.log(canPost("This is a longer message but still under eighty characters."));
console.log(canPost("This message is too long to fit into either of the character limits for a social media post."));