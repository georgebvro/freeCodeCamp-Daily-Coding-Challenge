function sort(emails) {
  const regex = /(.+)@(.+)/;

  return emails.sort((a, b) => {
    const aUsername = regex.exec(a)[1],
      aDomain = regex.exec(a)[2],
      bUsername = regex.exec(b)[1],
      bDomain = regex.exec(b)[2];

    return aDomain.localeCompare(bDomain, undefined, { sensitivity: 'base' }) 
      || aUsername.localeCompare(bUsername, undefined, { sensitivity: 'base' });
  });
}

console.log(sort(["jill@mail.com", "john@example.com", "jane@example.com"]));
console.log(sort(["bob@mail.com", "alice@zoo.com", "carol@mail.com"]));
console.log(sort(["user@z.com", "user@y.com", "user@x.com"]));
console.log(sort(["sam@MAIL.com", "amy@mail.COM", "bob@Mail.com"]));
console.log(sort(["simon@beta.com", "sammy@alpha.com", "Sarah@Alpha.com", "SAM@ALPHA.com", "Simone@Beta.com", "sara@alpha.com"]));