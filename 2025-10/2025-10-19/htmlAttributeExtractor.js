function extractAttributes(element) {
  let attributes = element.match(/\s[^\t\n\f \/>"'=]+=["'][^"']+["']/g);
  
  if (attributes) {
    attributes = attributes.map(attribute => {

      const { attributeName, attributeValue } = 
        /\s(?<attributeName>[^\t\n\f \/>"'=]+)=["'](?<attributeValue>[^"']+)["']/g
        .exec(attribute)
        .groups;
      
      return `${attributeName}, ${attributeValue}`;
    })
  }

  return attributes || [];
}

console.log(extractAttributes('<span class="red"></span>'));
console.log(extractAttributes('<meta charset="UTF-8" />'));
console.log(extractAttributes("<p>Lorem ipsum dolor sit amet</p>"));
console.log(extractAttributes('<input name="email" type="email" required="true" />'));
console.log(extractAttributes('<button id="submit" class="btn btn-primary">Submit</button>'));