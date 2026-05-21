function decode(message) {
  const DAILY_CHALLENGES = [
    { dcNumber: "1", dcTitle: "Vowel Balance" },
    { dcNumber: "2", dcTitle: "Base Check" },
    { dcNumber: "3", dcTitle: "Fibonacci Sequence" },
    { dcNumber: "4", dcTitle: "S  P  A  C  E  J  A  M" },
    { dcNumber: "5", dcTitle: "Jbelmud Text" },
    { dcNumber: "6", dcTitle: "Anagram Checker" },
    { dcNumber: "7", dcTitle: "Targeted Sum" },
    { dcNumber: "8", dcTitle: "Factorializer" },
    { dcNumber: "9", dcTitle: "Sum of Squares" },
    { dcNumber: "10", dcTitle: "3 Strikes" },
    { dcNumber: "11", dcTitle: "Mile Pace" },
    { dcNumber: "12", dcTitle: "Message Decoder" },
    { dcNumber: "13", dcTitle: "Unnatural Prime" },
    { dcNumber: "14", dcTitle: "Character Battle" },
    { dcNumber: "15", dcTitle: "camelCase" },
    { dcNumber: "16", dcTitle: "Reverse Parenthesis" },
    { dcNumber: "17", dcTitle: "Unorder of Operations" },
    { dcNumber: "18", dcTitle: "Second Best" },
    { dcNumber: "19", dcTitle: "Candlelight" },
    { dcNumber: "20", dcTitle: "Array Duplicates" },
    { dcNumber: "21", dcTitle: "Hex Generator" },
    { dcNumber: "22", dcTitle: "Tribonacci Sequence" },
    { dcNumber: "23", dcTitle: "RGB to Hex" },
    { dcNumber: "24", dcTitle: "Pangram" },
    { dcNumber: "25", dcTitle: "Vowel Repeater" },
    { dcNumber: "26", dcTitle: "IPv4 Validator" },
    { dcNumber: "27", dcTitle: "Matrix Rotate" },
    { dcNumber: "28", dcTitle: "Roman Numeral Parser" },
    { dcNumber: "29", dcTitle: "Acronym Builder" },
    { dcNumber: "30", dcTitle: "Unique Characters" },
    { dcNumber: "31", dcTitle: "Array Diff" },
    { dcNumber: "32", dcTitle: "Reverse Sentence" },
    { dcNumber: "33", dcTitle: "Screen Time" },
    { dcNumber: "34", dcTitle: "Missing Numbers" },
    { dcNumber: "35", dcTitle: "Word Frequency" },
    { dcNumber: "36", dcTitle: "Thermostat Adjuster" },
    { dcNumber: "37", dcTitle: "Sentence Capitalizer" },
    { dcNumber: "38", dcTitle: "Slug Generator" },
    { dcNumber: "39", dcTitle: "Fill The Tank" },
    { dcNumber: "40", dcTitle: "Photo Storage" },
    { dcNumber: "41", dcTitle: "File Storage" },
    { dcNumber: "42", dcTitle: "Video Storage" },
    { dcNumber: "43", dcTitle: "Digits vs Letters" },
    { dcNumber: "44", dcTitle: "String Mirror" },
    { dcNumber: "45", dcTitle: "Perfect Square" },
    { dcNumber: "46", dcTitle: "2nd Largest" },
    { dcNumber: "47", dcTitle: "Caught Speeding" },
    { dcNumber: "48", dcTitle: "Spam Detector" },
    { dcNumber: "49", dcTitle: "CSV Header Parser" },
    { dcNumber: "50", dcTitle: "Longest Word" },
    { dcNumber: "51", dcTitle: "Phone Number Formatter" },
    { dcNumber: "52", dcTitle: "Binary to Decimal" },
    { dcNumber: "53", dcTitle: "Decimal to Binary" },
    { dcNumber: "54", dcTitle: "P@ssw0rd Str3ngth!" },
    { dcNumber: "55", dcTitle: "Space Week Day 1: Stellar Classific..." },
    { dcNumber: "56", dcTitle: "Space Week Day 2: Exoplanet Search" },
    { dcNumber: "57", dcTitle: "Space Week Day 3: Phone Home" },
    { dcNumber: "58", dcTitle: "Space Week Day 4: Landing Spot" },
    { dcNumber: "59", dcTitle: "Space Week Day 5: Goldilocks Zone" },
    { dcNumber: "60", dcTitle: "Space Week Day 6: Moon Phase" },
    { dcNumber: "61", dcTitle: "Space Week Day 7: Launch Fuel" },
    { dcNumber: "62", dcTitle: "Hex to Decimal" },
    { dcNumber: "63", dcTitle: "Battle of Words" },
    { dcNumber: "64", dcTitle: "24 to 12" },
    { dcNumber: "65", dcTitle: "String Count" },
    { dcNumber: "66", dcTitle: "HTML Tag Stripper" },
    { dcNumber: "67", dcTitle: "Email Validator" },
    { dcNumber: "68", dcTitle: "Credit Card Masker" },
    { dcNumber: "69", dcTitle: "Missing Socks" },
    { dcNumber: "70", dcTitle: "HTML Attribute Extractor" },
    { dcNumber: "71", dcTitle: "Tip Calculator" },
    { dcNumber: "72", dcTitle: "Thermostat Adjuster 2" },
    { dcNumber: "73", dcTitle: "Speak Wisely, You Must" },
    { dcNumber: "74", dcTitle: "Favorite Songs" },
    { dcNumber: "75", dcTitle: "Hidden Treasure" },
    { dcNumber: "76", dcTitle: "Complementary DNA" },
    { dcNumber: "77", dcTitle: "Duration Formatter" },
    { dcNumber: "78", dcTitle: "Integer Sequence" },
    { dcNumber: "79", dcTitle: "Navigator" },
    { dcNumber: "80", dcTitle: "Email Sorter" },
    { dcNumber: "81", dcTitle: "Nth Prime" },
    { dcNumber: "82", dcTitle: "SpOoKy~CaSe" },
    { dcNumber: "83", dcTitle: "Signature Validation" },
    { dcNumber: "84", dcTitle: "Infected" },
    { dcNumber: "85", dcTitle: "Word Counter" },
    { dcNumber: "86", dcTitle: "Image Search" },
    { dcNumber: "87", dcTitle: "Matrix Builder" },
    { dcNumber: "88", dcTitle: "Weekday Finder" },
    { dcNumber: "89", dcTitle: "Counting Cards" },
    { dcNumber: "90", dcTitle: "Character Limit" },
    { dcNumber: "91", dcTitle: "Word Search" },
    { dcNumber: "92", dcTitle: "Extension Extractor" },
    { dcNumber: "93", dcTitle: "Vowels and Consonants" },
    { dcNumber: "94", dcTitle: "Email Signature Generator" },
    { dcNumber: "95", dcTitle: "Array Shift" },
    { dcNumber: "96", dcTitle: "Is It the Weekend?" },
    { dcNumber: "97", dcTitle: "GCD" },
    { dcNumber: "98", dcTitle: "Rectangle Count" },
    { dcNumber: "99", dcTitle: "Fingerprint Test" },
    { dcNumber: "100", dcTitle: "100 Characters" },
    { dcNumber: "101", dcTitle: "Markdown Heading Converter" },
    { dcNumber: "102", dcTitle: "Longest Word" },
    { dcNumber: "103", dcTitle: "LCM" },
    { dcNumber: "104", dcTitle: "Recipe Scaler" },
    { dcNumber: "105", dcTitle: "Character Count" },
    { dcNumber: "106", dcTitle: "Message Validator" },
    { dcNumber: "107", dcTitle: "FizzBuzz" },
    { dcNumber: "108", dcTitle: "BuzzFizz" },
    { dcNumber: "109", dcTitle: "What's My Age Again?" },
    { dcNumber: "110", dcTitle: "Word Guesser" },
    { dcNumber: "111", dcTitle: "Ball Trajectory" },
    { dcNumber: "112", dcTitle: "AI Detector" },
    { dcNumber: "113", dcTitle: "Miles to Kilometers" },
    { dcNumber: "114", dcTitle: "Camel to Snake" },
    { dcNumber: "115", dcTitle: "Markdown Ordered List Item Converte..." },
    { dcNumber: "116", dcTitle: "Permutation Count" },
    { dcNumber: "117", dcTitle: "Symmetric Difference" },
    { dcNumber: "118", dcTitle: "Date Formatter" },
    { dcNumber: "119", dcTitle: "String Compression" },
    { dcNumber: "120", dcTitle: "Pounds to Kilograms" },
    { dcNumber: "121", dcTitle: "Most Frequent" },
    { dcNumber: "122", dcTitle: "Markdown Bold Parser" },
    { dcNumber: "123", dcTitle: "Roman Numeral Builder" },
    { dcNumber: "124", dcTitle: "Inventory Update" },
    { dcNumber: "125", dcTitle: "Game of Life" },
    { dcNumber: "126", dcTitle: "Capitalize It" },
    { dcNumber: "127", dcTitle: "Speed Check" },
    { dcNumber: "128", dcTitle: "Consonant Count" },
    { dcNumber: "129", dcTitle: "Markdown Blockquote Parser" },
    { dcNumber: "130", dcTitle: "Checkerboard" },
    { dcNumber: "131", dcTitle: "Pairwise" },
    { dcNumber: "132", dcTitle: "Purge Most Frequent" },
    { dcNumber: "133", dcTitle: "Daylight Hours" },
    { dcNumber: "134", dcTitle: "Traveling Shopper" },
    { dcNumber: "135", dcTitle: "Re: Fwd: Fw: Count" },
    { dcNumber: "136", dcTitle: "Markdown Image Parser" },
    { dcNumber: "137", dcTitle: "Snowflake Generator" },
    { dcNumber: "138", dcTitle: "Sum of Divisors" },
    { dcNumber: "139", dcTitle: "Rock, Paper, Scissors" },
    { dcNumber: "140", dcTitle: "SCREAMING_SNAKE_CASE" },
    { dcNumber: "141", dcTitle: "Takeoff Fuel" },
    { dcNumber: "142", dcTitle: "Sum the String" },
    { dcNumber: "143", dcTitle: "Markdown Italic Parser" },
    { dcNumber: "144", dcTitle: "Resolution Streak" },
    { dcNumber: "145", dcTitle: "Nth Fibonacci Number" },
    { dcNumber: "146", dcTitle: "Left-Handed Seat at the Table" },
    { dcNumber: "147", dcTitle: "Leap Year Calculator" },
    { dcNumber: "148", dcTitle: "Tire Pressure" },
    { dcNumber: "149", dcTitle: "vOwElcAsE" },
    { dcNumber: "150", dcTitle: "Markdown Unordered List Parser" },
    { dcNumber: "151", dcTitle: "Sorted Array?" },
    { dcNumber: "152", dcTitle: "Circular Prime" },
    { dcNumber: "153", dcTitle: "Tic-Tac-Toe" },
    { dcNumber: "154", dcTitle: "Par for the Hole" },
    { dcNumber: "155", dcTitle: "Plant the Crop" },
    { dcNumber: "156", dcTitle: "Odd or Even?" },
    { dcNumber: "157", dcTitle: "Markdown Link Parser" },
    { dcNumber: "158", dcTitle: "Array Swap" },
    { dcNumber: "159", dcTitle: "Integer Hypotenuse" },
    { dcNumber: "160", dcTitle: "Knight Moves" },
    { dcNumber: "161", dcTitle: "Free Shipping" },
    { dcNumber: "162", dcTitle: "Energy Consumption" },
    { dcNumber: "163", dcTitle: "Consonant Case" },
    { dcNumber: "164", dcTitle: "Markdown Inline Code Parser" },
    { dcNumber: "165", dcTitle: "Class Average" },
    { dcNumber: "166", dcTitle: "Hex Validator" },
    { dcNumber: "167", dcTitle: "Bingo! Letter" },
    { dcNumber: "168", dcTitle: "Scaled Image" },
    { dcNumber: "169", dcTitle: "FizzBuzz Mini" },
    { dcNumber: "170", dcTitle: "Odd or Even Day" },
    { dcNumber: "171", dcTitle: "Flatten the Array" },
    { dcNumber: "172", dcTitle: "Letters-Numbers" },
    { dcNumber: "173", dcTitle: "Valid Pawn Moves" },
    { dcNumber: "174", dcTitle: "Zodiac Finder" },
    { dcNumber: "175", dcTitle: "Digital Detox" },
    { dcNumber: "176", dcTitle: "Groundhog Day" },
    { dcNumber: "177", dcTitle: "String Mirror" },
    { dcNumber: "178", dcTitle: "Truncate the Text" },
    { dcNumber: "179", dcTitle: "Pocket Change" },
    { dcNumber: "180", dcTitle: "2026 Winter Games Day 1: Opening Da..." },
    { dcNumber: "181", dcTitle: "2026 Winter Games Day 2: Snowboardi..." },
    { dcNumber: "182", dcTitle: "2026 Winter Games Day 3: Biathlon" },
    { dcNumber: "183", dcTitle: "2026 Winter Games Day 4: Ski Jumpin..." },
    { dcNumber: "184", dcTitle: "2026 Winter Games Day 5: Cross-Coun..." },
    { dcNumber: "185", dcTitle: "2026 Winter Games Day 6: Figure Ska..." },
    { dcNumber: "186", dcTitle: "2026 Winter Games Day 7: Speed Skat..." },
    { dcNumber: "187", dcTitle: "2026 Winter Games Day 8: Luge" },
    { dcNumber: "188", dcTitle: "2026 Winter Games Day 9: Skeleton" },
    { dcNumber: "189", dcTitle: "2026 Winter Games Day 10: Alpine Sk..." },
    { dcNumber: "190", dcTitle: "2026 Winter Games Day 11: Ice Hocke..." },
    { dcNumber: "191", dcTitle: "2026 Winter Games Day 12: Bobsled" },
    { dcNumber: "192", dcTitle: "2026 Winter Games Day 13: Nordic Co..." },
    { dcNumber: "193", dcTitle: "2026 Winter Games Day 14: Ski Mount..." },
    { dcNumber: "194", dcTitle: "2026 Winter Games Day 15: Freestyle..." },
    { dcNumber: "195", dcTitle: "2026 Winter Games Day 16: Curling" },
    { dcNumber: "196", dcTitle: "2026 Winter Games Day 17: Closing D..." },
    { dcNumber: "197", dcTitle: "Blood Type Compatibility" },
    { dcNumber: "198", dcTitle: "Business Day Count" },
    { dcNumber: "199", dcTitle: "Sequential Difference" },
    { dcNumber: "200", dcTitle: "Letter and Number Count" },
    { dcNumber: "201", dcTitle: "Matrix Shift" },
    { dcNumber: "202", dcTitle: "Add Punctuation" },
    { dcNumber: "203", dcTitle: "Flattened" },
    { dcNumber: "204", dcTitle: "Sum the Letters" },
    { dcNumber: "205", dcTitle: "Perfect Cube Count" },
    { dcNumber: "206", dcTitle: "Playing Card Values" },
    { dcNumber: "207", dcTitle: "Smallest Gap" },
    { dcNumber: "208", dcTitle: "Trail Traversal" },
    { dcNumber: "209", dcTitle: "Element Size" },
    { dcNumber: "210", dcTitle: "HSL Validator" },
    { dcNumber: "211", dcTitle: "Array Sum" },
    { dcNumber: "212", dcTitle: "Array Insertion" },
    { dcNumber: "213", dcTitle: "Word Length Converter" },
    { dcNumber: "214", dcTitle: "Domino Chain Validator" },
    { dcNumber: "215", dcTitle: "Parking Fee Calculator" },
    { dcNumber: "216", dcTitle: "Pi Day" },
    { dcNumber: "217", dcTitle: "Captured Chess Pieces" },
    { dcNumber: "218", dcTitle: "Evenly Divisible" },
    { dcNumber: "219", dcTitle: "Anniversary Milestones" },
    { dcNumber: "220", dcTitle: "Largest Number" },
    { dcNumber: "221", dcTitle: "Inverted Matrix" },
    { dcNumber: "222", dcTitle: "Equinox Shadows" },
    { dcNumber: "223", dcTitle: "QR Decoder" },
    { dcNumber: "224", dcTitle: "Coffee Roast Detector" },
    { dcNumber: "225", dcTitle: "No Consecutive Repeats" },
    { dcNumber: "226", dcTitle: "Passing Exam Count" },
    { dcNumber: "227", dcTitle: "Cooldown Time" },
    { dcNumber: "228", dcTitle: "Movie Night" },
    { dcNumber: "229", dcTitle: "Truncate the Text 2" },
    { dcNumber: "230", dcTitle: "Pascal's Triangle Row" },
    { dcNumber: "231", dcTitle: "ISBN-10 Validator" },
    { dcNumber: "232", dcTitle: "Due Date" },
    { dcNumber: "233", dcTitle: "Wake-Up Alarm" },
    { dcNumber: "234", dcTitle: "Prank Number" },
    { dcNumber: "235", dcTitle: "Capitalized Fibonacci" },
    { dcNumber: "236", dcTitle: "Browser History" },
    { dcNumber: "237", dcTitle: "Equation Validation" },
    { dcNumber: "238", dcTitle: "Digit Rotation Escape" },
    { dcNumber: "239", dcTitle: "What Day Is It?" },
    { dcNumber: "240", dcTitle: "Palindrome Characters" },
    { dcNumber: "241", dcTitle: "FizzBuzz Validator" },
    { dcNumber: "242", dcTitle: "Next Bingo Number" },
    { dcNumber: "243", dcTitle: "Rook Attack" },
    { dcNumber: "244", dcTitle: "Rook and Bishop Attack" },
    { dcNumber: "245", dcTitle: "Spiral Matrix" },
    { dcNumber: "246", dcTitle: "Name Initials" },
    { dcNumber: "247", dcTitle: "Last Letter" },
    { dcNumber: "248", dcTitle: "Sorted Array Swap" },
    { dcNumber: "249", dcTitle: "String Math" },
    { dcNumber: "250", dcTitle: "Hidden Key" },
    { dcNumber: "251", dcTitle: "Array Sum Finder" },
    { dcNumber: "252", dcTitle: "Unique Stair Climber" },
    { dcNumber: "253", dcTitle: "Acronym Finder" },
    { dcNumber: "254", dcTitle: "Odd Words" },
    { dcNumber: "255", dcTitle: "Earth Day Cleanup Crew" },
    { dcNumber: "256", dcTitle: "Closest Time Direction" },
    { dcNumber: "257", dcTitle: "Word Compressor" },
    { dcNumber: "258", dcTitle: "Word Decompressor" },
    { dcNumber: "259", dcTitle: "FizzBuzz Explosion" },
    { dcNumber: "260", dcTitle: "Word Score" },
    { dcNumber: "261", dcTitle: "Number Words" },
    { dcNumber: "262", dcTitle: "URL Query Parser" },
    { dcNumber: "263", dcTitle: "Binary Crossword" }
];
  const STEP_MULTIPLE = 25;
  const IS_LETTER_REGEX = /[A-Z]/i;
  const CODE_OF_UPPERCASE_A = "A".charCodeAt(0);
  const NUMBER_OF_LETTERS_IN_ALPHABET = "Z".charCodeAt(0) - "A".charCodeAt(0) + 1;

  const encryptionKey = DAILY_CHALLENGES.reduce((key, dailyChallenge) => {
    if (!(dailyChallenge.dcNumber % STEP_MULTIPLE)) {
      for (const character of dailyChallenge.dcTitle) {
        if (IS_LETTER_REGEX.test(character)) {
          return key += character.toUpperCase();
        }
      }
    } else {
      return key;
    }
  }, "");

  let encryptionKeyCursor = 0;

  return message
    .split("")
    .map(character => {
      if (IS_LETTER_REGEX.test(character)) {
        const correspondingKeyLetter = encryptionKey[encryptionKeyCursor++ % encryptionKey.length];

        const correspondingKeyNumber = correspondingKeyLetter.charCodeAt(0) - CODE_OF_UPPERCASE_A + 1;

        const shiftedLetterCode = CODE_OF_UPPERCASE_A + (character.charCodeAt(0) - CODE_OF_UPPERCASE_A - correspondingKeyNumber + NUMBER_OF_LETTERS_IN_ALPHABET) % NUMBER_OF_LETTERS_IN_ALPHABET;

        const shiftedLetter = String.fromCharCode(shiftedLetterCode);

        return shiftedLetter;
      } else {
        return character;
      }
    })
    .join("");
}

