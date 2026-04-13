// routes/upload.js
const router = require("express").Router();
const multer = require("multer");
const cloudinary = require("../config/cloudinary");

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/", upload.single("image"), async (req, res) => {
  const result = await cloudinary.uploader.upload_stream(
    { folder: "products" },
    (error, result) => {
      if (error) return res.status(500).send(error);
      res.json({ imageUrl: result.secure_url });
    }
  );

  result.end(req.file.buffer);
});

module.exports = router;