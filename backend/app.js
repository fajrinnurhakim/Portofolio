require("dotenv").config();
const express = require("express");
const app = express();
const port = 8000;
const router = require("./routes");

app.use(express.static("uploads"));
app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(` app listening on port 8000 ${port}`);
});
