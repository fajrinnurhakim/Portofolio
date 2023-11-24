const errorHandler = (err, req, res, next) => {
    console.log(err);
    if (err.name === "ErrorNotFound") {
        return res.status(404).json({ message: "ErrorNotFound" });
    } else {
        return res.status(500).json({ message: "Internal Service Error" });
    }
};

module.exports = errorHandler;
