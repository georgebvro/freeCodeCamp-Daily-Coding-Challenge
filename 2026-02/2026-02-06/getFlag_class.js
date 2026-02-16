// Solution using class

function getFlag(code) {
  const countriesArray = [
    ["Albania", "AL", "🇦🇱"],
    ["Andorra", "AD", "🇦🇩"],
    ["Argentina", "AR", "🇦🇷"],
    ["Armenia", "AM", "🇦🇲"],
    ["Australia", "AU", "🇦🇺"],
    ["Austria", "AT", "🇦🇹"],
    ["Azerbaijan", "AZ", "🇦🇿"],
    ["Belgium", "BE", "🇧🇪"],
    ["Benin", "BJ", "🇧🇯"],
    ["Bolivia", "BO", "🇧🇴"],
    ["Bosnia and Herzegovina", "BA", "🇧🇦"],
    ["Brazil", "BR", "🇧🇷"],
    ["Bulgaria", "BG", "🇧🇬"],
    ["Canada", "CA", "🇨🇦"],
    ["Chile", "CL", "🇨🇱"],
    ["China", "CN", "🇨🇳"],
    ["Colombia", "CO", "🇨🇴"],
    ["Croatia", "HR", "🇭🇷"],
    ["Cyprus", "CY", "🇨🇾"],
    ["Czech Republic", "CZ", "🇨🇿"],
    ["Denmark", "DK", "🇩🇰"],
    ["Ecuador", "EC", "🇪🇨"],
    ["Eritrea", "ER", "🇪🇷"],
    ["Estonia", "EE", "🇪🇪"],
    ["Finland", "FI", "🇫🇮"],
    ["France", "FR", "🇫🇷"],
    ["Georgia", "GE", "🇬🇪"],
    ["Germany", "DE", "🇩🇪"],
    ["Great Britain", "GB", "🇬🇧"],
    ["Greece", "GR", "🇬🇷"],
    ["Guinea-Bissau", "GW", "🇬🇼"],
    ["Haiti", "HT", "🇭🇹"],
    ["Hong Kong", "HK", "🇭🇰"],
    ["Hungary", "HU", "🇭🇺"],
    ["Iceland", "IS", "🇮🇸"],
    ["India", "IN", "🇮🇳"],
    ["Iran", "IR", "🇮🇷"],
    ["Ireland", "IE", "🇮🇪"],
    ["Israel", "IL", "🇮🇱"],
    ["Italy", "IT", "🇮🇹"],
    ["Jamaica", "JM", "🇯🇲"],
    ["Japan", "JP", "🇯🇵"],
    ["Kazakhstan", "KZ", "🇰🇿"],
    ["Kenya", "KE", "🇰🇪"],
    ["Kosovo", "XK", "🇽🇰"],
    ["Kyrgyzstan", "KG", "🇰🇬"],
    ["Latvia", "LV", "🇱🇻"],
    ["Lebanon", "LB", "🇱🇧"],
    ["Liechtenstein", "LI", "🇱🇮"],
    ["Lithuania", "LT", "🇱🇹"],
    ["Luxembourg", "LU", "🇱🇺"],
    ["Madagascar", "MG", "🇲🇬"],
    ["Malaysia", "MY", "🇲🇾"],
    ["Malta", "MT", "🇲🇹"],
    ["Mexico", "MX", "🇲🇽"],
    ["Moldova", "MD", "🇲🇩"],
    ["Monaco", "MC", "🇲🇨"],
    ["Mongolia", "MN", "🇲🇳"],
    ["Montenegro", "ME", "🇲🇪"],
    ["Morocco", "MA", "🇲🇦"],
    ["Netherlands", "NL", "🇳🇱"],
    ["New Zealand", "NZ", "🇳🇿"],
    ["Nigeria", "NG", "🇳🇬"],
    ["North Macedonia", "MK", "🇲🇰"],
    ["Norway", "NO", "🇳🇴"],
    ["Pakistan", "PK", "🇵🇰"],
    ["Philippines", "PH", "🇵🇭"],
    ["Poland", "PL", "🇵🇱"],
    ["Portugal", "PT", "🇵🇹"],
    ["Puerto Rico", "PR", "🇵🇷"],
    ["Romania", "RO", "🇷🇴"],
    ["San Marino", "SM", "🇸🇲"],
    ["Saudi Arabia", "SA", "🇸🇦"],
    ["Serbia", "RS", "🇷🇸"],
    ["Singapore", "SG", "🇸🇬"],
    ["Slovakia", "SK", "🇸🇰"],
    ["Slovenia", "SI", "🇸🇮"],
    ["South Africa", "ZA", "🇿🇦"],
    ["South Korea", "KR", "🇰🇷"],
    ["Spain", "ES", "🇪🇸"],
    ["Sweden", "SE", "🇸🇪"],
    ["Switzerland", "CH", "🇨🇭"],
    ["Thailand", "TH", "🇹🇭"],
    ["Trinidad & Tobago", "TT", "🇹🇹"],
    ["Turkey", "TR", "🇹🇷"],
    ["Ukraine", "UA", "🇺🇦"],
    ["United Arab Emirates", "AE", "🇦🇪"],
    ["United States", "US", "🇺🇸"],
    ["Uruguay", "UY", "🇺🇾"],
    ["Uzbekistan", "UZ", "🇺🇿"],
    ["Venezuela", "VE", "🇻🇪"]
  ];

  const countryObjects = countriesArray.map(country => new CountryFlag(country[0], country[1], country[2]));

  return countryObjects
    .find(country => country.code === code)
    .flag;
}

