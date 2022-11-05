const express = require("express");
const router = express.Router();

router.post("/", (req, res, next) => {
    res.status(201).json(req.body);
});

router.put("/:id", (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        id: id,
        item: req.body,
    });
});

router.delete("/", (req, res, next) => {
    res.status(200).json(req.body);
});

module.exports = router;