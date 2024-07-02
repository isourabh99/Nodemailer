const mongoose = require("mongoose")
exports.connectionDB = async () => {
try {
 const connect = await mongoose.connect(process.env.MONGO_URL)
 console.log("database connected");
} catch (error) {
    console.log(error.message);
}
}