import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { WeatherApiResponse, WeatherData } from "@/types";
import axios from "axios";
import {
  Cloudy,
  Fan,
  HandIcon,
  Loader,
  ThermometerIcon,
  Timer,
  Wind,
} from "lucide-react";
import { useState } from "react";
import { useMutation } from "react-query";
import moment from "moment";

const Home = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState<WeatherData[]>([]);

  const { mutate, isLoading } = useMutation<WeatherApiResponse>(
    "getWeatherByCity",
    async () => {
      const res = await axios.post(`http://localhost:7000/weather`, {
        city,
      });
      return res.data;
    },
    {
      onSuccess(data) {
        setData(data.data);
      },
    }
  );
  return (
    <div className=" flex items-center  min-h-screen flex-col py-4 relative">
      <div className="bg-orange-600 -z-20 w-72 h-96 rounded-full blur-3xl bg-opacity-5 animate-pulse absolute" />
      <div className="bg-yellow-600 -z-20 w-72 translate-x-11 translate-y-18 h-96 rounded-full blur-3xl bg-opacity-5 animate-pulse absolute" />
      <div className="bg-blue-600 -z-20 w-72 h-96 rounded-full -translate-x-28 translate-y-32 blur-3xl bg-opacity-5 animate-pulse absolute" />
      <div className="flex w-full max-w-sm items-center space-x-2 my-8">
        <Input
          value={city}
          type="text"
          placeholder="Enter a city to check the weather"
          onChange={(e) => setCity(e.target.value)}
          disabled={isLoading}
        />
        <Button disabled={isLoading} onClick={() => mutate()}>
          {isLoading ? <Loader className=" animate-spin" /> : "Search"}
        </Button>
      </div>
      {isLoading && <> loading</>}
      {data &&
        data.map((item) => {
          const iconUrl = `https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`;
          return (
            <div key={item.datetime}>
              <h1 className=" text-center text-3xl font-bold py-3">
                {item.city_name} {item.country_code}
              </h1>
              <div className=" flex  flex-col items-center gap-3">
                <img
                  src={iconUrl}
                  alt={item.weather.description}
                  className="w-18 h-18"
                />
                <p className="flex items-center gap-4">
                  <ThermometerIcon className="text-red-500" />
                  <span className=" text-3xl font-bold">{item.temp}°</span>
                </p>
                <p>{item.weather.description}</p>
                <div className=" grid md:grid-cols-5 grid-cols-2  gap-8 mt-8">
                  <div className="flex flex-col items-center">
                    <HandIcon className="text-yellow-500" />
                    <span className="text-xs py-2">Feels like</span>
                    <p>{item.app_temp}°C</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <Wind className="text-teal-500" />
                    <span className="text-xs py-2">Wind speed</span>
                    <p>{item.wind_spd}m/s</p>
                  </div>
                  <div className="flex  flex-col items-center ">
                    <Cloudy className="text-gray-400" />
                    <span className="text-xs py-2">Humidity</span>
                    <p>{item.rh}%</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Fan className="text-green-500" />
                    <span className="text-xs py-2">Air Quality Index</span>
                    <p>{item.aqi}</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Timer className="text-blue-500" />
                    <span className="text-xs py-2">Observation time</span>
                    <p>{moment(item.ob_time).format("LT ")}</p>
                  </div>
                </div>
                <Button variant={"outline"}>
                  <a href={`/${item.city_name}`}>Check Forecast</a>
                </Button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Home;
