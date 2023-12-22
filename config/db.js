const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CNN)
        console.log('DB connection success!');
    } catch (error) {
        console.log(error);
        throw new Error('DB connection error!');
    }
}

module.exports = {
    dbConnection
}