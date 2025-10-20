def classification(temp):
    
    if temp >= 30000:
        stellar_classification = "O"

    elif temp >= 10000:
        stellar_classification = "B"

    elif temp >= 7500:
        stellar_classification = "A"

    elif temp >= 6000:
        stellar_classification = "F"

    elif temp >= 5200:
        stellar_classification = "G"

    elif temp >= 3700:
        stellar_classification = "K"

    elif temp >= 0:
        stellar_classification = "M"

    return stellar_classification

print(classification(5778))
print(classification(2400))
print(classification(9999))
print(classification(3700))
print(classification(3699))
print(classification(210000))
print(classification(6000))
print(classification(11432))