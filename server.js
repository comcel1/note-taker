const express = require("express");
const app = express();
const path = require("path");
const htmlRoutes = require("./routes/htmlRoutes/index");
const apiRoutes = require("./routes/apiRoutes/index");

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
