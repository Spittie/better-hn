var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");
pageMod.PageMod({
  include: "*.ycombinator.com",
  contentScriptFile: [data.url("highlight-op.js"),
                      data.url("addbest.js")],
  contentStyleFile: [data.url("style.css")]
});