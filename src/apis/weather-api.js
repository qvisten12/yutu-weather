export const getCurrentWeather = async (location) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`;

  const res = await fetch(url);
  const data = await res.json();

  if (data.cod === "404") {
    return data.message;
  }

  return data;
};

export const getHourlyWeather = async (location) => {
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${location}&cnt=7&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`;

  const res = await fetch(url);
  const data = await res.json();

  if (data.cod === "404") {
    return data.message;
  }

  return data;
};

export const getWeeklyWeather = async (location) => {
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`;

  const res = await fetch(url);
  const data = await res.json();

  if (data.cod === "404") {
    return data;
  }

  const filteredList = data.list;

  data.list.forEach((item) => {
    for (let i = 0; i < filteredList.length; i++) {
      let [year, month, unhandledDay] = item.dt_txt.split("-");
      let [day, seconds] = unhandledDay.split(" ");
      let [year2, month2, unhandledDay2] = filteredList[i].dt_txt.split("-");
      let [day2, seconds2] = unhandledDay2.split(" ");

      if (day === day2) {
        filteredList.splice(i, 1);
      }
    }
  });
  let testlist = filteredList.filter((item) => {
    let [year, month, unhandledDay] = item.dt_txt.split("-");
    let [day, seconds] = unhandledDay.split(" ");
    if (seconds !== "21:00:00") {
      return item;
    }
    return null;
  });

  return testlist;
};
