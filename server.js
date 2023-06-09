const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// setting the view engine to ejs
app.set("view engine", "ejs");

const items = [];

app.get("/", (req, res) => {
  const today = new Date();
  const currentDay = today.getDay();
  let day = "";

  switch (currentDay) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      console.log("Error: current day is equal to: " + currentDay);
  }

  res.render("list", { day, items });
});

app.post("/", (req, res) => {
  items.push(req.body.item);
  res.redirect("/");
});

// setting the port to 3000
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`http://localhost:${port}`));
