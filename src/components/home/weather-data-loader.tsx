const WeatherDataLoader = () => {
  return (
    <div>
      <h1 className=" text-center text-3xl font-bold py-3 text-transparent bg-gray-200 animate-pulse rounded-full">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </h1>
      <div className=" flex  flex-col items-center gap-3">
        <span className="w-18 h-18 inline-block text-transparent bg-gray-200 animate-pulse rounded-full">
          {" "}
          Lorem ipsum dolo
        </span>
        <p className="flex items-center gap-4">
          <span className="text-transparent bg-gray-200 animate-pulse rounded-full">
            {" "}
            lorem
          </span>
          <span className=" text-3xl font-bold text-transparent bg-gray-200 animate-pulse rounded-full">
            lorem
          </span>
        </p>
        <p className="text-transparent bg-gray-200 animate-pulse rounded-full">
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <div className=" grid md:grid-cols-5 grid-cols-2  gap-8 mt-8">
          <div className="flex flex-col items-center">
            <span className="text-transparent bg-gray-200 animate-pulse rounded-full"></span>
            <span className="text-xs py-2 text-transparent bg-gray-200 animate-pulse rounded-full">
              Lorem, ipsum dolor.
            </span>
            <p className="text-transparent bg-gray-200 animate-pulse rounded-full">
              lorem
            </p>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-transparent bg-gray-200 animate-pulse rounded-full">
              lorem
            </span>
            <span className="text-xs py-2 text-transparent bg-gray-200 animate-pulse rounded-full">
              Wind speed
            </span>
            <p className="text-transparent bg-gray-200 animate-pulse rounded-full">
              22 m/s
            </p>
          </div>
          <div className="flex  flex-col items-center ">
            <span className="text-transparent bg-gray-200 animate-pulse rounded-full">
              lorem
            </span>
            <span className="text-xs py-2 text-transparent bg-gray-200 animate-pulse rounded-full">
              Humidity
            </span>
            <p className="text-transparent bg-gray-200 animate-pulse rounded-full">
              {"  "}%
            </p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-transparent bg-gray-200 animate-pulse rounded-full">
              {"  "}
            </span>
            <span className="text-xs py-2 text-transparent bg-gray-200 animate-pulse rounded-full">
              Air Quality Index
            </span>
            <p className="text-transparent bg-gray-200 animate-pulse rounded-full">
              {"  "}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-transparent bg-gray-200 animate-pulse rounded-full"></span>
            <span className="text-xs py-2 text-transparent bg-gray-200 animate-pulse rounded-full">
              Observation time
            </span>
            <p className="text-transparent bg-gray-200 animate-pulse rounded-full">
              {"  "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDataLoader;
