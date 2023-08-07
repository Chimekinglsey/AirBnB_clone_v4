$(document).ready(function(){
        $.get('http://0.0.0.0:5001/api/v1/status/', function(response){
                if (response.status == 'OK') {
                        $('#api_status').addClass('available');
                } else {
                        $('#api_status').removeClass('available');
                }
	$.post('http://0.0.0.0:5001/api/v1/places_search/', )
        });
});
