import React, { useState } from 'react';

const Product = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "CERAMIC APPLICATION TECHNOLOGY",
      description:
        "Tecdia's main products are electronic components using ceramics. Applications include 5G communications, satellites, global data centers, and other semiconductor communications markets. We have the number one share in the global niche market.",
    },
    {
      title: "3D PRINTING SOLUTIONS",
      description:
        "Advanced 3D printing technology for manufacturing precision components. Our solutions enable rapid prototyping and production of complex geometries with superior quality and accuracy.",
    },
    {
      title: "DATA CENTER INFRASTRUCTURE",
      description:
        "Comprehensive solutions for modern data centers including cooling systems, power management, and high-performance networking components designed for maximum efficiency.",
    },
    {
      title: "SPACE TECHNOLOGY COMPONENTS",
      description:
        "Specialized components designed for space applications including satellites, spacecraft systems, and ground-based communication equipment with extreme reliability requirements.",
    },
  ];

  const handleApplyClick = () => {
    window.location.href = '/form';
  };

  const handleNavClick = (path) => {
    window.location.href = path;
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const renderSlideTitle = (title) => {
    return title.split(' ').map((word, index) => {
      let className = '';
      if (word === 'CERAMIC') className = 'text-[#ff5722]';
      else if (word === 'APPLICATION') className = 'text-gray-600';
      else if (word === 'TECHNOLOGY') className = 'text-[#ff9900]';

      return (
        <span key={index} className={className}>
          {word}
          {index < title.split(' ').length - 1 ? ' ' : ''}
        </span>
      );
    });
  };

  return (
    <div className="font-sans bg-black text-white min-h-screen overflow-x-hidden">
      {/* Header */}
      <header className="flex justify-between items-center px-10 py-5 border-b border-[#333]">
        <div className="flex items-center gap-2">
          <div className="text-lg font-bold tracking-widest">TECINDIA</div>
          <div className="w-5 h-4 bg-[#ff9900] border border-gray-300"></div>
        </div>

        <nav className="hidden md:flex gap-8 items-center">
          <a
            className="text-white text-base cursor-pointer hover:text-[#ff9900] transition"
            onClick={() => handleNavClick('/')}
          >
            Home
          </a>
          <a
            className="text-[#ff9900] text-base font-bold cursor-pointer"
            onClick={() => handleNavClick('/product')}
          >
            Product
          </a>
          <a
            className="text-white text-base cursor-pointer hover:text-[#ff9900] transition"
            onClick={() => handleNavClick('/contact')}
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-5">
          <button
            className="bg-[#ff5722] text-white px-6 py-3 rounded-md text-base font-bold cursor-pointer flex items-center gap-2 transition hover:-translate-y-0.5"
            onClick={handleApplyClick}
          >
            Apply Now ↗
          </button>

          <div className="flex flex-col gap-1 cursor-pointer">
            <div className="w-6 h-[3px] bg-white rounded-sm"></div>
            <div className="w-6 h-[3px] bg-white rounded-sm"></div>
            <div className="w-6 h-[3px] bg-white rounded-sm"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-10 py-16">
        <h1 className="text-5xl font-bold mb-16 text-left">
          TECDIA'S <span className="text-[#ff9900]">BUSINESS OPERATIONS</span>
        </h1>

        {/* Slider Container */}
        <div className="relative max-w-[1200px] mx-auto">
          <div className="bg-white text-black rounded-[20px] px-10 py-16 min-h-[400px] flex items-center relative">
            <div className="flex flex-col lg:flex-row items-center gap-16 w-full">
              {/* Left */}
              <div className="flex-1">
                <h2 className="text-4xl font-bold leading-tight mb-6">
                  {renderSlideTitle(slides[currentSlide].title)}
                </h2>
                <p className="text-[1.1rem] leading-relaxed text-gray-600 max-w-[500px]">
                  {slides[currentSlide].description}
                </p>
              </div>

              {/* Right */}
              <div className="flex-1 flex justify-end items-center">
                <button className="bg-red-600 text-white px-5 py-3 rounded-md text-base font-bold flex items-center gap-2 transition hover:-translate-y-0.5">
                  ▶ YouTube ↗
                </button>
              </div>
            </div>

            {/* Arrows */}
            <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between pointer-events-none">
              <button
                className="w-[60px] h-[60px] rounded-full bg-[#ff5722] text-white text-2xl flex items-center justify-center pointer-events-auto ml-[-100px] transition hover:scale-105"
                onClick={prevSlide}
              >
                ←
              </button>
              <button
                className="w-[60px] h-[60px] rounded-full bg-[#ff5722] text-white text-2xl flex items-center justify-center pointer-events-auto mr-[-100px] transition hover:scale-105"
                onClick={nextSlide}
              >
                →
              </button>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-4 mt-10">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full cursor-pointer transition ${
                  index === currentSlide ? 'bg-[#ff9900]' : 'bg-gray-500'
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Product;
