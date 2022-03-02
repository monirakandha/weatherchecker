const API_KEY = `167d256b66c37734a565c793dad9a9cb`;
const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
}

const setInneText = (id,text) =>{
    document.getElementById(id).innerText = text;
}
const displayTemperature = temperature => {
  
    setInneText('city', temperature.name);
    setInneText('temparature' , temperature.main.temp)
    setInneText('condition', temperature.weather[0].main)
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);

    
}