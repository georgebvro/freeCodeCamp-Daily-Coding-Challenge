import re

def generate_signature(name, title, company):
    if re.match("^[A-I]", name, re.IGNORECASE):
        prefix = ">>"

    if re.match("^[J-R]", name, re.IGNORECASE):
        prefix = "--"

    if re.match("^[S-Z]", name, re.IGNORECASE):
        prefix = "::"

    return f"{prefix}{name}, {title} at {company}"

print(generate_signature("Quinn Waverly", "Founder and CEO", "TechCo"))
print(generate_signature("Alice Reed", "Engineer", "TechCo"))
print(generate_signature("Tina Vaughn", "Developer", "example.com"))
print(generate_signature("B. B.", "Product Tester", "AcmeCorp"))
print(generate_signature("windstorm", "Cloud Architect", "Atmospheronics"))