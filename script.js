
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchButton=document.querySelector(".search button");
async function checkWeather(city) {
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`)
    if(response.status==404)
    {
        document.querySelector(".error").style.display="block";
        ocument.querySelector(".weather").style.display="none";
    }
    else
    {
    var data = await response.json();
    const weatherIcon= document.querySelector(".weather-icon")
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed +"km/hr";
    if(data.weather[0].main=='Clouds')
    {
       weatherIcon.src="images/clouds.png";
    }
    else if(data.weather[0].main=='Rain')
    {
        weatherIcon.src="images/rain.png";
    }
    else if(data.weather[0].main=='Clear')
    {
        weatherIcon.src="images/clear.png";
    }
    else if(data.weather[0].main=='Drizzle')
    {
        weatherIcon.src="images/drizzle.png";
    }
    else if(data.weather[0].main=='Humidity')
    {
        weatherIcon.src="images/humidity.png";
    }
    else if(data.weather[0].main=='Snow')
    {
        weatherIcon.src="images/snow.png";
    }
    else if(data.weather[0].main=='Wind')
    {
        weatherIcon.src="images/wind.png";
    }
    else if(data.weather[0].main=='Mist')
    {
        weatherIcon.src="images/mist.png";
    }
    document.querySelector(".error").style.display="none";
    document.querySelector(".weather").style.display="block";
}       
}

checkWeather()
searchButton.addEventListener("click",()=>{
    checkWeather(searchBox.value)
})