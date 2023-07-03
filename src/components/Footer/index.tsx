import React from "react";
import "../../assets/styles/footer.css";

export default function Footer() {
  return (
    <footer
      id="dark-theme"
      className="footer bottom-0 left-0 flex flex-col w-full gap-8 px-8 py-16 md:gap-12 bg-gray-900"
    >
      <div className="w-full h-px m-auto bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
      <div className="flex flex-col items-center gap-8 md:justify-between md:flex-row">
        <div className="flex flex-col gap-2">
          <p className="text-gray-400">SUBSCRIBE TO OUR NEWSLETTER</p>
          <p className="text-gray-300">
            The latest news, article, resources, sent to your inbox weekly
          </p>
        </div>
        <div className="flex flex-col gap-4 xsm:flex-row md:p-0">
          <input
            className="px-4 py-3 text-lg transition-all duration-300 rounded-lg focus:outline-none focus:right-1 "
            placeholder="Enter your email"
            type="text"
          />
          <button className="bg-gray-500/75 hover:bg-blue-300/75 px-6 py-4 font-semibold  text-white rounded-lg">
            Subscribe
          </button>
        </div>
      </div>
      <div className="w-full h-px m-auto bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between ">
        <div>&#169; 2023</div>
        <div className="flex gap-4 p-2 rounded-md social-wrapper">
          <img
            className="text-white"
            src="https://img.icons8.com/material/24/000000/twitter--v2.png"
            alt="Facebook"
          />
          <img
            src="https://img.icons8.com/material/24/000000/instagram-new--v1.png"
            alt="Instagram"
          />
          <img
            src="https://img.icons8.com/material/24/000000/twitter--v2.png"
            alt="twitter "
          />
          <img
            src="https://img.icons8.com/ios-filled/24/000000/telegram-app.png"
            alt="telegram "
          />
          <img
            src="https://img.icons8.com/material/24/000000/discord-logo--v1.png"
            alt="discord"
          />
        </div>
      </div>
    </footer>
  );
}
