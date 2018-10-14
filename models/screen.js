const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;



var screenSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    seatInfo:{
        A :{
            numberOfSeats:  {
                type: Number,
                required: false
            },
            aisleSeats:  {
                type: [{type:Number}],
                required: false
            }
        },
        B: {
            numberOfSeats:  {
                type: Number,
                required: false
            },
            aisleSeats:  {
                type: [{type:Number}],
                required: false
            }
        },
        C: {
            numberOfSeats:  {
                type: Number,
                required: false
            },
            aisleSeats:  {
                type: [{type:Number}],
                required: false
            }
        },
        D :{
            numberOfSeats:  {
                type: Number,
                required: false
            },
            aisleSeats:  {
                type: [{type:Number}],
                required: false
            }
        }
    },
    available:[{type:Number}]
}, {
    timestamps: true
});

var Screen = mongoose.model('Screen', screenSchema);

module.exports = Screen;