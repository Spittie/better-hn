re = /https?:\/\/news.ycombinator.com\/item/

if (re.exec(document.URL)) {
  // Color OP
  username = document.querySelectorAll(".subtext > a:nth-child(2)")[0].text

  op = document.querySelectorAll("a[href='user?id=" + username + "']")

  for (var i = 1; i < op.length; i++) {
    op[i].style.color = "#fcfcfc";
    op[i].style.backgroundColor = "#3daee9";
    op[i].style.padding = "1px 2px";
    op[i].style.borderRadius = "5px";
    if (op[i].firstChild) {
      op[i].firstChild.color = "#fcfcfc"
    }
  } 
}