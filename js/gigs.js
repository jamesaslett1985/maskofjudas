function saveData(){

$.ajax({
    type: "POST",
    url: "gigsjson.php",
    contentType:"application/json",  
    data:   
            {  
                "gig":"BRIGHTON ELECTRIC 1ST FEBRUARY 2017 7:30PM"
            },
            {  
                "gig":"BRIGHTON ELECTRIC 2ND FEBRUARY 2017 7:30PM"
            },
            {  
                "gig":"BRIGHTON ELECTRIC 3RD FEBRUARY 2017 7:30PM"
            },
            {  
                "gig":"BRIGHTON ELECTRIC 4TH FEBRUARY 2017 7:30PM"
            },
            {  
                "gig":"BRIGHTON ELECTRIC 5TH FEBRUARY 2017 7:30PM"
            },
            {  
                "gig":"BRIGHTON ELECTRIC 6TH FEBRUARY 2017 7:30PM"
            }
        
})
    .done(function(data){
        console.log(data);
    })
    .fail(function(){
        console.log("err");
    })
}