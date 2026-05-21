import re
from functools import reduce

IS_LETTER_REGEX = re.compile("[A-Z]", re.IGNORECASE)
STEP_MULTIPLE = 25

def decode(message):
    DAILY_CHALLENGES = [
        { 'dc_number': "1", 'dc_title': "Vowel Balance" },
        { 'dc_number': "2", 'dc_title': "Base Check" },
        { 'dc_number': "3", 'dc_title': "Fibonacci Sequence" },
        { 'dc_number': "4", 'dc_title': "S  P  A  C  E  J  A  M" },
        { 'dc_number': "5", 'dc_title': "Jbelmud Text" },
        { 'dc_number': "6", 'dc_title': "Anagram Checker" },
        { 'dc_number': "7", 'dc_title': "Targeted Sum" },
        { 'dc_number': "8", 'dc_title': "Factorializer" },
        { 'dc_number': "9", 'dc_title': "Sum of Squares" },
        { 'dc_number': "10", 'dc_title': "3 Strikes" },
        { 'dc_number': "11", 'dc_title': "Mile Pace" },
        { 'dc_number': "12", 'dc_title': "Message Decoder" },
        { 'dc_number': "13", 'dc_title': "Unnatural Prime" },
        { 'dc_number': "14", 'dc_title': "Character Battle" },
        { 'dc_number': "15", 'dc_title': "camelCase" },
        { 'dc_number': "16", 'dc_title': "Reverse Parenthesis" },
        { 'dc_number': "17", 'dc_title': "Unorder of Operations" },
        { 'dc_number': "18", 'dc_title': "Second Best" },
        { 'dc_number': "19", 'dc_title': "Candlelight" },
        { 'dc_number': "20", 'dc_title': "Array Duplicates" },
        { 'dc_number': "21", 'dc_title': "Hex Generator" },
        { 'dc_number': "22", 'dc_title': "Tribonacci Sequence" },
        { 'dc_number': "23", 'dc_title': "RGB to Hex" },
        { 'dc_number': "24", 'dc_title': "Pangram" },
        { 'dc_number': "25", 'dc_title': "Vowel Repeater" },
        { 'dc_number': "26", 'dc_title': "IPv4 Validator" },
        { 'dc_number': "27", 'dc_title': "Matrix Rotate" },
        { 'dc_number': "28", 'dc_title': "Roman Numeral Parser" },
        { 'dc_number': "29", 'dc_title': "Acronym Builder" },
        { 'dc_number': "30", 'dc_title': "Unique Characters" },
        { 'dc_number': "31", 'dc_title': "Array Diff" },
        { 'dc_number': "32", 'dc_title': "Reverse Sentence" },
        { 'dc_number': "33", 'dc_title': "Screen Time" },
        { 'dc_number': "34", 'dc_title': "Missing Numbers" },
        { 'dc_number': "35", 'dc_title': "Word Frequency" },
        { 'dc_number': "36", 'dc_title': "Thermostat Adjuster" },
        { 'dc_number': "37", 'dc_title': "Sentence Capitalizer" },
        { 'dc_number': "38", 'dc_title': "Slug Generator" },
        { 'dc_number': "39", 'dc_title': "Fill The Tank" },
        { 'dc_number': "40", 'dc_title': "Photo Storage" },
        { 'dc_number': "41", 'dc_title': "File Storage" },
        { 'dc_number': "42", 'dc_title': "Video Storage" },
        { 'dc_number': "43", 'dc_title': "Digits vs Letters" },
        { 'dc_number': "44", 'dc_title': "String Mirror" },
        { 'dc_number': "45", 'dc_title': "Perfect Square" },
        { 'dc_number': "46", 'dc_title': "2nd Largest" },
        { 'dc_number': "47", 'dc_title': "Caught Speeding" },
        { 'dc_number': "48", 'dc_title': "Spam Detector" },
        { 'dc_number': "49", 'dc_title': "CSV Header Parser" },
        { 'dc_number': "50", 'dc_title': "Longest Word" },
        { 'dc_number': "51", 'dc_title': "Phone Number Formatter" },
        { 'dc_number': "52", 'dc_title': "Binary to Decimal" },
        { 'dc_number': "53", 'dc_title': "Decimal to Binary" },
        { 'dc_number': "54", 'dc_title': "P@ssw0rd Str3ngth!" },
        { 'dc_number': "55", 'dc_title': "Space Week Day 1: Stellar Classific..." },
        { 'dc_number': "56", 'dc_title': "Space Week Day 2: Exoplanet Search" },
        { 'dc_number': "57", 'dc_title': "Space Week Day 3: Phone Home" },
        { 'dc_number': "58", 'dc_title': "Space Week Day 4: Landing Spot" },
        { 'dc_number': "59", 'dc_title': "Space Week Day 5: Goldilocks Zone" },
        { 'dc_number': "60", 'dc_title': "Space Week Day 6: Moon Phase" },
        { 'dc_number': "61", 'dc_title': "Space Week Day 7: Launch Fuel" },
        { 'dc_number': "62", 'dc_title': "Hex to Decimal" },
        { 'dc_number': "63", 'dc_title': "Battle of Words" },
        { 'dc_number': "64", 'dc_title': "24 to 12" },
        { 'dc_number': "65", 'dc_title': "String Count" },
        { 'dc_number': "66", 'dc_title': "HTML Tag Stripper" },
        { 'dc_number': "67", 'dc_title': "Email Validator" },
        { 'dc_number': "68", 'dc_title': "Credit Card Masker" },
        { 'dc_number': "69", 'dc_title': "Missing Socks" },
        { 'dc_number': "70", 'dc_title': "HTML Attribute Extractor" },
        { 'dc_number': "71", 'dc_title': "Tip Calculator" },
        { 'dc_number': "72", 'dc_title': "Thermostat Adjuster 2" },
        { 'dc_number': "73", 'dc_title': "Speak Wisely, You Must" },
        { 'dc_number': "74", 'dc_title': "Favorite Songs" },
        { 'dc_number': "75", 'dc_title': "Hidden Treasure" },
        { 'dc_number': "76", 'dc_title': "Complementary DNA" },
        { 'dc_number': "77", 'dc_title': "Duration Formatter" },
        { 'dc_number': "78", 'dc_title': "Integer Sequence" },
        { 'dc_number': "79", 'dc_title': "Navigator" },
        { 'dc_number': "80", 'dc_title': "Email Sorter" },
        { 'dc_number': "81", 'dc_title': "Nth Prime" },
        { 'dc_number': "82", 'dc_title': "SpOoKy~CaSe" },
        { 'dc_number': "83", 'dc_title': "Signature Validation" },
        { 'dc_number': "84", 'dc_title': "Infected" },
        { 'dc_number': "85", 'dc_title': "Word Counter" },
        { 'dc_number': "86", 'dc_title': "Image Search" },
        { 'dc_number': "87", 'dc_title': "Matrix Builder" },
        { 'dc_number': "88", 'dc_title': "Weekday Finder" },
        { 'dc_number': "89", 'dc_title': "Counting Cards" },
        { 'dc_number': "90", 'dc_title': "Character Limit" },
        { 'dc_number': "91", 'dc_title': "Word Search" },
        { 'dc_number': "92", 'dc_title': "Extension Extractor" },
        { 'dc_number': "93", 'dc_title': "Vowels and Consonants" },
        { 'dc_number': "94", 'dc_title': "Email Signature Generator" },
        { 'dc_number': "95", 'dc_title': "Array Shift" },
        { 'dc_number': "96", 'dc_title': "Is It the Weekend?" },
        { 'dc_number': "97", 'dc_title': "GCD" },
        { 'dc_number': "98", 'dc_title': "Rectangle Count" },
        { 'dc_number': "99", 'dc_title': "Fingerprint Test" },
        { 'dc_number': "100", 'dc_title': "100 characters" },
        { 'dc_number': "101", 'dc_title': "Markdown Heading Converter" },
        { 'dc_number': "102", 'dc_title': "Longest Word" },
        { 'dc_number': "103", 'dc_title': "LCM" },
        { 'dc_number': "104", 'dc_title': "Recipe Scaler" },
        { 'dc_number': "105", 'dc_title': "Character Count" },
        { 'dc_number': "106", 'dc_title': "Message Validator" },
        { 'dc_number': "107", 'dc_title': "FizzBuzz" },
        { 'dc_number': "108", 'dc_title': "BuzzFizz" },
        { 'dc_number': "109", 'dc_title': "What's My Age Again?" },
        { 'dc_number': "110", 'dc_title': "Word Guesser" },
        { 'dc_number': "111", 'dc_title': "Ball Trajectory" },
        { 'dc_number': "112", 'dc_title': "AI Detector" },
        { 'dc_number': "113", 'dc_title': "Miles to Kilometers" },
        { 'dc_number': "114", 'dc_title': "Camel to Snake" },
        { 'dc_number': "115", 'dc_title': "Markdown Ordered List Item Converte..." },
        { 'dc_number': "116", 'dc_title': "Permutation Count" },
        { 'dc_number': "117", 'dc_title': "Symmetric Difference" },
        { 'dc_number': "118", 'dc_title': "Date Formatter" },
        { 'dc_number': "119", 'dc_title': "String Compression" },
        { 'dc_number': "120", 'dc_title': "Pounds to Kilograms" },
        { 'dc_number': "121", 'dc_title': "Most Frequent" },
        { 'dc_number': "122", 'dc_title': "Markdown Bold Parser" },
        { 'dc_number': "123", 'dc_title': "Roman Numeral Builder" },
        { 'dc_number': "124", 'dc_title': "Inventory Update" },
        { 'dc_number': "125", 'dc_title': "Game of Life" },
        { 'dc_number': "126", 'dc_title': "Capitalize It" },
        { 'dc_number': "127", 'dc_title': "Speed Check" },
        { 'dc_number': "128", 'dc_title': "Consonant Count" },
        { 'dc_number': "129", 'dc_title': "Markdown Blockquote Parser" },
        { 'dc_number': "130", 'dc_title': "Checkerboard" },
        { 'dc_number': "131", 'dc_title': "Pairwise" },
        { 'dc_number': "132", 'dc_title': "Purge Most Frequent" },
        { 'dc_number': "133", 'dc_title': "Daylight Hours" },
        { 'dc_number': "134", 'dc_title': "Traveling Shopper" },
        { 'dc_number': "135", 'dc_title': "Re: Fwd: Fw: Count" },
        { 'dc_number': "136", 'dc_title': "Markdown Image Parser" },
        { 'dc_number': "137", 'dc_title': "Snowflake Generator" },
        { 'dc_number': "138", 'dc_title': "Sum of Divisors" },
        { 'dc_number': "139", 'dc_title': "Rock, Paper, Scissors" },
        { 'dc_number': "140", 'dc_title': "SCREAMING_SNAKE_CASE" },
        { 'dc_number': "141", 'dc_title': "Takeoff Fuel" },
        { 'dc_number': "142", 'dc_title': "Sum the String" },
        { 'dc_number': "143", 'dc_title': "Markdown Italic Parser" },
        { 'dc_number': "144", 'dc_title': "Resolution Streak" },
        { 'dc_number': "145", 'dc_title': "Nth Fibonacci Number" },
        { 'dc_number': "146", 'dc_title': "Left-Handed Seat at the Table" },
        { 'dc_number': "147", 'dc_title': "Leap Year Calculator" },
        { 'dc_number': "148", 'dc_title': "Tire Pressure" },
        { 'dc_number': "149", 'dc_title': "vOwElcAsE" },
        { 'dc_number': "150", 'dc_title': "Markdown Unordered List Parser" },
        { 'dc_number': "151", 'dc_title': "Sorted Array?" },
        { 'dc_number': "152", 'dc_title': "Circular Prime" },
        { 'dc_number': "153", 'dc_title': "Tic-Tac-Toe" },
        { 'dc_number': "154", 'dc_title': "Par for the Hole" },
        { 'dc_number': "155", 'dc_title': "Plant the Crop" },
        { 'dc_number': "156", 'dc_title': "Odd or Even?" },
        { 'dc_number': "157", 'dc_title': "Markdown Link Parser" },
        { 'dc_number': "158", 'dc_title': "Array Swap" },
        { 'dc_number': "159", 'dc_title': "Integer Hypotenuse" },
        { 'dc_number': "160", 'dc_title': "Knight Moves" },
        { 'dc_number': "161", 'dc_title': "Free Shipping" },
        { 'dc_number': "162", 'dc_title': "Energy Consumption" },
        { 'dc_number': "163", 'dc_title': "Consonant Case" },
        { 'dc_number': "164", 'dc_title': "Markdown Inline Code Parser" },
        { 'dc_number': "165", 'dc_title': "Class Average" },
        { 'dc_number': "166", 'dc_title': "Hex Validator" },
        { 'dc_number': "167", 'dc_title': "Bingo! Letter" },
        { 'dc_number': "168", 'dc_title': "Scaled Image" },
        { 'dc_number': "169", 'dc_title': "FizzBuzz Mini" },
        { 'dc_number': "170", 'dc_title': "Odd or Even Day" },
        { 'dc_number': "171", 'dc_title': "Flatten the Array" },
        { 'dc_number': "172", 'dc_title': "Letters-Numbers" },
        { 'dc_number': "173", 'dc_title': "Valid Pawn Moves" },
        { 'dc_number': "174", 'dc_title': "Zodiac Finder" },
        { 'dc_number': "175", 'dc_title': "Digital Detox" },
        { 'dc_number': "176", 'dc_title': "Groundhog Day" },
        { 'dc_number': "177", 'dc_title': "String Mirror" },
        { 'dc_number': "178", 'dc_title': "Truncate the Text" },
        { 'dc_number': "179", 'dc_title': "Pocket Change" },
        { 'dc_number': "180", 'dc_title': "2026 Winter Games Day 1: Opening Da..." },
        { 'dc_number': "181", 'dc_title': "2026 Winter Games Day 2: Snowboardi..." },
        { 'dc_number': "182", 'dc_title': "2026 Winter Games Day 3: Biathlon" },
        { 'dc_number': "183", 'dc_title': "2026 Winter Games Day 4: Ski Jumpin..." },
        { 'dc_number': "184", 'dc_title': "2026 Winter Games Day 5: Cross-Coun..." },
        { 'dc_number': "185", 'dc_title': "2026 Winter Games Day 6: Figure Ska..." },
        { 'dc_number': "186", 'dc_title': "2026 Winter Games Day 7: Speed Skat..." },
        { 'dc_number': "187", 'dc_title': "2026 Winter Games Day 8: Luge" },
        { 'dc_number': "188", 'dc_title': "2026 Winter Games Day 9: Skeleton" },
        { 'dc_number': "189", 'dc_title': "2026 Winter Games Day 10: Alpine Sk..." },
        { 'dc_number': "190", 'dc_title': "2026 Winter Games Day 11: Ice Hocke..." },
        { 'dc_number': "191", 'dc_title': "2026 Winter Games Day 12: Bobsled" },
        { 'dc_number': "192", 'dc_title': "2026 Winter Games Day 13: Nordic Co..." },
        { 'dc_number': "193", 'dc_title': "2026 Winter Games Day 14: Ski Mount..." },
        { 'dc_number': "194", 'dc_title': "2026 Winter Games Day 15: Freestyle..." },
        { 'dc_number': "195", 'dc_title': "2026 Winter Games Day 16: Curling" },
        { 'dc_number': "196", 'dc_title': "2026 Winter Games Day 17: Closing D..." },
        { 'dc_number': "197", 'dc_title': "Blood Type Compatibility" },
        { 'dc_number': "198", 'dc_title': "Business Day Count" },
        { 'dc_number': "199", 'dc_title': "Sequential Difference" },
        { 'dc_number': "200", 'dc_title': "Letter and Number Count" },
        { 'dc_number': "201", 'dc_title': "Matrix Shift" },
        { 'dc_number': "202", 'dc_title': "Add Punctuation" },
        { 'dc_number': "203", 'dc_title': "Flattened" },
        { 'dc_number': "204", 'dc_title': "Sum the Letters" },
        { 'dc_number': "205", 'dc_title': "Perfect Cube Count" },
        { 'dc_number': "206", 'dc_title': "Playing Card Values" },
        { 'dc_number': "207", 'dc_title': "Smallest Gap" },
        { 'dc_number': "208", 'dc_title': "Trail Traversal" },
        { 'dc_number': "209", 'dc_title': "Element Size" },
        { 'dc_number': "210", 'dc_title': "HSL Validator" },
        { 'dc_number': "211", 'dc_title': "Array Sum" },
        { 'dc_number': "212", 'dc_title': "Array Insertion" },
        { 'dc_number': "213", 'dc_title': "Word Length Converter" },
        { 'dc_number': "214", 'dc_title': "Domino Chain Validator" },
        { 'dc_number': "215", 'dc_title': "Parking Fee Calculator" },
        { 'dc_number': "216", 'dc_title': "Pi Day" },
        { 'dc_number': "217", 'dc_title': "Captured Chess Pieces" },
        { 'dc_number': "218", 'dc_title': "Evenly Divisible" },
        { 'dc_number': "219", 'dc_title': "Anniversary Milestones" },
        { 'dc_number': "220", 'dc_title': "Largest Number" },
        { 'dc_number': "221", 'dc_title': "Inverted Matrix" },
        { 'dc_number': "222", 'dc_title': "Equinox Shadows" },
        { 'dc_number': "223", 'dc_title': "QR Decoder" },
        { 'dc_number': "224", 'dc_title': "Coffee Roast Detector" },
        { 'dc_number': "225", 'dc_title': "No Consecutive Repeats" },
        { 'dc_number': "226", 'dc_title': "Passing Exam Count" },
        { 'dc_number': "227", 'dc_title': "Cooldown Time" },
        { 'dc_number': "228", 'dc_title': "Movie Night" },
        { 'dc_number': "229", 'dc_title': "Truncate the Text 2" },
        { 'dc_number': "230", 'dc_title': "Pascal's Triangle Row" },
        { 'dc_number': "231", 'dc_title': "ISBN-10 Validator" },
        { 'dc_number': "232", 'dc_title': "Due Date" },
        { 'dc_number': "233", 'dc_title': "Wake-Up Alarm" },
        { 'dc_number': "234", 'dc_title': "Prank Number" },
        { 'dc_number': "235", 'dc_title': "Capitalized Fibonacci" },
        { 'dc_number': "236", 'dc_title': "Browser History" },
        { 'dc_number': "237", 'dc_title': "Equation Validation" },
        { 'dc_number': "238", 'dc_title': "Digit Rotation Escape" },
        { 'dc_number': "239", 'dc_title': "What Day Is It?" },
        { 'dc_number': "240", 'dc_title': "Palindrome Characters" },
        { 'dc_number': "241", 'dc_title': "FizzBuzz Validator" },
        { 'dc_number': "242", 'dc_title': "Next Bingo Number" },
        { 'dc_number': "243", 'dc_title': "Rook Attack" },
        { 'dc_number': "244", 'dc_title': "Rook and Bishop Attack" },
        { 'dc_number': "245", 'dc_title': "Spiral Matrix" },
        { 'dc_number': "246", 'dc_title': "Name Initials" },
        { 'dc_number': "247", 'dc_title': "Last Letter" },
        { 'dc_number': "248", 'dc_title': "Sorted Array Swap" },
        { 'dc_number': "249", 'dc_title': "String Math" },
        { 'dc_number': "250", 'dc_title': "Hidden Key" },
        { 'dc_number': "251", 'dc_title': "Array Sum Finder" },
        { 'dc_number': "252", 'dc_title': "Unique Stair Climber" },
        { 'dc_number': "253", 'dc_title': "Acronym Finder" },
        { 'dc_number': "254", 'dc_title': "Odd Words" },
        { 'dc_number': "255", 'dc_title': "Earth Day Cleanup Crew" },
        { 'dc_number': "256", 'dc_title': "Closest Time Direction" },
        { 'dc_number': "257", 'dc_title': "Word Compressor" },
        { 'dc_number': "258", 'dc_title': "Word Decompressor" },
        { 'dc_number': "259", 'dc_title': "FizzBuzz Explosion" },
        { 'dc_number': "260", 'dc_title': "Word Score" },
        { 'dc_number': "261", 'dc_title': "Number Words" },
        { 'dc_number': "262", 'dc_title': "URL Query Parser" },
        { 'dc_number': "263", 'dc_title': "Binary Crossword" }
    ]
    CODE_OF_UPPERCASE_A = ord("A")
    NUMBER_OF_LETTERS_IN_ALPHABET = ord("Z") - ord("A") + 1

    encryption_key = reduce(build_encryption_key, DAILY_CHALLENGES, "")

    decoded_message = ""
    encryption_key_cursor = 0

    for character in message:
        if re.match(IS_LETTER_REGEX, character):
            corresponding_key_letter = encryption_key[encryption_key_cursor % len(encryption_key)]

            corresponding_key_number = ord(corresponding_key_letter) - CODE_OF_UPPERCASE_A + 1

            shifted_letter_code = CODE_OF_UPPERCASE_A + (ord(character) - CODE_OF_UPPERCASE_A - corresponding_key_number) % NUMBER_OF_LETTERS_IN_ALPHABET

            shifted_letter = chr(shifted_letter_code)

            decoded_message += shifted_letter

            encryption_key_cursor += 1
        else:
            decoded_message += character

    return decoded_message

