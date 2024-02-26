require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const router = require("./routes");
const cors = require("cors");

app.use(
    cors({
        origin: "*",
    })
);

app.use(express.static("uploads"));
app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(` app listening on port ${port}`);
});
