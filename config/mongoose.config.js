const moongoose = require('mongoose');

moongoose.connect('mongodb://localhost:27017/APIbroma', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Conectado a la base de datos"))
    .catch(err => console.error("No se pudo conectar a la base de datos", err));