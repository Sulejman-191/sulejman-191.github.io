cities = [
    "Sevilla",
    "Zagreb",
    "Minsk",
    "Berlin"
]

defaultData = {
    "temperature": "29 °C",
    "wind": "20 km/h",
    "description": "Partly cloudy",
    "forecast": [
        {
            "day": 1,
            "temperature": "27 °C",
            "wind": "12 km/h"
        },
        {
            "day": 2,
            "temperature": "22 °C",
            "wind": "8 km/h"
        }
    ]
}


async function fetchWeather(city = 'Zagreb') {
    // fetch('./countries.json').then(res => console.log(res))
    return await fetch("https://goweather.herokuapp.com/weather/" + city)
        .then((response) => response.json()).catch(onrejected => defaultData)

}

function printWeather(text) {
    document.getElementById("json-content").innerText = JSON.stringify(text)
}

function main() {
    for (city of cities) {

        fetchWeather(city).then(data => {
            let cointainer = document.getElementById('weather-container')
            let newDiv = document.createElement('div')
            // newDiv.className = ''
            console.log(data);
            newDiv.innerText = String(city) + ": " + data.temperature + " " + data.wind + " " + data.description + " | "
            cointainer.appendChild(newDiv)
        })
    }
}

main()
