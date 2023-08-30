import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ArrowForward, Person } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";

const Booking: React.FC = () => {
  const { flightId } = useParams();
  const queryParams = new URLSearchParams(useLocation().search);
  const price = queryParams.get("price");
  const adult = queryParams.get("numadult");
  const classtype = queryParams.get("classtype");
  const destination = queryParams.get("destination");

  const [passengerName, setPassengerName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [passportNumber, setPassportNumber] = useState<string>("");
  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);

  const navigate = useNavigate();
  const formattedPrice = parseFloat(price as string).toFixed(2); // Use type assertion

  const handleBookingSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Set booking confirmation state
    setBookingConfirmed(true);
  };

  const handleBackToHomepage = () => {
    setBookingConfirmed(false);
    navigate("/"); // Navigate to homepage
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="bg-[#111236] text-white text-center py-8 font-bold tracking-wide text-3xl">
        <p>{destination}</p>
        <div className="text-sm font-normal">
          <span className="border-r px-2">
            <Person />
            {adult} adult
          </span>
          <span className="px-2">{classtype}</span>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        {bookingConfirmed ? (
          <div className="bg-green-100 p-8 rounded-lg  flex flex-col justify-center items-center">
            <h2 className="text-green-800 font-semibold mb-2 text-2xl">
              Booking Confirmed!
            </h2>
            <p className="text-gray-600 mb-4">
              Your flight has been successfully booked. Have a nice trip!
            </p>
            <Button
              onClick={handleBackToHomepage}
              variant="contained"
              color="primary"
              endIcon={<ArrowForward />}
              className="animate-bounce"
            >
              Back to Homepage
            </Button>
            <div className="mt-8 space-y-4 flex items-center justify-between gap-20">
              <div>
                <h2 className="text-xl font-semibold">Flight Details</h2>
                <p>
                  <strong>Destination:</strong> {destination}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Your Booking Details</h2>
                <p>
                  <strong>Passenger Name:</strong> {passengerName}
                </p>
                <p>
                  <strong>Email:</strong> {email}
                </p>
                <p>
                  <strong>Passport Number:</strong> {passportNumber}
                </p>
                <p>
                  <strong>Flight ID:</strong> {flightId}
                </p>
                <p>
                  <strong>Price:</strong> &#8377;{formattedPrice}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleBookingSubmit} className="space-y-4">
            <TextField
              label="Passenger Name"
              variant="outlined"
              fullWidth
              value={passengerName}
              onChange={(e) => setPassengerName(e.target.value)}
              required
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              label="Passport Number"
              variant="outlined"
              fullWidth
              value={passportNumber}
              onChange={(e) => setPassportNumber(e.target.value)}
              required
            />
            <div className="flex justify-between">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                endIcon={<ArrowForward />}
              >
                Complete Booking
              </Button>
              <span>
                <span className="text-blue-900 text-base">Total: </span>&#8377;
                {formattedPrice}
              </span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Booking;
