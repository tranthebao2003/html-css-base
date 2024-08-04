var search = document.querySelector('.search')
var city = document.querySelector('.tity')
var country = document.querySelector('.country')
var value = document.querySelector('.value')
var shortDesc = document.querySelector('.short-desc')
var visibility = document.querySelector('.visibility span')
var wind = document.querySelector('.wind span')
var sun = document.querySelector('.sun span')

async function changeWeatherUI(){
    search.value.trim()
    let apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=ha noi&appid=7e60322532a5c1448dbf466ff7c5f820'

    let data = await fetch(apiURL).then(res=> res.json())
    console.log(data)
}

changeWeatherUI()