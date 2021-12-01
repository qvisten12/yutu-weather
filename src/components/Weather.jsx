import React, { useEffect, useState } from "react";
import {
  getCurrentWeather,
  getHourlyWeather,
  getWeeklyWeather,
} from "../apis/weather-api";
import { useParams, Link } from "react-router-dom";
import HourlyWeather from "./HourlyWeather";
import CurrentWeather from "./CurrentWeather";
import WeeklyWeather from "./WeeklyWeather";

const Weather = () => {
  const [currentWeatherData, setCurrentWeatherData] = useState({});
  const [weeklyWeatherData, setWeeklyWeatherData] = useState({});
  const [hourlyWeatherData, setHourlyWeatherData] = useState({});
  const [error, setError] = useState(false);
  const [errormessage, setErrorMessage] = useState("");
  let { location } = useParams();

  useEffect(() => {
    const fetchCurrentData = async () => {
      const data = await getCurrentWeather(location);
      setCurrentWeatherData(data);
    };

    const fetchHourlyData = async () => {
      const data = await getHourlyWeather(location);
      setHourlyWeatherData(data);
    };

    const fetchWeeklyData = async () => {
      const data = await getWeeklyWeather(location);
      if (data.cod === "404") {
        setError(true);
        setErrorMessage(data.message);
      } else {
        setWeeklyWeatherData(data);
      }
    };

    fetchCurrentData();
    fetchHourlyData();
    fetchWeeklyData();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col container m-auto max-w-3xl px-5 md:p-0">
      <div className="mb-10 mt-10 flex justify-between items-center">
        <Link
          to="/"
          className="bg-green-500 text-white font-semibold rounded-md
        p-2 text-xl w-20 text-center shadow-2xl"
        >
          Back
        </Link>
        <p className="text-2xl md:text-3xl font-bold">Yutu Weather</p>
      </div>

      {error ? (
        <h1>Error: {errormessage}! Please try again</h1>
      ) : (
        <div>
          {currentWeatherData.main ? (
            <CurrentWeather currentWeatherData={currentWeatherData} />
          ) : (
            "loading..."
          )}

          {hourlyWeatherData.list ? (
            <HourlyWeather hourlyWeatherData={hourlyWeatherData.list} />
          ) : (
            "loading..."
          )}

          {weeklyWeatherData ? (
            <WeeklyWeather weeklyWeatherData={weeklyWeatherData} />
          ) : (
            "loading..."
          )}
        </div>
      )}
    </div>
  );
};

export default Weather;
