"use strict";

const apiKey = "1bd0fcbc9d17fde994dd15a7a0d12259";

let input = document.querySelector("input");
let button = document.querySelector("button");
let cardBody = document.querySelector(".card-body");
let body = document.querySelector("body");


button.addEventListener("click", (e) => {
    e.preventDefault();

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            console.log(data.name);
            console.log(data.sys.country);
            console.log((data.wind.speed*3600/1000).toFixed(), "wind");
            console.log(data.main.temp.toFixed(), "temp");
            console.log(data.weather[0].main);

            // const { main, name, sys, weather } = data *3600/100

            cardBody.innerHTML = `<h5 class="card-title text-center fs-2">${data.name}, ${data.sys.country}</h5>
            <div class="d-flex justify-content-center gap-3">

                <div class="card-text fs-4">Wind ${(data.wind.speed*3600/1000).toFixed()} <span class="fst-italic">km/h</span>,</div>
                <div class="card-text fs-4">Temp. ${data.main.temp.toFixed()-273} °C,</div>
                <div class="card-text fs-4">Weather <span class="fst-italic">${data.weather[0].main}</span></div>

            </div>`

            if (data.weather[0].main == "Clear") {
                body.style.backgroundImage = "url(./images/iStock_93663595_LARGE.webp)";
            }else if (data.weather[0].main == "Rain") {
                body.style.backgroundImage = "url(./images/wp6003587.webp)";
            }else if (data.weather[0].main == "Clouds") {
                body.style.backgroundImage = "url(./images/clouds.webp)";
            }else if (data.weather[0].main == "Windy") {
                body.style.backgroundImage = "url(./images/trees-grass-clouds-wind-1080P-wallpaper.jpg)";
            }else if (data.weather[0].main == "Mist") {
                body.style.backgroundImage = "url(./images/Mist.webp)";
            }

        }).catch(data=>{
            console.log(data);
            cardBody.innerHTML = `<h5 class="card-title text-center fs-2">City not found</h5>`
        })
})

fetch(`https://api.openweathermap.org/data/2.5/weather?q=Baku&appid=${apiKey}`)
.then(res => res.json())
.then(data => {
    console.log(data);
    console.log(data.name);
    console.log(data.sys.country);
    console.log(data.wind.speed.toFixed());
    console.log(data.main.temp.toFixed());
    console.log(data.weather[0].main);

})


