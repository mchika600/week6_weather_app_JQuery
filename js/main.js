function getWeather(){
    let city = $("#change-form input[name=City]").val()
    $.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=d857ba6c2606ce9c3576bdcd79c73c25', function(data){
        console.log(data.weather[0].description)

       let high = Math.floor(((data.main.temp_max-273.15)*1.8)+32)
       $("#high").text(high + 'F')
       let low = Math.floor(((data.main.temp_min-273.15)*1.8)+32)
       $("#low").text(low + 'F')
       let forecast = (data.weather[0].description).toUpperCase()
       $("#forecast").text(forecast)
       let humidity = data.main.humidity
       $("#humidity").text(humidity+'%')
    })
}

