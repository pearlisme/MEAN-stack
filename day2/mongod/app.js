var mongodb = require('mongodb')
var mongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/appDB';
mongoClient.connect(url,function(err,db){
    if(err){
        console.log("unable to connect to the database",err);
    }else{
        console.log("Connection established to the database",url);

        var collections = db.db('appDB').collection('users');
        var user1= {name:'system','id':'100'}
        collections.insert(user1,function(err,res){
            console.log('successfully inserted ',res)
        });
        db.close();
    }
})