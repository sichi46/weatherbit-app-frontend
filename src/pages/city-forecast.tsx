import { Button } from "@/components/ui/button";
import { ForecastApiResponse } from "@/types";
import axios from "axios";
import {
  CloudDrizzle,
  Loader,
  Signpost,
  SunMedium,
  ThermometerIcon,
  Timer,
  Wind,
} from "lucide-react";
import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const CityForecast = () => {
  const { city } = useParams<{ city: string }>();
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading } = useQuery<ForecastApiResponse>(
    ["getCityForecast", city],
    async () => {
      const res = await axios.post(
        `https://weatherbit-app-server.vercel.app/weather/forecast`,
        {
          city,
        }
      );
      return res.data;
    }
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader className="animate-spin" />
      </div>
    );
  }

  if (!data || data.data.length === 0) {
    return <div className="text-center">No forecast data available</div>;
  }

  const totalPages = data.data.length;
  const currentItem = data.data[currentPage - 1];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pageNumbers.push(
          <PaginationItem key={i}>
            <PaginationLink
              onClick={() => handlePageChange(i)}
              isActive={currentPage === i}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        pageNumbers.push(
          <PaginationItem key={i}>
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
    }
    return pageNumbers;
  };
  const iconUrl = `https://www.weatherbit.io/static/img/icons/${data.data[0].weather.icon}.png`;
  return (
    <div className="flex items-center min-h-screen flex-col py-4 relative">
      <div className="bg-orange-600 -z-20 w-72 h-96 rounded-full blur-3xl bg-opacity-5 animate-pulse absolute" />
      <div className="bg-yellow-600 -z-20 w-72 translate-x-11 translate-y-18 h-96 rounded-full blur-3xl bg-opacity-5 animate-pulse absolute" />
      <div className="bg-blue-600 -z-20 w-72 h-96 rounded-full -translate-x-28 translate-y-32 blur-3xl bg-opacity-5 animate-pulse absolute" />

      <h1 className="text-center text-4xl font-bold py-3">
        {data.city_name} {data.country_code}
      </h1>
      <p className=" text-lg font-bold">{data.data[0].weather.description}</p>
      <img
        src={iconUrl}
        alt={data.data[0].weather.description}
        className="w-18 h-18"
      />

      <div className="flex flex-col items-center gap-3 max-w-md w-full">
        <p className="flex items-center gap-4">
          <Timer className="text-blue-500" />
          <span className="text-2xl font-bold">{currentItem.datetime}</span>
        </p>
        <div className="grid grid-cols-2 gap-8 mt-8 w-full">
          <div className="flex flex-col items-center">
            <ThermometerIcon className="text-red-500" />
            <span className="text-xs py-2">Max Temp</span>
            <p>{currentItem.max_temp}°C</p>
          </div>
          <div className="flex flex-col items-center">
            <ThermometerIcon className="text-blue-500" />
            <span className="text-xs py-2">Min Temp</span>
            <p>{currentItem.min_temp}°C</p>
          </div>
          <div className="flex flex-col items-center">
            <CloudDrizzle className="text-gray-500" />
            <span className="text-xs py-2">Precipitation</span>
            <p>{currentItem.precip}mm</p>
          </div>
          <div className="flex flex-col items-center">
            <SunMedium className="text-yellow-500" />
            <span className="text-xs py-2">UV Index</span>
            <p>{currentItem.uv}</p>
          </div>
          <div className="flex flex-col items-center">
            <Signpost className="text-green-500" />
            <span className="text-xs py-2">Wind Direction</span>
            <p>{currentItem.wind_cdir_full}</p>
          </div>
          <div className="flex flex-col items-center">
            <Wind className="text-teal-500" />
            <span className="text-xs py-2">Wind Speed</span>
            <p>{currentItem.wind_spd} m/s</p>
          </div>
        </div>
      </div>

      <Pagination className="mt-8">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            />
          </PaginationItem>
          {renderPageNumbers()}
          <PaginationItem>
            <PaginationNext
              onClick={() =>
                handlePageChange(Math.min(totalPages, currentPage + 1))
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      <Button variant="outline" className="mt-4">
        <a href="/">Back to Home</a>
      </Button>
    </div>
  );
};

export default CityForecast;
