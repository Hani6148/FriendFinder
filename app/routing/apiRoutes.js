
module.exports=function(app){
friends=require("../data/friends")
app.get("/api/friends",function(req,res){
    res.json(friends)

})

}