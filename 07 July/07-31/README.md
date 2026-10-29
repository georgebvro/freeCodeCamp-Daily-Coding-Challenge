# freeCodeCamp Daily Coding Challenge - July 31

## Morse Code

Given a Morse code string, return the decoded message using the following table:

| Code |Letter | Code |Letter |
|:----:|:-----:|:----:|:-----:|
|`.-`  |  `A`  |`-.`  |  `N`  |
|`-...`|  `B`  |`---` |  `O`  |
|`-.-.`|  `C`  |`.--.`|  `P`  |
|`-..` |  `D`  |`--.-`|  `Q`  |
|`.`   |  `E`  |`.-.` |  `R`  |
|`..-.`|  `F`  |`...` |  `S`  |
|`--.` |  `G`  |`-`   |  `T`  |
|`....`|  `H`  |`..-` |  `U`  |
|`..`  |  `I`  |`...-`|  `V`  |
|`.---`|  `J`  |`.--` |  `W`  |
|`-.-` |  `K`  |`-..-`|  `X`  |
|`.-..`|  `L`  |`-.--`|  `Y`  |
|`--`  |  `M`  |`--..`|  `Z`  |

* Letters are separated by a single space
* Words are separated by three spaces

### Tests:

1. `decodeMorse("--..")` should return `"Z"`.
2. `decodeMorse("... --- ...")` should return `"SOS"`.
3. `decodeMorse("..-. .-. . . -.-. --- -.. . -.-. .- -- .--.")` should return `"FREECODECAMP"`.
4. `decodeMorse(".... . .-.. .-.. ---   .-- --- .-. .-.. -..")` should return `"HELLO WORLD"`.
5. `decodeMorse("- .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. . -..   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --.")` should return `"THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG"`.