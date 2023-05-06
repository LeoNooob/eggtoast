module.exports = app => {
    const mongoose = app.mongoose;
    console.log("aasas")
    const Schema = mongoose.Schema

    const TypeSchema = new Schema({
        name: String
    })

    return mongoose.model("Type", TypeSchema)
}