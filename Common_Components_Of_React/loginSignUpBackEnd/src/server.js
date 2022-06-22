const app = require('./index')
const connect = require('./config/db')

app.listen('5000', async()=>{
    try {
        connect();
        console.log('Listening on port 5000')
    } catch (error) {
        console.log(error)
    }
})

