const moongoose = require('mongoose');

const BromaSchema = new moongoose.Schema({
    setup: {
        type: String,
        required: [true, "setup is required"],
        minlength: [10, "setup must be at least 10 characters long"]
    },
    punchline: {
        type: String,
        required: [true, "punchline is required"],
        minlength: [3, "punchline must be at least 3 characters long"]
    }
}, { timestamps: true });

const Broma = moongoose.model('Broma', BromaSchema);

module.exports = Broma;