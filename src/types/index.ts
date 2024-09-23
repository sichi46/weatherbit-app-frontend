interface Weather {
  icon: string;
  description: string;
  code: number;
}

export interface WeatherData {
  app_temp: number;
  aqi: number;
  city_name: string;
  clouds: number;
  country_code: string;
  datetime: string;
  dewpt: number;
  dhi: number;
  dni: number;
  elev_angle: number;
  ghi: number;
  gust: number;
  h_angle: number;
  lat: number;
  lon: number;
  ob_time: string;
  pod: string;
  precip: number;
  pres: number;
  rh: number;
  slp: number;
  snow: number;
  solar_rad: number;
  sources: string[];
  state_code: string;
  station: string;
  sunrise: string;
  sunset: string;
  temp: number;
  timezone: string;
  ts: number;
  uv: number;
  vis: number;
  weather: Weather;
  wind_cdir: string;
  wind_cdir_full: string;
  wind_dir: number;
  wind_spd: number;
}

export interface WeatherApiResponse {
  count: number;
  data: WeatherData[];
}

export interface ForecastDay {
  app_max_temp: number;
  app_min_temp: number;
  clouds: number;
  clouds_hi: number;
  clouds_low: number;
  clouds_mid: number;
  datetime: string; // Forecast date
  dewpt: number; // Dew point
  high_temp: number;
  low_temp: number;
  max_dhi: null | number;
  max_temp: number;
  min_temp: number;
  moon_phase: number;
  moon_phase_lunation: number;
  moonrise_ts: number;
  moonset_ts: number;
  ozone: number;
  pop: number; // Probability of precipitation
  precip: number; // Precipitation in mm
  pres: number; // Pressure
  rh: number; // Relative humidity
  slp: number; // Sea level pressure
  snow: number;
  snow_depth: number;
  sunrise_ts: number;
  sunset_ts: number;
  temp: number; // Average temperature for the day
  ts: number; // Timestamp
  uv: number; // UV index
  valid_date: string; // Valid forecast date
  vis: number; // Visibility in km
  weather: Weather; // Weather description, icon, and code
  wind_cdir: string; // Wind cardinal direction (short)
  wind_cdir_full: string; // Wind cardinal direction (full)
  wind_dir: number; // Wind direction in degrees
  wind_gust_spd: number; // Wind gust speed
  wind_spd: number; // Wind speed in m/s
}

export interface ForecastApiResponse {
  city_name: string;
  country_code: string;
  lat: string;
  lon: string;
  state_code: string;
  timezone: string;
  data: ForecastDay[];
}
