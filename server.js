var app = require("express")();
var http = require("http").createServer(app);
let path = require("path");

app.get("/", (req, res) => {
   res.sendFile(
      "D:zApps/native apps/npmTester/npmTester2/electron-quick-start/index.html"
   );
});

http.listen(3000, () => {
   console.log("listening on *:3000");
});
