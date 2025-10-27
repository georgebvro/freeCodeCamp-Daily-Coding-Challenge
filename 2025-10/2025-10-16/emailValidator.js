function validate(email) {
  /* Step-by-step approach
  if ([...email.matchAll(/@/g)].length !== 1)
    return false;

  const { local, domain } = /(?<local>.+)@(?<domain>.+)/.exec(email).groups;

  if (/[^\w.-]/g.exec(local)
    || /^\.|\.$/g.exec(local)
    || !/\./g.exec(domain)
    || !/\.[a-zA-Z]{2,}$/g.exec(domain)
    || /\.\./g.exec(local) 
    || /\.\./g.exec(domain))
    return false;

  else
    return true;
  */

  // Solution using only one regular expression
  return Boolean(/^(?!.*@.*@)(?!\.)(?![\w-]*\.\.)[\w.-]+(?<!\.)@(?!.*\.\.).*\.[a-zA-Z]{2,}$/.exec(email));
}

console.log(validate("a@b.cd"));
console.log(validate("hell.-w.rld@example.com"));
console.log(validate(".b@sh.rc"));
console.log(validate("example@test.c0"));
console.log(validate("freecodecamp.org"));
console.log(validate("develop.ment_user@c0D!NG.R.CKS"));
console.log(validate("hello.@wo.rld"));
console.log(validate("hello@world..com"));
console.log(validate("git@commit@push.io"));

console.log(validate("a,b@domain.com"));
console.log(validate("a@domain"));
console.log(validate("a@domain.c"));
console.log(validate("a@.domain.com"));
console.log(validate("a@..domain.com"));
console.log(validate("..a@domain.com"));
console.log(validate("...a@domain.com"));
console.log(validate("abc..def@domain.com"));
console.log(validate("abc@sub.domain.com"));
console.log(validate("@domain.com"));
console.log(validate("abc@sub.domain.com."));