const mongoose = require('mongoose');


const connectDatabase=()=>{
    mongoose.connect(process.env.DB,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }).then(con=>{
        console.log(`MongDB Database connected with HOST :${con.connection.host}`);
    })
}

module.exports=connectDatabase
