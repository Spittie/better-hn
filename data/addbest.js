re = /https?:\/\/news.ycombinator.com\/(\D+)/
url = ""
if (re.exec(document.URL)) {
  url = re.exec(document.URL)[1]
}

if (!(url == "best")) {
  document.getElementsByClassName("pagetop")[0].innerHTML += " | <a href='best'>best</a>" 
}
if (!(url == "active")) {
  document.getElementsByClassName("pagetop")[0].innerHTML += " | <a href='active'>active</a>" 
}
if (!(url == "bestcomments")) {
  document.getElementsByClassName("pagetop")[0].innerHTML += " | <a href='bestcomments'>best comments</a>" 
}