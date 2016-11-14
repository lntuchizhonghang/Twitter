var http=require('http');
var qs=require('querystring');
var fs=require('fs');
var fstl='';
var server=http.createServer(function(req,res){
  fstl=res;
  res.writeHead(200,{'Content-Type':'text/html'});
  var body='';
  req.on('data',function (data){
    body+=data;
  });
  req.on('end',function(){

    fs.readdir(process.cwd(),function(err,files){
      console.log('\ngot name :'+typeof files[0]);
      for(var i=0;i<files.length;i++){
        if(files[i]==qs.parse(body).name.replace('\r\n','')){
          fs.readFile(__dirname+'/'+qs.parse(body).name.replace('\r\n',''),'utf8',function(err,file){
            res.end(file);
          });
      }else{
        res.end('There is no such file!');
      }
     }
    });
  });

});
server.listen(8081,function(){
  console.log('server is listening at 8081 port!');
});
