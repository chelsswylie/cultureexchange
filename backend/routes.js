const router = require("express").Router();
const pool = require("../connection");

router.get('tables', (req, res) => {
    pool.query('SELECT * FROM CultureExchange').then((data) => {
        res.json(data.rows);
        res.status(200);
    })
});

module.exports = router;