def build_encryption_key(key, daily_challenge):
    if not int(daily_challenge['dc_number']) % STEP_MULTIPLE:
        for character in daily_challenge['dc_title']:
            if re.match(IS_LETTER_REGEX, character):
                return key + character.upper()
    else:
        return key

# --- TEST SUITE ---

tests_text = r'''
1. decode("YAVJYNXE") should return "CONGRATS".
2. decode("YALLUT PQUMJP") should return "CODING LEGEND".
3. decode("UAC DYR EISAKYM") should return "YOU ARE AWESOME".
4. decode("GQMS NBMZU") should return "KEEP GOING".
5. decode("W IQQURV UG I ZDMDTRV IVW JQDHY TMHSA QB") should return "A WINNER IS A DREAMER WHO NEVER GIVES UP".
'''

import re

tests_regex = re.compile(r"(?P<number>\d+)\.\s(?P<function_call>.+) should return (?P<output>.+?)\.?$", re.MULTILINE)
test_data = [item.groupdict() for item in re.finditer(tests_regex, tests_text)]

def run_tests(test_data):
    print("——————————————————————————",
        "\n🧪 Starting Verification...",
        "\n——————————————————————————")

    fail_count = 0

    for test in test_data:
        function_call_output = eval(test['function_call'])
        test_output = eval(test['output'])
        
        if function_call_output == test_output:
            print(f"{test['number']}.✅ PASS - Function Call:\n{test['function_call']}")
        else:
            print(f"{test['number']}.❌ FAIL - Function Call:\n{test['function_call']}\nExpected:\n{test_output}\nGot:\n{function_call_output}")
            fail_count += 1

        print("————————————————————————————")

    print(
        f"⚠️ WARNING: {fail_count}/{len(test_data)} tests FAILED." if fail_count
        else "🎉 SUCCESS: All tests PASSED."
    )

run_tests(test_data)