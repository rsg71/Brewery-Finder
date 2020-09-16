$(document).ready(function(){
    $("#type").on("click", function() {
        ///variables for search parameters
        city = $("#city").val()
        

        var queryURL = "https://api.openbrewerydb.org/breweries?by_city=" + city
        //var yelpURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=Starbucks&location=philadelphia" //+ city//

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            console.log(response)
            var testBrewery = response[0].name;
            console.log(testBrewery)
        //})
        var yelpURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=" + testBrewery + "&location=" + city
        $.ajax({
            url: yelpURL,
            headers: { 
                'Authorization': 'Bearer r-ru9f0en8RW39PeL2KLuaZ1wwUgo6nm3cHomQ9RbfzCM63ocbL6mrc2C3Culn8SmlqtM5w65eUmULYxoGBHwoE0ibv-e2E-tNx0zE7kbiF01t8IjhfP7l7ocZVhX3Yx',
            },
            method: "GET"
        }).then(function(yelp) {
            console.log(yelp);
            console.log(yelp.businesses[0].name)
            console.log(yelp.businesses[0].rating)
            console.log(yelp.businesses[0].location.address1)
            var businessID = yelp.businesses[0].id
            console.log(businessID)
            //for (var i = 0; i <= 10; i++) {
                //console.log(yelp.businesses[i].name)
            //}
        })
        })

     })

})