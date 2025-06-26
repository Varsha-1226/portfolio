import Navigation from ".././Navigation";
import SocialLinks from ".././SocialLinks";

import './index.css'

const Home = () => {
  return (
    <div className="container">
      {/* Navigation */}
      <div className="nav">

        <Navigation />
      </div>
      

      {/* Social Links */}
      

      {/* Main Content */}
      <main className="content">
        <div className="social">
            <SocialLinks />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="info">
            {/* Hello Message */}
            <div className="detail">
                  <h1 className="helo">Hello!</h1>
            </div>

            {/* Name and Wave */}
            <div className="name-wave">
                <div>
                <h1 className="text-4xl lg:text-6xl font-semibold text-black">
                  I'm{" "}
                  <span className="text-text-gray font-bold relative">
                    Anish
                    {/* Wave decoration */}
                    <svg
                      className="absolute -bottom-2 left-0 w-full h-4 lg:h-6"
                      viewBox="0 0 338 83"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        x1="0"
                        y1="40"
                        x2="100%"
                        y2="40"
                        stroke="black"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </h1>
                </div>

                {/* Hand Wave Animation */}
                <div className="wave">
                  <svg
                    className="w-16 lg:w-20 h-16 lg:h-20"
                    viewBox="0 0 338 83"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M294.759 31.6606C296.066 30.747 298.037 30.9222 299.21 31.8914L297.864 29.935C296.781 28.3901 297.169 26.7187 298.715 25.6341C300.261 24.5537 304.643 27.4585 304.643 27.4585C303.55 25.8983 303.754 23.921 305.315 22.8267C306.875 21.7365 309.027 22.1134 310.12 23.6763L324.609 44.1446L322.763 62.0474L307.352 56.427L293.91 36.4968C292.807 34.9269 293.188 32.7619 294.759 31.6606Z"
                      fill="#EF9645"
                    />
                    <path
                      d="M291.747 43.0474C291.747 43.0474 290.173 40.7531 292.469 39.1804C294.762 37.6078 296.335 39.9007 296.335 39.9007L303.636 50.5493C303.888 50.1293 304.163 49.7149 304.471 49.3061L294.336 34.5292C294.336 34.5292 292.764 32.2362 295.058 30.6636C297.351 29.0909 298.924 31.3838 298.924 31.3838L308.456 45.2848C308.81 44.9955 309.173 44.7049 309.547 44.4199L298.497 28.3025C298.497 28.3025 296.924 26.0095 299.219 24.4368C301.512 22.8642 303.084 25.1571 303.084 25.1571L314.135 41.2718C314.541 41.0229 314.942 40.8073 315.346 40.5793L305.017 25.5173C305.017 25.5173 303.444 23.2243 305.737 21.6516C308.03 20.079 309.603 22.3719 309.603 22.3719L320.524 38.2988L322.184 40.7211C315.304 45.4405 314.649 54.3189 318.58 60.052C319.366 61.1992 320.513 60.4135 320.513 60.4135C315.795 53.5319 317.235 45.7993 324.117 41.0813L322.088 30.9277C322.088 30.9277 321.33 28.2524 324.004 27.4932C326.68 26.7354 327.439 29.4107 327.439 29.4107L329.782 36.3688C330.711 39.1276 331.7 41.8766 333.008 44.4769C336.703 51.8188 334.496 60.9433 327.529 65.7225C319.93 70.9328 309.542 68.9958 304.33 61.398L291.747 43.0474Z"
                      fill="#E8EC3E"
                    />
                  </svg>
            </div>

            </div>
            

            {/* Tagline */}
            <div className="space-y-4">
              <p className="text-xl lg:text-3xl font-light text-black leading-relaxed">
                UI/UX Designer, Front-End Developer & Thinker.
                <br />
                Based in India.
              </p>
            </div>
            </div>

            {/* Action Buttons */}
            <div className="button">
              <button className="download-button">
                <span className="text-white font-bold text-lg lg:text-xl">
                  Download CV
                </span>
              </button>
              <button className="get-touch-button">
                <span className="text-white font-bold text-lg lg:text-xl">
                  Get in Touch!
                </span>
              </button>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
              {/* Yellow Background Circle */}
              <div className="absolute inset-0 bg-hero-yellow rounded-full transform rotate-12 shadow-2xl"></div>

              {/* Profile Image */}
              <div className="">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0da2fb3ac0726318557abdf40ab19950657b9c0a"
                  alt="Anish Kumar Sinha"
                  className="profile-img"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4">
          <div className="email-text">
            sinhaanishkumar@outlook.com
          </div>
          <div className="w-px h-16 lg:h-20 bg-black"></div>
        </div>
      </main>
    </div>
  );
};

export default Home;
