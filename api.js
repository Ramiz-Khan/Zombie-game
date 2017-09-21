console.log("inside js 2")

$(document).ready(function(){

var queryURL = "https://api.unsplash.com/collections/142563/photos/?client_id=8282b5778d15130d8b4252e3f590c0d5bf52f33c545e6467bdd3ba7efbce1b83&query=outer+space+stars";
$.ajax({
	url : queryURL,
	method: "GET"
	})
.done(function(response) {

	var imgURL = (response.results[0].urls.full);

		console.log(response.results[0].urls.full);
		$("body").css("background-image", "url("+imgURL+")");

		});


});

                              function go_get(){
                               var base_url = 'http://www.youtube.com/embed?listType=search&list=';
                               var search_field = document.getElementById('yourtextfield').value;
                               var target_url = base_url + search_field;
                               var ifr = document.getElementById('youriframe');
                               ifr.src = target_url;
                               return false;
                              }






  