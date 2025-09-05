function isValidIPv4(ipv4) {
  const regex = /\D|^$|0\d/;
  let isValid = true;
  const octets = ipv4.split(".");

  if (octets.length !== 4) 
    isValid = false;
  
  else
    octets.forEach(octet => {
      if (regex.test(octet) || octet < 0 || octet > 255)
        isValid = false;
    })
	
  return isValid;
}

console.log(isValidIPv4("192.168.1.1"));
console.log(isValidIPv4("0.0.0.0"));
console.log(isValidIPv4("255.01.50.111"));
console.log(isValidIPv4("255.00.50.111"));
console.log(isValidIPv4("256.101.50.115"));
console.log(isValidIPv4("192.168.101."));
console.log(isValidIPv4("192168145213"));

console.log(isValidIPv4("192.168.a.1"));
console.log(isValidIPv4("192.50b.0.1"));