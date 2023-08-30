import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import SearchResults from "./Components/Search/Search";
import Booking from "./Components/Booking/Booking";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/booking/:flightId" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
