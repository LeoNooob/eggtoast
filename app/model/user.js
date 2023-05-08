module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema

    const UserSchema = new Schema({
        username: { type: String },
        password: { type: String },
        roles: { type: Array },
        phone: { type: Number },
    })

    return mongoose.model("User", UserSchema)
}