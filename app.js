var express = require ('express');
var app =express();
app.get('/',function(req,res){
	
res.send(' you made a Get API call');
});

app.post('/',function(req,res){
	
res.send(' you made a post API call');
});

app.put('/',function(req,res){
	
res.send(' you made a put API call');
});

app.delete('/',function(req,res){
	
res.send(' you made a delete API call');
});
app.listen(3000,function(){
	
console.log(' server started at port 3000!')
});