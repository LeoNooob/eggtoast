module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema

    const UserSchema = new Schema({
        username: String,
        password: String,
        roles: Array,
        phone: Number,
    })

    return mongoose.model("User", UserSchema)
}