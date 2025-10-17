function areAnagrams(str1, str2) {
  const regex1 = "[^" + [...new Set(str1.toLowerCase().match(/[^\s]/g))].join("") + "]";
  const regex2 = "[^" + [...new Set(str2.toLowerCase().match(/[^\s]/g))].join("") + "]";
  
  return str1.length === str2.length
    && !new RegExp(regex1, "i").exec(str2.replace(" ", ""))
    && !new RegExp(regex2, "i").exec(str1.replace(" ", ""));
}

console.log(areAnagrams("listen", "silent"));
console.log(areAnagrams("School master", "The classroom"));
console.log(areAnagrams("A gentleman", "Elegant man"));
console.log(areAnagrams("Hello", "World"));
console.log(areAnagrams("apple", "banana"));
console.log(areAnagrams("cat", "dog"));

console.log(areAnagrams("abc", "abb"));
console.log(areAnagrams("abc", "abbc"));