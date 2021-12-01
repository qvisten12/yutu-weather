import React from "react";
import moment from "moment";

const WeeklyWeather = ({ weeklyWeatherData }) => {
  return (
    <div className="md:p-0 flex flex-col my-8 ">
      <p className="font-bold text-4xl mb-4">Weekly Weather</p>

      {weeklyWeatherData.length > 0 &&
        weeklyWeatherData.map((weather, i) => {
          if (i === 0) {
            return;
          }

          return (
            <div
              className="bg-alternative rounded-md mb-4 flex justify-evenly text-white"
              key={weather.dt}
            >
              <div className="flex flex-col items-center justify-center p-2 w-32">
                <p className=" font-bold text-2xl ">
                  {moment.unix(weather.dt).format("dddd")}
                </p>

                <p className=" font-bold text-xl ">
                  {weather.main.temp.toFixed(0)}&deg;C
                </p>
              </div>

              <div className="flex flex-col items-center justify-center p-2 w-72">
                <img
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt={weather.weather[0].description}
                />
                <p className=" font-bold text-lg ">
                  {weather.weather[0].description}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default WeeklyWeather;
