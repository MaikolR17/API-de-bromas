const express = require('express');
const app = express();
const port = 8000;

require('./config/mongoose.config');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routes/bromas.routes')(app);

app.listen(port, () => {console.log(`Server is running on port ${port}`);});