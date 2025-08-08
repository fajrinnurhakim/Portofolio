const express = require('express');
const cors = require('cors');
const PORT = 8000;
const router = require('./src/routes/index.js');
const errorHandlder = require('./src/middleware/errorHandler.js');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);
app.use(errorHandlder);

app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({
        success: false,
        message: 'File terlalu besar. Maksimal 5MB',
      });
    }

    if (error.code === 'LIMIT_FILE_COUNT') {
      return res.status(400).json({
        success: false,
        message: 'Terlalu banyak file diupload',
      });
    }
  } else if (error) {
    return res.status(400).json({
      success: false,
      message: error.message || 'Terjadi kesalahan saat upload file',
    });
  }

  next();
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
