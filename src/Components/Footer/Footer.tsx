const Footer = () => {
  return (
    <footer className="bg-[#05203c] text-white pt-14 pb-9 text-sm">
      <div className="container mx-auto flex justify-between">
        <div className="">
          <button
            type="button"
            className="flex items-center text-white hover:underline"
            aria-label="Regional settings. Language English (United Kingdom). Indian Rupee. Select to change."
          >
            <img
              src="https://js.skyscnr.com/images/country/flag/header/in.png"
              alt=""
              title="IN"
              className="w-5 h-5 mr-1"
            />
            <span>India · English (UK) · ₹ INR</span>
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <a href="">Help</a>
          <a href="">Privacy Settings</a>
          <a href="">Log in</a>
        </div>
        <div className="flex flex-col gap-3">
          <a href="">Cookie policy</a>
          <a href="">Privacy policy </a>
          <a href="">Terms of service</a>
          <a href="">Company Details</a>
        </div>
        <div className="flex flex-col gap-3">
          <a href="">Explore</a>
          <a href="">Company</a>
          <a href="">Partners</a>
          <a href="">Trips</a>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>
          &copy; {new Date().getFullYear()} Flight Booking App. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
