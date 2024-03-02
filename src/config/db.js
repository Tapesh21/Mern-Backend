const mongoose = require("mongoose")

const mondbUrl = "mongodb+srv://tanmaydule78:bdYbHJTNfXZO5Es3@cluster0.dzkjf13.mongodb.net/?retryWrites=true&w=majority"

const connectDb=()=>{
    return mongoose.connect(mondbUrl);
}

module.exports={connectDb}