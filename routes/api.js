import express from 'express'

const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({
    user: "Pranav",
  });
});

export default router;