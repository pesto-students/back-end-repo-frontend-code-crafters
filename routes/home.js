import express from 'express'

const router = express.Router();

router.get("/", async (req, res, next) => {
  console.log(req);
  return res.status(200).json({
    title: "Express Testing",
    message: "The app is working properly!",
  });
});

export default router;