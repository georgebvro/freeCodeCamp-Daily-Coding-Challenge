function navigate(commands) {
  let history = ["Home"];
  let cursor = 0;

  commands.forEach(command => {
    const { action, page } = /(?<action>Visit|Back|Forward) ?(?<page>.*)/.exec(command).groups;
    
    switch(action) {
      case "Visit": 
        history = history.slice(0, cursor + 1);
        history.push(page);
        cursor ++;
        break;

      case "Back":
        if (cursor > 0)
          cursor --;
        break;

      case "Forward":
        if (cursor < history.length - 1)
          cursor ++;
    }
  });

  return history[cursor];
}

console.log(navigate(["Visit About Us", "Back", "Forward"]));
console.log(navigate(["Forward"]));
console.log(navigate(["Back"]));
console.log(navigate(["Visit About Us", "Visit Gallery"]));
console.log(navigate(["Visit About Us", "Visit Gallery", "Back", "Back"]));
console.log(navigate(["Visit About", "Visit Gallery", "Back", "Visit Contact", "Forward"]));
console.log(navigate(["Visit About Us", "Visit Visit Us", "Forward", "Visit Contact Us", "Back"]));