const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['ATX', 'DFW', 'DEN', 'LAX', 'SD']
    },
    arrival: {
        type: Date
    }
}, {
    timestamps: true
});

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American Airlines', 'Soutwest Airlines', 'United Airlines']
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departure: {
        type: Date,
        default: function() {
            const theDate = new Date();
            theDate.setFullYear(theDate.getFullYear()+1);
            return theDate;
        }
    },
    airport: {
        type: String,
        enum: ['ATX', 'DFW', 'DEN', 'LAX', 'SD']
    },
    arrival: {
        type: Date
    },
    destination: [destinationSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Destination', destinationSchema);
module.exports = mongoose.model('Flight', flightSchema);
