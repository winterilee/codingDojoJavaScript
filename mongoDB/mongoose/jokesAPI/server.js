const express = require("express");
const app = express();
const port = 8000;

app.use(express.json(), express.urlencoded({extended: true}));

require("./config/mongoose");
require("./routes/jokesRoutes")(app);

app.listen(port, ()=>console.log("Server is up and running on port " + port));