// --- TEST SUITE ---

const testsText = String.raw`
1. decode("YAVJYNXE") should return "CONGRATS".
2. decode("YALLUT PQUMJP") should return "CODING LEGEND".
3. decode("UAC DYR EISAKYM") should return "YOU ARE AWESOME".
4. decode("GQMS NBMZU") should return "KEEP GOING".
5. decode("W IQQURV UG I ZDMDTRV IVW JQDHY TMHSA QB") should return "A WINNER IS A DREAMER WHO NEVER GIVES UP".
`;

const testsRegex = /(?<number>\d+)\.\s(?<functionCall>.+) should return (?<output>.+?)\.?$/gm;
const testData = [...testsText.matchAll(testsRegex).map(match => match.groups)];

function runTests(testData) {
  console.log("——————————————————————————",
            "\n🧪Starting Verification...",
            "\n——————————————————————————");

  let failCount = 0;
  
  testData.forEach(test => {
    const functionCallOutput = eval(test.functionCall);
    const testOutput = eval(test.output);

    const comparison = Array.isArray(testOutput)
      ? arraysEqual(functionCallOutput, testOutput)
      : functionCallOutput === testOutput;

    if (comparison) {
      console.log(`${test.number}.✅PASS - Function Call: ${test.functionCall}`);
    } else {
      console.log(`${test.number}.❌FAIL - Function Call: ${test.functionCall}\nExpected: ${testOutput}\nGot: ${functionCallOutput}`);
      ++failCount;
    }
    console.log("————————————————————————————");
  })

  console.log(failCount
    ? `⚠️WARNING: ${failCount}/${testData.length} tests FAILED.`
    : "🎉SUCCESS: All tests PASSED."
  );
}

function arraysEqual(a, b) {
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (Array.isArray(a[i])) {
      if (Array.isArray(b[i])) {
        if (!arraysEqual(a[i], b[i])) {
          return false;
        }
      } else {
        return false;
      }
    } else if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
}

runTests(testData);