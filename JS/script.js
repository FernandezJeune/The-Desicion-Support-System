let weather = {
	"apiKey":"2c247d35d3bdfb2676f0c12c7e2bdd36", 
	fetchWeather: function(city) {
		fetch(
			"http://api.openweathermap.org/data/2.5/weather?q=" 
			+ city 
			+ "&units=metric&appid="
			+ this.apiKey
		)
		.then((response) => response.json())
		.then((data) => this.displayWeather(data));
	},
	displayWeather: function(data) {
		const { name } = data;
		const { icon,description } = data.weather[0];
		const { temp,humidity } = data.main;
		const { speed } = data.wind;
		console.log(name,icon,description,temp,humidity,speed);
		document.querySelector(".city").innerText = "Weather in " + name;
		document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
	}
};