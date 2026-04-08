def decode_qr(qr_code):
    qr = qr_code[:]
    size = len(qr)
    orientation_markers_indices = {
        'bottom_left': [f'{size - 2}0', f'{size - 2}1', f'{size - 1}0', f'{size - 1}1'],
        'top_left': ['00', '01', '10', '11'],
        'top_right': [f'0{size - 2}', f'0{size - 1}', f'1{size - 2}', f'1{size - 1}']
    }
    orientation_markers_index_pairs = []
    data = ""

    for _, corner_indices in orientation_markers_indices.items():
        orientation_markers_index_pairs += corner_indices

    while not correct_orientation(qr, orientation_markers_index_pairs):
        rotated_qr = []

        for j in range(size):
            new_row = ""

            for i in range(size - 1, -1, -1):
                new_row += qr[i][j]

            rotated_qr.append(new_row)

        qr = rotated_qr[:]

    for i in range(size):
        for j in range(len(qr[i])):
            if f"{i}{j}" not in orientation_markers_index_pairs:
                data += qr[i][j]

    return data

def correct_orientation(qr, orientation_markers_index_pairs):
    for index_pair in orientation_markers_index_pairs:
        if qr[int(index_pair[0])][int(index_pair[1])] != "1":
            return False

    return True

# --- TEST SUITE ---

tests_text = r'''
1. decode_qr(["110011", "110011", "000000", "000000", "110000", "110001"]) should return "000000000000000000000001".
2. decode_qr(["100011", "000011", "000000", "000000", "110011", "110011"]) should return "000000000000000000000001".
3. decode_qr(["110011", "111111", "010000", "110000", "110011", "110100"]) should return "001101000011000000110100".
4. decode_qr(["011011", "101011", "101000", "100010", "110011", "111011"]) should return "010001000100010101010110".
5. decode_qr(["111100", "110001", "100011", "001101", "110011", "110011"]) should return "010000100100100101001110".
'''

import re

tests_regex = re.compile(r"(?P<number>\d+)\.\s(?P<function_call>.+) should return (?P<output>.+?)\.?$", re.MULTILINE)
test_data = [item.groupdict() for item in re.finditer(tests_regex, tests_text)]

def run_tests(test_data):
    print("--------------------------")
    print("🧪 Starting Verification...")
    print("--------------------------")

    fail_count = 0

    for test in test_data:
        function_call_output = eval(test['function_call'])
        test_output = eval(test['output'])
        
        if function_call_output == test_output:
            print(f"{test['number']}.✅ PASS - Function Call:\n{test['function_call']}")
        else:
            print(f"{test['number']}.❌ FAIL - Function Call:\n{test['function_call']}\nExpected:\n{test_output}\nGot:\n{function_call_output}")
            fail_count += 1

    print("----------------------------",
        f"\n⚠️ WARNING: {fail_count}/{len(test_data)} tests FAILED." if fail_count
        else "\n🎉 SUCCESS: All tests PASSED."
    )

run_tests(test_data)