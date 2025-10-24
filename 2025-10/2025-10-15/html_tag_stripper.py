def strip_tags(html):
    import re

    return re.sub("<[^>]+>", "", html)

print(strip_tags('<a href="#">Click here</a>'))
print(strip_tags('<p class="center">Hello <b>World</b>!</p>'))
print(strip_tags('<img src="cat.jpg" alt="Cat">'))
print(strip_tags('<main id="main"><section class="section">section</section><section class="section">section</section></main>'))