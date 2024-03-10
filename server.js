const express = require("express");
const path = require("path");
const app = express();
const port = 80;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    const data = {
        serverStatus: "running",
        uptime: process.uptime(),
    };
    res.render("index", data);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
