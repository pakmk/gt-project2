const express = require("express");
const router = express.Router();
const db = require("../models");

router.post("/", (req, res) => {
  res.json({
    message: "Post route",
  });
});

// router.post("/", (req, res) => {
//   db.newUser.create(req.body)
//     .then((result) => {
//       res.json({
//         error: false,
//         data: result,
//         message: "New user",
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({
//         error: true,
//         data: null,
//         message: "Unable to create new user.",
//       });
//     });
// });

router.put("/:id", (req, res) => {
  res.json({
    message: "Put route",
  });
});

router.delete("/:id", (req, res) => {
  res.json({
    message: "Delete route",
  });
});

module.exports = router;
