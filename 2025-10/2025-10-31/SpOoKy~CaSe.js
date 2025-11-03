function spookify(boo) {
  const spooky = boo.replace(/[_-]/g, "~").split("");
  let everyOtherLetter = true;

  for (const index in spooky) {
    if (/[a-zA-Z]/.exec(spooky[index])) {

      spooky[index] = everyOtherLetter ? spooky[index].toUpperCase() : spooky[index].toLowerCase();
      everyOtherLetter = !everyOtherLetter;
    }
  }

  return spooky.join("");
}

console.log(spookify("hello_world"));
console.log(spookify("Spooky_Case"));
console.log(spookify("TRICK-or-TREAT"));
console.log(spookify("c_a-n_d-y_-b-o_w_l"));
console.log(spookify("thE_hAUntEd-hOUsE-Is-fUll_Of_ghOsts"));