const mongoose=require('mongoose')

// useNewUrlParser--This option tells the MongoDB driver to use the new MongoDB connection string parser instead of the legacy parser.

// useUnifiedTopology-This option controls whether to use the new Server Discovery and Monitoring engine, which is recommended for handling server events and monitoring in modern MongoDB deployments.


const connectDatabase=()=>{
    mongoose.connect(process.env.DB_URI,{useNewUrlParser:true,useUnifiedTopology:true
    }).then((data)=>{
            console.log(`mongodb connected with server ${data.connection.host}`);
        });
}
module.exports=connectDatabase