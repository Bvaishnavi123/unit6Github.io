const mongoose = require('mongoose')

const connect = ()=>{
    return mongoose.connect('mongodb+srv://vaishnavi:vaishnavi@cluster0.3njvxok.mongodb.net/nearby?retryWrites=true&w=majority')
}

module.exports = connect