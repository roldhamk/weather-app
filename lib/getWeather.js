const fetch = require("node-fetch");

const getWeather = async () => {
  let data = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=${process.env.APPID}`
  );
  return await data.json();
};
module.exports = getWeather;
