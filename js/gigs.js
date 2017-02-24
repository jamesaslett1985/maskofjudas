function saveData(){

$.post("gigsjson.php", {"test": "value"})
    .done(function(data){
        console.log(data);
    })
    .fail(function(){
        console.log("err");
    })
}