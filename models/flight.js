const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['ATX', 'DFW', 'DEN', 'LAX', 'SD']
    },
    arrival: {
        type: Date,
        required: true
    }
}, {
    timestamps: true
});

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American Airlines', 'Southwest Airlines', 'United Airlines']
    },
    flightNo: {
        type: Number,
        required: true,
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
    destination: [destinationSchema],

    arrival: {
        type: Date
    },
    tickets: [{
        type: Schema.Types.ObjectId,
        ref: 'Ticket'
    }]
        

    
    
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);
