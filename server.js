let app = require('./app.js')
let server = app.listen(process.env.PORT || 9001)

server.on('listening', () => console.log("Server is listening..."))
server.on('error', error => console.error("OH NO I'M BROKEN", error))

module.exports = server