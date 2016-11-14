var qs=require('querystring');
var http=require('http');
var cont='';
function send(body){
  var text='';
  http.request({host:'127.0.0.1',port:8081,url:'/',method:'POST'},function(res){
    res.setEncoding('utf8');

    res.on('data',function(data){
      cont+=data;
    });
    res.on('end',function(){
      console.log('request complete!');
      console.log(res.method);
      console.log(cont);
    });

  }).end(qs.stringify({name:body}));



}
  process.stdout.write('The file witch you request::');
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data',function(data){
      send(data);
  });
