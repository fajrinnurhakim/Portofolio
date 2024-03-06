const express = require("express");
const cors = require("cors");
const PORT = 8000;
const router = require("./src/routes/index.js");
const errorHandlder = require("./src/middleware/errorHandler.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);
app.use(errorHandlder);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
