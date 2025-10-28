def extract_attributes(element):
    import re

    attributes = re.findall("\s(?P<attributeName>[^\t\n\f \/>\"'=]+)=[\"'](?P<attributeValue>[^\"']+)[\"']", element)

    return list(map(lambda attribute: f"{attribute[0]}, {attribute[1]}", attributes))

print(extract_attributes('<span class="red"></span>'))
print(extract_attributes('<meta charset="UTF-8" />'))
print(extract_attributes("<p>Lorem ipsum dolor sit amet</p>"))
print(extract_attributes('<input name="email" type="email" required="true" />'))
print(extract_attributes('<button id="submit" class="btn btn-primary">Submit</button>'))