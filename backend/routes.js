const router = require("express").Router();
const api = require("./api");

router.get("/api", (req, res) => {
    console.log(req.body);
    res.json(api);
});

module.exports = router;