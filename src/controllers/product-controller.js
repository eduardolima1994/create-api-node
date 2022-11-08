const mongoose = require('mongoose');
const Product = mongoose.model("Product");

exports.post = (req, res, next) => {
    let product = new Product(req.body);
    product.save().then(x => {
        res.status(201).send({ message: 'Produto cadastrado com sucesso!' });
    }).catch(e => {
        res.status(400).send({ message: 'Falha ao cadastrar produto!', data: e });
    });
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