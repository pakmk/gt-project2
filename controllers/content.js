router.post("/", (req, res) => {
    db.Creatives.bio.create(req.body)
      .then((result) => {
        res.json({
          error: false,
          data: result,
          message: "New bio created",
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: true,
          data: null,
          message: "No bio created",
        });
      });
  });