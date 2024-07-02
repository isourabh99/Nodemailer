const mongoose = require("mongoose")
exports.connectionDB = async () => {
try {
 const connect = await mongoose.connect(process.env.MONGO_URL)
 console.log(`Nodemailer_emailSubsSys Database connected to ${mongoose.connection.host}`);
} catch (error) {
    console.log(error.message);
}
}