//Anonymous function inside the call to the ready function using jQuery
//Read the doc and ready to render the function
$(document).ready(function(){
    //JavaScript to access the NASA Web Services dinamically.
    //in the JavaScript seelectors, used click method in jQuery to register an event listener 
    //for all 4 buttons.
    $("#nasabutton").click(function(){
        //Ajax call for the function to get the properties from the API URL.

        $.ajax({
            //API key
            url:'https://api.nasa.gov/planetary/apod?api_key=tkfIqWNYP4rcT69VnKtpOlsMG8bhU3cG1xiuzwgp',
            //Gettign back json
            dataType: 'json',
            //Anonymous function to run after getting json. result parameter holds json values.
            success: function (result) {
             //Take data out of result (JSON) object and put it in the DOM
             $("#apod-access-date").text(result.date);
             $("#apod-image").attr("src",result.url);
             $("#apod-title").text(result.title);
             $("#apod-explanation").text(result.explanation);
             //Display the image.
             $("#apod-image").css("display", "block");
            },
            error: function (reason, ex) {  //Error handling
                alert(reason);
            }
       });
       
           })
    $("#clearnasabutton").click(function(){
        //Write the JavaScript to clear the fetched data from NASA to the Clear pace button.
        $("#apod-access-date").text("");
        $("#apod-image").attr("src", "");
        $("#apod-title").text("");
        $("#apod-explanation").text("");
        $("#apod-image").css("display", "none");
    });
    $("#weatherbutton").click(function(){
        //Created zip variable, used JS Selector to grab the value and assign it to the variable
        let zipcode = $("#zip").val();

        //Ajax call so the function can get the properties from the URL. zipcode entered is going to be appended in the url to get the zip.
        $.ajax({
            url:'http://api.openweathermap.org/data/2.5/weather?APPID=600659d50b26106eb7c16e6170199541&zip='+zipcode,
            dataType: 'json',
            success: function (result) {
             //Take data out of result (JSON) object and put it in the DOM
             $("#city_name").text(result.name);
             $("#temperature").text(result.main.temp);
             $("#pressure").text(result.main.pressure);
             $("#humidity").text(result.main.humidity);
             $("#wind_speed").text(result.wind.speed);
             $("#weather").css("display","block");
            },
            error: function (reason, ex) {
                alert(reason);
            }
       });
       
           });
    $("#clearweatherbutton").click(function(){
        $("#weather").css("display","none");
    });
});