const connect = require('./cofig/db.js')
const app = require('./index')

app.listen(5000,async(req,res)=>{
    try {
        await connect();
        console.log('listening on port 5000')
    } catch (error) {
        console.log(error)
    }
})