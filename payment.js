// routes/payment.js
const router = require("express").Router();

router.post("/", (req, res) => {
  const { amount } = req.body;

  if (amount > 0) {
    res.json({ status: "success" });
  } else {
    res.status(400).json({ status: "failed" });
  }
});

module.exports = router;