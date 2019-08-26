$.ajax({
    url:"https://randomuser.me/api/",
    data: 'json',
    success: function(data){
        var name = document.getElementById("name");
        var image = document.getElementById("image");
        var email = document.getElementById("email");
        name.append(document.createTextNode(data.results[0].name.title + ' '+ data.results[0].name.first +' '+ data.results[0].name.last));
        image.setAttribute('src', data.results[0].picture.medium);
        email.append(document.createTextNode(data.results[0].email));
        console.log(data);
    },

    statusCode: {
        404: function(){
            console.log("there was an error");
        }
    }
    
    

});