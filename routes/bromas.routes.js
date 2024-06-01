const ControladorBroma = require("../controllers/bromas.controller");

module.exports = (app) => {
    app.get('/api/bromas', ControladorBroma.hallarBromas);
    app.get('/api/bromas/:id', ControladorBroma.hallarUnaBroma);
    app.post('/api/bromas', ControladorBroma.crearNuevaBroma);
    app.put('/api/bromas:id', ControladorBroma.actualizarBroma);
    app.delete('/api/bromas/:id', ControladorBroma.eliminarBroma);
};