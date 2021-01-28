//npm i express

const express = require("express");
const robot = require("kbm-robot");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors());

app.get("/space", (req, res) => {
   robot.startJar();

   robot
      .press("SPACE")

      .sleep(100)

      .release("SPACE")
      .sleep(100)

      .go()
      .then(robot.stopJar);

   res.json({ message: "done" });
});
app.get("/tab", (req, res) => {
   robot.startJar();

   robot
      .press("ctrl")
      .press("tab")
      .sleep(100)
      .release("tab")
      .release("ctrl")
      .sleep(100)

      .go()
      .then(robot.stopJar);

   res.json({ message: "done" });
});

app.listen(PORT, () => {
   console.log("listening on http://localhost:4000");
});
