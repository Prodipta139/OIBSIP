const degree = document.querySelector("#deg");
const temptype = document.querySelector("#temp-type");
const button = document.querySelector("#btn");
const celsiusfield = document.querySelector("#cel");

button.addEventListener("click", (e) => {
    e.preventDefault();
    convertToCelsius();
})

function convertToCelsius() {
    let inputVal = degree.value;

    if (temptype.value === "fahrenheit") {
        const fahrenheitToCelsius = (inputVal - 32) * (5 / 9);
        celsiusfield.innerHTML = `${fahrenheitToCelsius.toFixed(2)} &deg;c`;
    }
    else if (temptype.value === "kelvin") {
        const kelvinToCelsius = (inputVal - 273.15);
        celsiusfield.innerHTML = `${kelvinToCelsius.toFixed(2)} &deg;c`;
    }
}