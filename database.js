let mongoose = require('mongoose')

let mongooseConnectionConfig = { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }

let connectionString = "";

console.log(process.env.NODE_ENV, "env")

if (process.env.NODE_ENV === "production") {
    connectionString = process.env.DB_URL;
} else {
    connectionString = "mongodb://localhost/project6";
}



console.log(connectionString)

mongoose.connect(connectionString, mongooseConnectionConfig)