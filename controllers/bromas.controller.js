const Broma = require('../models/bromas.model');

module.exports.hallarBromas = (req, res) => {
    Broma.find()
        .then(TodasLasbromas => res.json({ bromas: TodasLasbromas }))
        .catch(err => res.status(400).json({ message: "Algo salió mal", error: err }));
};

module.exports.hallarUnaBroma = (req, res) => {
    Broma.findOne({ _id: req.params.id })
        .then(unaBroma => res.json({ broma: unaBroma}))
        .catch((err) =>
            res.status(400).json({ message: "Algo salió mal", error: err })
        );
};

module.exports.crearNuevaBroma = (req, res) => {
    Broma.create(req.body)
        .then(nuevaBroma => res.json({ broma: nuevaBroma }))
        .catch((err) => res.status(400).json({ message: "Algo salió mal", error: err }));
};

module.exports.actualizarBroma = (req, res) => {
    Broma.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(actualizarBroma => res.json({ broma: actualizarBroma }))
        .catch((err) => res.status(400).json({ message: "Algo salió mal", error: err }));
};

module.exports.eliminarBroma = (req, res) => {
    Broma.deleteOne({ _id: req.params.id })
        .then((eliminarBroma) => res.json({ broma: eliminarBroma }))
        .catch((err) => res.status(400).json({ message: "Algo salió mal", error: err }));
};