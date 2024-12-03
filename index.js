const express = require("express");
app = express();
require("./routes/routes")(app)

app.listen(3000, () => {
  console.log("server is running");
});
