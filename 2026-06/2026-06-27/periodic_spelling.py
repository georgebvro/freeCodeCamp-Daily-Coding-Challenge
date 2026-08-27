def get_periodic_spelling(word):
    ELEMENT_SYMBOLS = ["H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I","Xe","Cs","Ba","La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb","Bi","Po","At","Rn","Fr","Ra","Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No","Lr","Rf","Db","Sg","Bh","Hs","Mt","Ds","Rg","Cn","Nh","Fl","Mc","Lv","Ts","Og"]
    spelling = []

    def backtrack():
        if "".join(spelling).lower() == word:
            return True

        for i in range(len(ELEMENT_SYMBOLS)):
            spelling.append(ELEMENT_SYMBOLS[i])
            spelling_regex = re.compile("^" + "".join(spelling), re.IGNORECASE)

            if re.match(spelling_regex, word):
                if backtrack():
                    return True

            spelling.pop()

        return False

    backtrack()

    return spelling

# --- TEST SUITE ---

tests_text = r'''
1. get_periodic_spelling("neon") should return ["Ne", "O", "N"].
2. get_periodic_spelling("rational") should return ["Ra", "Ti", "O", "N", "Al"].
3. get_periodic_spelling("yarn") should return ["Y", "Ar", "N"].
4. get_periodic_spelling("carbon") should return ["C", "Ar", "B", "O", "N"].
5. get_periodic_spelling("noisy") should return ["N", "O", "I", "S", "Y"].
6. get_periodic_spelling("bicycles") should return ["B", "I", "C", "Y", "Cl", "Es"].
7. get_periodic_spelling("optics") should return ["O", "P", "Ti", "C", "S"].
8. get_periodic_spelling("value") should return [].
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