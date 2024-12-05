const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white ">
      <div className="text-center mb-6 bg-white w-[50vw] flex-col flex justify-center items-center m-auto rounded-xl  text-black ">
        <h3 className="font-bold text-xl">
          I Shared My Knowledge To Help People
        </h3>
        <p className="text-sm">
          Connecting people with ancient wisdom for modern challenges.
        </p>
      </div>
      <div className="flex justify-center space-x-12 mb-6 ">
        <div className="bg-slate-500 rounded-full w-8 h-8 flex items-center justify-center">
          <a
            href="https://instagram.com"
            aria-label="Instagram"
            className="text-white text-xl">
            <i className="fab fa-instagram"></i>
          </a>
        </div>


        <div className="bg-slate-500 rounded-full w-8 h-8 flex items-center justify-center">
        <a
          href="https://linkedin.com"
          aria-label="LinkedIn"
          className="text-xl">
          <i className="fab fa-linkedin"></i>
        </a>
</div>

        <div className="bg-slate-500 rounded-full w-8 h-8 flex items-center justify-center">
        <a href="https://youtube.com" aria-label="YouTube" className="text-xl">
          <i className="fab fa-youtube"></i>
        </a>
</div>
        
        <div className="bg-slate-500 rounded-full w-8 h-8 flex items-center justify-center">
        <a
          href="https://facebook.com"
          aria-label="Facebook"
          className="text-xl">
          <i className="fab fa-facebook"></i>
        </a>
        </div>
        <div className="bg-slate-500 rounded-full w-8 h-8 flex items-center justify-center">
        <a href="https://twitter.com" aria-label="Twitter" className="text-xl">
          <i className="fab fa-twitter"></i>
        </a>
        </div>
        <div className="bg-slate-500 rounded-full w-8 h-8 flex items-center justify-center">
        <a
          href="https://pinterest.com"
          aria-label="Pinterest"
          className="text-xl">
          <i className="fab fa-pinterest"></i>
        </a></div>
      </div>
      <div className="text-sm mb-6 lg:flex space-x-20 space-y-10 lg:space-y-1 my-2">
        <p className="text-center mb-2 lg:w-[30vw]">
          <span className="font-semibold">Disclaimer*</span> No guarantee is
          given for best results. Results may vary from person to person due to
          uncontrollable reasons.
        </p>
        <div className="flex flex-col lg:flex-row justify-between text-center lg:text-left space-y-2 lg:space-y-0">
          <div className=" lg:w-[30vw] my-3" >
            <p>Contact: 02 0106124571</p>
            <p>Email: info@AstrologerNikhilSharma.com</p>
            <p>Skype: Nikhil.sharma0007</p>
          </div>
          <div className="lg:w-[30vw]">
            <p>Contact Astrologer Nikhil Sharma</p>
            <p>
              Dubai: Al Furjan East,{" "}
              <a href="tel:+971527912261">+971 527912261</a>
            </p>
            <p>
              India (Himachal Pradesh): Maha Laxmi Astro Dham, Kangra,{" "}
              <a href="tel:+919501183842">+91 9501183842</a>
            </p>
          </div>
        </div>
      </div>
      <div className="text-center border-t border-white pt-4">
        <p>Copyright © 2024 All Rights Reserved By TAKMON BOOST</p>
      </div>
    </footer>
  );
};

export default Footer;
