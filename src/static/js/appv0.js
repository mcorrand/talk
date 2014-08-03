$.ajax({
    url: "http://rate-exchange.appspot.com/currency?from=EUR&to=USD",
    jsonp: "callback",
    dataType: "jsonp",
    data: {
        format: "json"
    },
    success: function( response ) {
        $('#out').html(response.rate);        
    }
});