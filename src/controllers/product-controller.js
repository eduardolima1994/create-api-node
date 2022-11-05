exports.post = (req, res, next) => {
    res.status(201).json(req.body);
};

exports.put = (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        id: id,
        item: req.body,
    });
};

exports.delete = (req, res, next) => {
    res.status(200).json(req.body);
};