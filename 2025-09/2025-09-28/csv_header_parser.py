def get_headings(csv):

    return list(map(lambda heading: heading.strip(), csv.split(",")))

print(get_headings("name,age,city"))
print(get_headings("first name,last name,phone"))
print(get_headings("username , email , signup date "))