import React from "react";
import { useLocation, Link } from "react-router-dom";
import { FlightLand, FlightTakeoff, Search } from "@mui/icons-material";
import { flights } from "../../Data/Data";
import dayjs from "dayjs";

const SearchResults: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const classType = queryParams.get("classType");
  const numAdults = queryParams.get("numAdults");
  const departure = queryParams.get("departure");
  const destination = queryParams.get("destination");
  const departureDate = queryParams.get("departureDate");

  const filteredFlights = flights.filter(
    (flight) =>
      flight.departure === departure && flight.destination === destination
  ); //filtered flight

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold  mb-4">Search Results</h1>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="bg-[#111236] text-white p-6 flex items-center gap-2 font-normal tracking-wide ">
          <span className="bg-blue-600 p-3 rounded-md">
            <Search />
          </span>
          <div className="flex flex-col">
            <span>
              {departure} - {destination}
            </span>
            <p>
              <span className="border-r pr-2">{numAdults}adult</span>
              <span className="pl-2">{classType}</span>
            </p>
          </div>
          <span className="flex-1"></span>
          <span>{dayjs(departureDate).format("ddd, D MMM")}</span>
        </div>
        <div className="space-y-4">
          {filteredFlights.length > 0 ? (
            filteredFlights.map((flight) => (
              <div
                key={flight.id}
                className="bg-gray-100 p-4 rounded-lg flex items-center space-x-8"
              >
                <img
                  src={flight.airlineEmblem}
                  alt=""
                  className="w-20 h-10 bg-cover"
                />
                <div className="flex items-center">
                  <FlightTakeoff className="text-blue-500 mr-2" />
                  <p className="text-gray-700 text-2xl">
                    {flight.departureTime}
                  </p>
                </div>
                <div className="flex items-center">
                  <FlightLand className="text-green-500 mr-2" />
                  <p className="text-gray-700 text-2xl">{flight.arrivalTime}</p>
                </div>
                <p className="text-teal-700 ">{flight.airline}</p>
                <p className="text-gray-700  text-xl">&#8377;{flight.price}</p>
                <span className="flex-1"></span>
                <Link
                  to={`/booking/${flight.id}?price=${flight.price}&destination=${flight.destination}&numadult=${numAdults}&classtype=${classType}`}
                  className="ml-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Book Now
                </Link>
              </div>
            ))
          ) : (
            <p className="text-red-500">
              No flights found for your search criteria.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
