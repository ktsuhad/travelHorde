import {
  ArrowForward,
  CalendarMonth,
  FlightLand,
  FlightTakeoff,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Aeroplane from "../../assets/Flightimg.jpg";
import { suggestedPlaces } from "../../Data/Data";

const Navbar = () => {
  const [classType, setClassType] = useState<string>("Economy"); // Economy, Premium-Economy, Business Class, First Class
  const [numAdults, setNumAdults] = useState<string>("1"); // Number of adults
  const [departure, setDeparture] = useState<string>(""); // Departure city
  const [destination, setDestination] = useState<string>(""); // Destination city
  const [departureDate, setDepartureDate] = useState<string>(""); // Departure date
  const [returnDate, setReturnDate] = useState<string>(""); // Return date
  const [suggestions, setSuggestions] = useState<string[]>([]); //Departure suggestion
  const [destinationSuggestions, setDestinationSuggestions] = useState<
    string[]
  >([]); //Destination suggestion

  const navigate = useNavigate();

  //handleSubmit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(
      "Form submitted:",
      classType,
      numAdults,
      departure,
      destination,
      departureDate,
      returnDate
    );

    // Redirect to search results page
    const queryParams = `?classType=${classType}&numAdults=${numAdults}&departure=${departure}&destination=${destination}&departureDate=${departureDate}&returnDate=${returnDate}`;
    navigate(`/search-results${queryParams}`);
  };

  const handleDepartureInput = (value: string) => {
    setDeparture(value);
    if (value) {
      const matchedSuggestions = suggestedPlaces.filter((place) =>
        place.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(matchedSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleDestinationInput = (value: string) => {
    setDestination(value);
    if (value) {
      const matchedSuggestions = suggestedPlaces.filter((place) =>
        place.toLowerCase().includes(value.toLowerCase())
      );
      setDestinationSuggestions(matchedSuggestions);
    } else {
      setDestinationSuggestions([]);
    }
  };

  return (
    <nav
      className="bg-gradient-to-l from-[#B1ACB5] to-[#E6E6E9] text-black py-5 font-normal bg-cover bg-center bg-no-repeat h-[500px]"
      style={{
        backgroundImage: `url(${Aeroplane})`,
      }}
    >
      <div className="container mx-auto">
        <div className="flex justify-between">
          <span className="flex gap-1 items-center ">
            <FlightTakeoff style={{ color: "#EA5C5C" }} />
            <span className="font-semibold text-xl">TravelHorde</span>
          </span>
          <ul className="flex gap-5">
            <li>Buisness class</li>
            <li>First Class</li>
            <li>Contact us</li>
            <li>FAQ</li>
          </ul>
        </div>
        <h1 className="text-2xl tracking-wide mt-16">
          Best Priced Buisness Class
        </h1>
        <p>Simple Booking. Easy Savings</p>
        <form onSubmit={handleSubmit}>
          <div className="mt-14 flex gap-5">
            {" "}
            {/* optioncontainer */}
            <select
              value={classType}
              onChange={(e) => setClassType(e.target.value)}
              className="border-r-2 w-28 rounded-md px-2 py-1.5 "
            >
              <option value="Economy">Economy</option>
              <option value="Premium-Economy">Premium-Economy</option>
              <option value="Buisness Class">Buisness Class</option>
              <option value="First Class">First Class</option>
            </select>
            <select
              value={numAdults}
              onChange={(e) => setNumAdults(e.target.value)}
              className="border-r-2 w-28 rounded-md px-2 py-1.5 "
            >
              <option value="1">1 Adult</option>
              <option value="2">2 Adult</option>
              <option value="3">3 Adult</option>
              <option value="4">4 Adult</option>
            </select>
          </div>
          <div className="flex flex-wrap mt-6  w-full">
            {" "}
            {/* input container */}
            <div className="border-r-2 relative flex items-center bg-white px-2 py-2 rounded-s-md">
              <span className="">
                <FlightTakeoff className="text-blue-600" />
              </span>
              <input
                type="text"
                value={departure}
                onChange={(e) => handleDepartureInput(e.target.value)}
                placeholder="Sanransisco,SFO"
                required
                className="px-1 py-1 outline-none w-72"
              />
              {suggestions.length > 0 && (
                <div className="absolute top-14 left-0 bg-white border border-gray-300 rounded mt-1 w-72">
                  {suggestions.map((place, index) => (
                    <div
                      key={index}
                      className="py-2 px-3 cursor-pointer hover:bg-gray-100"
                      onClick={() => {
                        setDeparture(place);
                        setSuggestions([]);
                      }}
                    >
                      {place}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="border-r-2 relative flex items-center bg-white px-2 py-2">
              <span>
                <FlightLand className="text-green-600" />
              </span>
              <input
                type="text"
                value={destination}
                onChange={(e) => handleDestinationInput(e.target.value)}
                placeholder="Destination"
                required
                className="px-1 py-1 outline-none w-72"
              />
              {destinationSuggestions.length > 0 && (
                <div className="absolute top-14 left-0 bg-white border border-gray-300 rounded mt-1 w-72">
                  {destinationSuggestions.map((place, index) => (
                    <div
                      key={index}
                      className="py-2 px-3 cursor-pointer hover:bg-gray-100"
                      onClick={() => {
                        setDestination(place);
                        setDestinationSuggestions([]);
                      }}
                    >
                      {place}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="border-r-2 relative flex items-center bg-white px-2 py-2">
              <span className="">
                <CalendarMonth />
              </span>
              <input
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                required
                className="px-1 py-1 outline-none w-72"
              />
            </div>
            <div className="border-r-2 relative flex items-center bg-white px-2 py-2">
              <span className="">
                <CalendarMonth />
              </span>
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                required
                className="px-1 py-1 outline-none w-72"
              />
            </div>
            <Button
              type="submit"
              variant="contained"
              sx={{ backgroundColor: "red" }}
              className=""
            >
              Search Flights{" "}
              <span className="ml-3">
                <ArrowForward />
              </span>
            </Button>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
