async function fetchWeather(city = 'Zagreb') {
    return await fetch("https://goweather.herokuapp.com/weather/" + city)
        .then((response) => response.json())

}

function printWeather(text) {
    document.getElementById("json-content").innerText = JSON.stringify(text)
}

function main() {
    fetchWeather().then(data => printWeather(data))
}

main()