class CountryFlag {
  constructor(name, code, flag) {
    this.name = name;
    this.code = code;
    this.flag = flag;
  }
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getFlag("AL") should return "🇦🇱".
2. getFlag("AD") should return "🇦🇩".
3. getFlag("AR") should return "🇦🇷".
4. getFlag("AM") should return "🇦🇲".
5. getFlag("AU") should return "🇦🇺".
6. getFlag("AT") should return "🇦🇹".
7. getFlag("AZ") should return "🇦🇿".
8. getFlag("BE") should return "🇧🇪".
9. getFlag("BJ") should return "🇧🇯".
10. getFlag("BO") should return "🇧🇴".
11. getFlag("BA") should return "🇧🇦".
12. getFlag("BR") should return "🇧🇷".
13. getFlag("BG") should return "🇧🇬".
14. getFlag("CA") should return "🇨🇦".
15. getFlag("CL") should return "🇨🇱".
16. getFlag("CN") should return "🇨🇳".
17. getFlag("CO") should return "🇨🇴".
18. getFlag("HR") should return "🇭🇷".
19. getFlag("CY") should return "🇨🇾".
20. getFlag("CZ") should return "🇨🇿".
21. getFlag("DK") should return "🇩🇰".
22. getFlag("EC") should return "🇪🇨".
23. getFlag("ER") should return "🇪🇷".
24. getFlag("EE") should return "🇪🇪".
25. getFlag("FI") should return "🇫🇮".
26. getFlag("FR") should return "🇫🇷".
27. getFlag("GE") should return "🇬🇪".
28. getFlag("DE") should return "🇩🇪".
29. getFlag("GB") should return "🇬🇧".
30. getFlag("GR") should return "🇬🇷".
31. getFlag("GW") should return "🇬🇼".
32. getFlag("HT") should return "🇭🇹".
33. getFlag("HK") should return "🇭🇰".
34. getFlag("HU") should return "🇭🇺".
35. getFlag("IS") should return "🇮🇸".
36. getFlag("IN") should return "🇮🇳".
37. getFlag("IR") should return "🇮🇷".
38. getFlag("IE") should return "🇮🇪".
39. getFlag("IL") should return "🇮🇱".
40. getFlag("IT") should return "🇮🇹".
41. getFlag("JM") should return "🇯🇲".
42. getFlag("JP") should return "🇯🇵".
43. getFlag("KZ") should return "🇰🇿".
44. getFlag("KE") should return "🇰🇪".
45. getFlag("XK") should return "🇽🇰".
46. getFlag("KG") should return "🇰🇬".
47. getFlag("LV") should return "🇱🇻".
48. getFlag("LB") should return "🇱🇧".
49. getFlag("LI") should return "🇱🇮".
50. getFlag("LT") should return "🇱🇹".
51. getFlag("LU") should return "🇱🇺".
52. getFlag("MG") should return "🇲🇬".
53. getFlag("MY") should return "🇲🇾".
54. getFlag("MT") should return "🇲🇹".
55. getFlag("MX") should return "🇲🇽".
56. getFlag("MD") should return "🇲🇩".
57. getFlag("MC") should return "🇲🇨".
58. getFlag("MN") should return "🇲🇳".
59. getFlag("ME") should return "🇲🇪".
60. getFlag("MA") should return "🇲🇦".
61. getFlag("NL") should return "🇳🇱".
62. getFlag("NZ") should return "🇳🇿".
63. getFlag("NG") should return "🇳🇬".
64. getFlag("MK") should return "🇲🇰".
65. getFlag("NO") should return "🇳🇴".
66. getFlag("PK") should return "🇵🇰".
67. getFlag("PH") should return "🇵🇭".
68. getFlag("PL") should return "🇵🇱".
69. getFlag("PT") should return "🇵🇹".
70. getFlag("PR") should return "🇵🇷".
71. getFlag("RO") should return "🇷🇴".
72. getFlag("SM") should return "🇸🇲".
73. getFlag("SA") should return "🇸🇦".
74. getFlag("RS") should return "🇷🇸".
75. getFlag("SG") should return "🇸🇬".
76. getFlag("SK") should return "🇸🇰".
77. getFlag("SI") should return "🇸🇮".
78. getFlag("ZA") should return "🇿🇦".
79. getFlag("KR") should return "🇰🇷".
80. getFlag("ES") should return "🇪🇸".
81. getFlag("SE") should return "🇸🇪".
82. getFlag("CH") should return "🇨🇭".
83. getFlag("TH") should return "🇹🇭".
84. getFlag("TT") should return "🇹🇹".
85. getFlag("TR") should return "🇹🇷".
86. getFlag("UA") should return "🇺🇦".
87. getFlag("AE") should return "🇦🇪".
88. getFlag("US") should return "🇺🇸".
89. getFlag("UY") should return "🇺🇾".
90. getFlag("UZ") should return "🇺🇿".
91. getFlag("VE") should return "🇻🇪".
`;

const testsRegex = /(?<number>\d+)\.\s(?<functionCall>.+) should return (?<output>.+?)\.?$/gm;
const testData = [...testsText.matchAll(testsRegex).map(match => match.groups)];

function runTests(testData) {
  console.log("--------------------------");
  console.log("🧪Starting Verification...");
  console.log("--------------------------");

  let failCount = 0;
  
  testData.forEach(test => {
    const functionCallOutput = eval(test.functionCall);
    const testOutput = eval(test.output);

    const comparison = Array.isArray(testOutput)
      ? arraysEqual(functionCallOutput, testOutput)
      : functionCallOutput === testOutput;

    if (comparison) {
      console.log(`${test.number}.✅PASS - Function Call: ${test.functionCall}`);
    }
    else {
      console.log(`${test.number}.❌FAIL - Function Call: ${test.functionCall}\nExpected: ${testOutput}\nGot: ${functionCallOutput}`);
      ++failCount;
    }
  })

  console.log("----------------------------",
    failCount
    ? `\n⚠️WARNING: ${failCount}/${testData.length} tests FAILED.`
    : "\n🎉SUCCESS: All tests PASSED."
  );
}

function arraysEqual(a, b) {
  if (a.length !== b.length)
    return false;

  for (let i = 0; i < a.length; ++i) {
    if (Array.isArray(a[i])) {
      if (Array.isArray(b[i])) {
        if (!arraysEqual(a[i], b[i]))
          return false;
      }
      else 
        return false;
    }

    else if (a[i] !== b[i])
      return false;
  }

  return true;
}

runTests(testData);