import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroImage from "./assets/hero.png";
import companyLogo from "./assets/company_logo1.png";
import Squares from "./backgrounds/Squares/Squares.jsx";
  


const App = () => {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate('/form');
  };
  
  const handleProductClick = () => {
    navigate('/product');
  };

  const handleNavClick = (path) => {
    navigate(path);
  };

  return (
    <div className="font-sans bg-black text-white min-h-screen overflow-x-hidden overscroll-none">
      
      

      {/* Segment #2 */}
      <div className="relative w-screen h-screen bg-gradient-to-br from-black via-[#1a1a1a] to-black overflow-hidden flex flex-col items-center justify-center">
        <img src={heroImage} alt="Diamond" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] opacity-90 z-20 max-w-full" />
        
        {/* Segment #1: Nav Bar*/}
        <div className='w-lvw bg-transparent absolute top-0 flex p-3 gap-5 items-center'>
          
          <img src={companyLogo} alt="" className='border-solid border-3 border-black cursor-pointer w-25' onClick={() => handleNavClick('/')}/>
          <div className=' text-white bg-transprent flex gap-10 justify-start w-lvw'>
            <button className='cursor-pointer hover:scale-120 font-bold'>Home</button>
            <button className='cursor-pointer hover:scale-120 font-bold'>Contact Us</button>
            <button className='cursor-pointer hover:scale-120 font-bold'>Products</button>
            <button className='cursor-pointer hover:scale-120 font-bold  p-5'>Apply</button>
          </div>
        </div>


        {/* <h1 className="absolute top-[35%] left-1/2 transform -translate-x-1/2 text-8xl font-black text-[#ff6b35] tracking-[0.5em] z-10 drop-shadow-[0_0_30px_rgba(255,107,53,0.5)]">テックインディア</h1>
        <h2 className="absolute top-1/4 left-[10%] text-4xl font-black tracking-wide z-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">WORK HARD</h2>
        <h2 className="absolute bottom-1/4 right-[10%] text-4xl font-black tracking-wide text-[#ff6b35] z-10 drop-shadow-[0_0_20px_rgba(255,107,53,0.5)]">PLAY HARD</h2>
        <div className="absolute bottom-[15%] left-1/2 transform -translate-x-1/2 text-[120px] font-black text-white/10 tracking-[0.3em] z-0 select-none">TECDIA</div>
        <div className="absolute bottom-[8%] left-1/2 transform -translate-x-1/2 text-center text-lg leading-relaxed text-gray-300 z-10">
          Your <span className="text-[#ff6b35] font-bold">Let’s do this</span> will change the world.
          <br />
          Surprise the world with unconventional ideas and team power.
        </div> */}

        {/* Background gradient blurs */}
        <div className="absolute w-[300px] h-[300px] bg-[#ff4444] top-[20%] left-[-150px] rounded-full blur-[100px] opacity-60 z-0"></div>
        <div className="absolute w-[250px] h-[250px] bg-[#ff6b35] top-[40%] left-[-100px] rounded-full blur-[100px] opacity-60 z-0"></div>
        <div className="absolute w-[200px] h-[200px] bg-[#ffa500] top-[60%] left-[-50px] rounded-full blur-[100px] opacity-60 z-0"></div>
        <div className="absolute w-[300px] h-[300px] bg-[#4444ff] top-[20%] right-[-150px] rounded-full blur-[100px] opacity-60 z-0"></div>
        <div className="absolute w-[250px] h-[250px] bg-[#8a2be2] top-[40%] right-[-100px] rounded-full blur-[100px] opacity-60 z-0"></div>
        <div className="absolute w-[200px] h-[200px] bg-[#9400d3] top-[60%] right-[-50px] rounded-full blur-[100px] opacity-60 z-0"></div>
      </div>

      

      {/* Segment #3 */}
      <section className="bg-gradient-to-br from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] px-10 py-20 text-center relative overflow-hidden">
        <div className="relative z-20 max-w-3xl mx-auto">
          
          {/* Tag Buttons */}
          <div className="flex justify-center gap-4 mb-10 flex-wrap">
            <button className="px-5 py-2 border border-[#ff9900] bg-[#ff990026] text-[#ff9900] text-sm rounded-full font-semibold hover:brightness-110 transition">
              3D printing
            </button>
            <button className="px-5 py-2 border border-[#ff9900] bg-[#ff990026] text-[#ff9900] text-sm rounded-full font-semibold hover:brightness-110 transition">
              Play Hard
            </button>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tight leading-tight">
            What is <span className="text-[#ff9900]">Tecdia</span>?
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
            We are a manufacturer that supplies products necessary for the future,
            from 5G, data centers, and space development to smartphones and 3D printing.
            With the motto "<span className="text-[#ff9900] font-bold">Work Hard Play Hard</span>,"
            we are a company that pursues fulfillment not only at work but also in private life.
          </p>

          {/* Bottom Buttons */}
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="px-6 py-2 text-sm font-semibold text-[#ff9900] border border-[#ff9900] bg-[#ff990026] rounded-full hover:brightness-110 transition">
              Work Hard
            </button>
            <button
              className="px-6 py-2 text-sm font-bold text-white bg-[#ff5722] rounded-md hover:-translate-y-0.5 transition"
              onClick={handleProductClick}
            >
              Company Profile
            </button>
            <button
              className="px-6 py-2 text-sm font-bold text-white bg-[#ff5722] rounded-md hover:-translate-y-0.5 transition"
              onClick={handleApplyClick}
            >
              Apply Now ↗
            </button>
            <button className="px-6 py-2 text-sm font-semibold text-[#ff9900] border border-[#ff9900] bg-[#ff990026] rounded-full hover:brightness-110 transition">
              5G Data
            </button>
          </div>
        </div>
      </section>

      {/* Segment #4 */}
      <section className="bg-white text-black px-10 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 uppercase tracking-wide">
          President Vision
        </h2>
        <div className="max-w-3xl mx-auto text-[1.1rem] leading-relaxed text-gray-600">
          <p>
            Leading the future of technology with innovative solutions and a commitment to excellence.
            Our vision drives us to create products that shape tomorrow's digital landscape.
          </p>
        </div>
      </section>
      
<section className="relative text-white px-10 py-20 text-center overflow-hidden">
  {/* Squares background */}
  <div className="absolute inset-0 z-0">
    <Squares 
      speed={0.5} 
      squareSize={40}
      direction="diagonal"
      borderColor="#fff"
      hoverFillColor="#222"
    />
  </div>

  {/* Foreground content */}
  <div className="relative z-10">
    {/* Numbers Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5 max-w-5xl mx-auto">
      
      <h2 className="md:text-5xl font-extrabold tracking-tight xl:col-span-2 lg:col-span-2 text-white">
        <span className="text-blue-300 xl:text-9xl lg:text-8xl md:text-8xl sm:text-[83px] text-[80px]">TECDIA</span><br />
        <span className="xl:text-5xl lg:text-4xl md:text-[40px] sm:text-3xl text-4xl">in NUMBERS</span>
      </h2>

      <div className="bg-blue-500 py-12 px-8 flex flex-col items-center justify-center min-h-[150px] transition-transform hover:-translate-y-1 cursor-pointer xl:row-span-2 lg:row-span-2 shadow-lg shadow-yellow-900 rounded-4xl">
        <h3 className="text-4xl font-bold mb-2">150+</h3>
        <p className="text-base">Global Clients</p>
      </div>

      <div className="bg-yellow-500 py-12 px-8 flex flex-col items-center justify-center min-h-[150px] transition-transform hover:-translate-y-1 cursor-pointer xl:row-span-2 lg:row-span-2 shadow-lg shadow-yellow-900 rounded-4xl">
        <h3 className="text-4xl font-bold mb-2">25+</h3>
        <p className="text-base">Countries</p>
      </div>

      <div className="bg-orange-500 py-12 px-8 flex flex-col items-center justify-center min-h-[150px] transition-transform hover:-translate-y-1 cursor-pointer xl:row-span-2 lg:row-span-2 shadow-lg shadow-yellow-900 rounded-4xl">
        <h3 className="text-4xl font-bold mb-2">500+</h3>
        <p className="text-base">Products</p>
      </div>

      <div className="bg-green-500 py-12 px-8 flex flex-col items-center justify-center min-h-[150px] transition-transform hover:-translate-y-1 cursor-pointer shadow-lg shadow-yellow-900 rounded-4xl">
        <h3 className="text-4xl font-bold mb-2">15</h3>
        <p className="text-base">Years Experience</p>
      </div>

      <div className="bg-rose-800 py-12 px-8 flex flex-col items-center justify-center min-h-[150px] transition-transform hover:-translate-y-1 cursor-pointer shadow-lg shadow-yellow-900 rounded-4xl">
        <h3 className="text-4xl font-bold mb-2">99%</h3>
        <p className="text-base">Client Satisfaction</p>
      </div>

      <div className="bg-purple-500 py-12 px-8 flex flex-col items-center justify-center min-h-[150px] transition-transform hover:-translate-y-1 cursor-pointer xl:col-span-2 lg:col-span-2 sm:col-span-2 shadow-lg shadow-yellow-900 rounded-4xl">
        <h3 className="text-4xl font-bold mb-2">99%</h3>
        <p className="text-base">Client Satisfaction</p>
      </div>

    </div>
  </div>
</section>


      {/* Segement #6 */}
      <section className="bg-black text-white px-10 py-20">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#ff9900] text-center mb-20 tracking-tight">
          ORGANIZATION CULTURE
        </h2>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-6xl mx-auto items-start">
          
          {/* Left Column */}
          <div className="text-left">
            <h3 className="text-3xl font-bold leading-snug tracking-tight mb-6">
              WE WOULD LOVE<br />
              TO HEAR FROM YOU.
            </h3>
            <p className="text-gray-300 mb-9 text-base leading-relaxed">
              Feel free to reach out if you want to<br />
              collaborate with us, or simply have a chat.
            </p>
            <a
              href="mailto:contact@parthachav.com"
              className="text-[#ff9900] text-lg font-medium flex items-center gap-2 hover:text-white transition"
            >
              contact@parthachav.com →
            </a>
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 text-left">
            
            {/* Address Block */}
            <div>
              <h4 className="text-sm font-bold mb-5 text-[#ff9900] uppercase tracking-wider">
                OUR ADDRESS
              </h4>
              <div className="text-gray-300 text-sm leading-relaxed space-y-1">
                <p>Anna 1st Room,</p>
                <p>Anna 1st Room,</p>
                <p>5th floor, Olive</p>
                <p>city sector 82</p>
                <br />
                <p>1 block 1018</p>
                <p>Anna 1st Room,</p>
                <p>5th floor, Olive</p>
                <p>city sector 82</p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-bold mb-5 text-[#ff9900] uppercase tracking-wider">
                FOLLOW US
              </h4>
              <div className="flex flex-col gap-3 text-sm text-gray-300">
                <a
                  href="#"
                  className="hover:text-[#ff9900] transition"
                >
                  → Instagram
                </a>
                <a
                  href="#"
                  className="hover:text-[#ff9900] transition"
                >
                  → LinkedIn
                </a>
                <a
                  href="#"
                  className="hover:text-[#ff9900] transition"
                >
                  → Twitter
                </a>
                <a
                  href="#"
                  className="hover:text-[#ff9900] transition"
                >
                  → Facebook
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-16 mt-20 border-t border-gray-800 text-sm text-gray-500">
          TECDIA PVT LTD. All rights reserved.
        </div>
      </section>
          


        <div className="group relative cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/30 to-orange-600/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:blur-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-orange-600/20 rounded-2xl blur opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>

              <div className="relative bg-black/40 group-hover:bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-white/10 group-hover:border-pink-400/40 transition-all duration-500 h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400/0 via-pink-400/5 to-orange-600/0 group-hover:from-pink-400/10 group-hover:via-pink-400/20 group-hover:to-orange-600/10 transition-all duration-500 rounded-2xl"></div>

                <div className="relative z-10">
                  <h3 className="text-lg font-medium mb-3 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300 group-hover:drop-shadow-lg">
                    Paid acquisition rate 79.2%
                  </h3>
                  <p className="text-sm leading-relaxed mb-6 text-gray-300 group-hover:text-white transition-colors duration-300">
                    We are promoting the use of paid leave and are working to create
                    an environment where 100% of employees can take leave. Some
                    foreign employees even use their consecutive holidays and paid
                    leave to go home for nearly two weeks
                  </p>
                </div>

                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                </div>

                <div className="absolute top-4 right-4 w-2 h-2 bg-pink-400 rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-ping transition-opacity duration-300"></div>
                <div className="absolute top-8 right-8 w-1 h-1 bg-orange-400 rounded-full opacity-0 group-hover:opacity-80 group-hover:animate-pulse transition-opacity duration-500"></div>
              </div>
            </div>
    </div>
  );
};

export default App;
