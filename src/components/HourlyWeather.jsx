import React from "react";
import moment from "moment";

const HourlyWeather = ({ hourlyWeatherData }) => {
  return (
    <div className="md:p-0 mt-8  overflow-auto  rounded-md flex justify-between text-white ">
      {hourlyWeatherData.length > 0 &&
        hourlyWeatherData.map((weather, i) => (
          <div
            key={weather.dt}
            className="flex-grow flex-shrink px-3 first:pl-0 last:pr-0"
          >
            <div className="text-center rounded-md p-3 bg-secondary">
              <span className="font-semibold">
                {i === 0 ? "Now" : moment.unix(weather.dt).format("LT")}
              </span>

              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt=""
                className="max-w-xs"
              />

              <span className="font-semibold">
                {weather.main.temp.toFixed(0)}&deg;C
              </span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default HourlyWeather;
