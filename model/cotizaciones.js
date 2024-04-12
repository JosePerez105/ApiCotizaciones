import { Schema, model} from "mongoose";

const CotizacionesSchema = new Schema({
    idcotizacion : {
        type : String,
        required : true,
        trim : true,
        unique : true
    },
    fechacotizacion : {
        type : String,
        required : true
    },
    totalcotizacion: {
        type: Number,
        required : true
    }

},
{timestamps: true})

export default model("Cotizaciones", CotizacionesSchema)