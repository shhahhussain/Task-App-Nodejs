const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
}).then(()=>{console.log("database is connected")}).catch((error) => {
    console.error("Error connecting to database:", error);
});