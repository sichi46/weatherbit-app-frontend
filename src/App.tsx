import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import CityForecast from "./pages/city-forecast";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/:city" Component={CityForecast} />
    </Routes>
  );
}

export default App;
