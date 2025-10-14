function decode(s) {
  const re = /\([^\(\)]*\)/g;

  while(re.test(s)) {
    s = s.replace(re, replacer);
  }

  return s;
}

function replacer(match) {
  return match.slice(1, match.length - 1).split('').reverse().join('');
}

console.log(decode("(f(b(dc)e)a)"));
console.log(decode("((is?)(a(t d)h)e(n y( uo)r)aC)"));
console.log(decode("f(Ce(re))o((e(aC)m)d)p"));
console.log(decode("a()b"));