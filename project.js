const cityInput = document.getElementById("cityInput");
const result = document.getElementById("result")

const API_KEY="595a06e432137b1e1e2611084962ff56"

async function getWeather(){
    const city= cityInput.value
    console.log(city)
    
    if(city===""){
        result.innerHTML = `<p class='error'>Please enter a city name</p>`
    }
    const URL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

    try{
        const response = await fetch(URL)
        const data= await response.json()
        console.log(data);

        result.innerHTML=`
        <h2>${data.name}</h2>
        <p>Temperature : ${data.main.temp} °C </p>
        <p>Wind : ${data.wind.speed} Km/h</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
        <p>Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>`
    }catch(error){
        console.log("error during fetching data",error);
        result.innerHTML=`<p class='error'>${error.message}</p>`
    }
}