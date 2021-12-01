import React from "react";
import moment from "moment";

const CurrentWeather = ({ currentWeatherData }) => {
  return (
    <div className="flex flex-col container m-auto max-w-3xl md:p-0">
      {currentWeatherData.main ? (
        <div className="bg-primary rounded-md flex justify-between text-white ">
          <div className="flex flex-col p-4 md:p-5 justify-center ">
            <p className="text-xl md:text-4xl font-semibold tracking-wide">
              {currentWeatherData.name} ({currentWeatherData.sys.country})
            </p>
            <div className="flex mt-2">
              <p className="font-bold text-lg md:text-xl mr-2">
                {currentWeatherData.main.temp_max.toFixed(0)}&deg;C
              </p>
              <p className="font-medium text-lg opacity-80">
                {currentWeatherData.main.temp_min.toFixed(0)}&deg;C
              </p>
            </div>
            <div className="flex mt-4">
              <div className="flex flex-col mr-2 md:mr-5">
                <span className="font-bold">Sunrise</span>
                <span>
                  {moment.unix(currentWeatherData.sys.sunrise).format("LT")}
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-bold">Sunset</span>
                <span>
                  {moment.unix(currentWeatherData.sys.sunset).format("LT")}
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 md:p-5 flex flex-col justify-center items-center">
            <img
              src={`https://openweathermap.org/img/wn/${currentWeatherData.weather[0].icon}@2x.png`}
              alt="weather"
              className=" md:w-32"
            />
            <p className="font-semibold text-lg mb-1">
              {currentWeatherData.weather[0].description}
            </p>
          </div>
        </div>
      ) : (
        "loading..."
      )}
    </div>
  );
};

export default CurrentWeather;
