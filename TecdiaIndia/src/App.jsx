import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import LanguageToggle from "./components/LanguageToggle";
import Crystal3D from "./components/Crystal3D";
import Ballpit from "./backgrounds/Ballpit.jsx";
import { Laptop, Calendar, Clock, Umbrella } from "lucide-react";
import LoaderKatakana from "./components/LoaderKatakana";
import PresidentVision from "./components/PresidentVision";
import Squares from "./backgrounds/Squares.jsx";

const translations = {
  en: {
    logoText: "TECDIA",
    menuButton: "MENU",
    close: "CLOSE",
    menuLeft: ["NEWS", "STAFF & CAST", "MOVIE", "MUSIC"],
    menuRight: ["INTRODUCTION", "CHARACTER"],
    heroTitle: "TO BE HERO X",
    apply: "Apply Now",
    landingpara: "Your Let's do this will change the world. Surprise the world with unconventional ideas and team power.",
    join: "Come Join Us",
  },
  jp: {
    logoText: "テクディア",
    menuButton: "メニュー",
    close: "閉じる",
    menuLeft: ["ニュース", "スタッフ＆キャスト", "映画", "音楽"],
    menuRight: ["イントロダクション", "キャラクター"],
    heroTitle: "トゥー・ビー・ヒーローX",
    apply: "申し込む",
    landingpara: "あなたの「やってみよう」が世界を変える。型破りなアイデアとチームパワーで世界を驚かせよう。",
    join: "参加しよう",
  },
  cn: {
    logoText: "特克迪亚",
    menuButton: "菜单",
    close: "关闭",
    menuLeft: ["新闻", "工作人员和演员", "电影", "音乐"],
    menuRight: ["介绍", "角色"],
    heroTitle: "成为英雄X",
    apply: "立即申请",
    landingpara: "你的“让我们来做”将改变世界。用非常规的想法和团队力量来惊艳世界。",
    join: "来加入我们",
  },
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [fontSize, setFontSize] = useState("9rem");
  const [language, setLanguage] = useState("en");
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate('/form');
  };
  
  const handleProductClick = () => {
    navigate('/product');
  };

  const t = translations[language];

  

  // Auto-detect browser language on first load
  useEffect(() => {
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith("ja")) {
      setLanguage("jp");
    } else if (browserLang.startsWith("zh")) {
      setLanguage("cn");
    } else {
      setLanguage("en");
    }
  }, []);
  const [loaderPhase, setLoaderPhase] = useState(1);
  
  useEffect(() => {
    let timer;
    if (loaderPhase === 1) {
      timer = setTimeout(() => setLoaderPhase(2), 800); // Japanese: faster
    } else if (loaderPhase === 2) {
      timer = setTimeout(() => setLoaderPhase(3), 1500); // English: slower
    }
    return () => clearTimeout(timer);
  }, [loaderPhase]);

  

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const totalHeight = windowHeight + rect.height;
        const visibleTop = Math.min(Math.max(0, windowHeight - rect.top), totalHeight);
        const scrollProgress = visibleTop / totalHeight;
        setProgress(scrollProgress);
      } else if (rect.bottom <= 0) {
        setProgress(1);
      } else if (rect.top >= windowHeight) {
        setProgress(0);
      }
    };

    const updateFontSize = () => {
      const screenWidth = window.innerWidth;
      const maxSize = screenWidth < 480 ? 4 : screenWidth < 850 ? 9 : 15;
      const minSize = screenWidth < 480 ? 1.2 : screenWidth < 850 ? 1.3 : 1.5;
      const size = maxSize - (maxSize - minSize) * progress;
      setFontSize(`${size}rem`);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateFontSize);

    const update = () => {
      handleScroll();
      updateFontSize();
    };

    update();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateFontSize);
    };
  }, [progress]);

// if (loaderPhase === 1) {
//     return <LoaderKatakana text="テクディア" speed={45} characterSet="katakana" subtitle="Tecdia - Recruiting in India" style={{position: "fixed"}}/>;
//   }

//   if (loaderPhase === 2) {
//     return <LoaderKatakana text="Tecdia" speed={110} characterSet="latin" subtitle="Tecdia - Recruiting in India" style={{position: "fixed"}}/>;
//   }
  return (
    <div className="page">
      {/* Menu Button */}
      <div className="ballpit-container">
        <Ballpit />
      </div>
      {!menuOpen && (
        <div className="menu-btn" onClick={() => setMenuOpen(true)}>
          <div className="menu-lines" />
          <div className="menu-lines" />
          <div className="menu-label" style={{color:"white"}}>{t.menuButton}</div>
        </div>
      )}

      {/* Fullscreen Menu Overlay */}
      <div className={`fullscreen-menu ${menuOpen ? "show" : ""}`}>
        {menuOpen && (
          <div className="close-btn" onClick={() => setMenuOpen(false)}>
            <div className="close-icon">✕</div>
            <div className="close-text">{t.close}</div>
          </div>
        )}
        <div className="menu-content">
          <div className="menu-left">
            <ul>
              {t.menuLeft.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="menu-right">
            <ul>
              {t.menuRight.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <div className="logo">
              <span className="logo-text">{t.heroTitle}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Language Toggle */}
      <div style={{ position: "fixed", top: "20px", right: "20px", zIndex: 1000 }}>
        <LanguageToggle onLanguageChange={setLanguage} />
      </div>
      <a
        href="#apply"
        className={`apply-btn ${progress > 0.5 ? "small" : ""}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {t.apply} <span className="arrow">↗</span>
      </a>

      {/* Scroll Text */}
      <div
        className={`scroll-text ${progress === 1 ? "navbar-style" : ""}`}
        style={{
          top: `${53 - progress * 50}%`,
          transform: `translateY(-${50 - progress * 50}%)`,
          fontSize: fontSize, 
        }}
      >
        <span>{t.logoText} </span>
        
      </div>
      



      <section ref={sectionRef} className="landing-section" >
        <div style={{display:'flex', flexDirection: 'column', gap: '20px'}}><p className="landing-para">{t.landingpara} 
        </p><button className="join-us">{t.join}</button></div>
      <div>
      <img
          src="/ChatGPT_Image_Jul_23__2025__01_35_23_PM-removebg-preview.png"
          alt="Lady Greeting"
          className="greeting-image"
        />
      </div>
      </section>
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
      <section className="content-section" >
        <div className="relative w-full">
        {/* Header Section */}
        <div className="relative pt-16 pb-8 text-center px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-2 text-white tracking-wider">
            TECDIA'S
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent tracking-wider">
            ORGANIZATION CULTURE
          </h2>
          <div className="inline-block px-6 py-2 rounded-full border border-gray-500 bg-black/20 backdrop-blur-sm">
            <span className="text-white text-lg md:text-xl lg:text-2xl font-light tracking-wide">
              Fusion of India & Japan
            </span>
          </div>
        </div>

        {/* Divider */}
        {/* <div className="w-full h-px bg-gray-500 my-16"></div> */}
        <div>
          This needs to be done <br />
          This needs to be done <br />
          This needs to be done <br />
          This needs to be done <br />
          This needs to be done <br />
          This needs to be done <br />
        </div>

        {/* Work-life Balance Section */}
        <div className="relative px-4 md:px-8 py-16">
          {/* Background Animated Blurred Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Left side blurs */}
            <div className="absolute left-0 top-1/4 -translate-x-1/2 opacity-30">
              <div className="w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
            </div>
            <div className="absolute left-10 bottom-1/4 opacity-25">
              <div className="w-96 h-96 bg-purple-600 rounded-full blur-3xl"></div>
            </div>

            {/* Right side blurs */}
            <div className="absolute right-0 top-1/3 translate-x-1/2 opacity-30">
              <div className="w-80 h-80 bg-pink-500 rounded-full blur-3xl"></div>
            </div>
            <div className="absolute right-20 bottom-1/3 opacity-25">
              <div className="w-64 h-64 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
            </div>
          </div>

          <div className="relative z-10 text-center mb-16">
            <div className="inline-block px-8 py-3 rounded-full border border-gray-500 bg-black/20 backdrop-blur-md mb-6">
              <span className="text-white text-2xl md:text-3xl font-light">
                Work-life balance
              </span>
            </div>
            <p className="max-w-5xl mx-auto text-base md:text-lg leading-relaxed px-4 text-gray-200">
              A company must be a place that enriches and enriches the lives of
              its employees. Therefore, we want employees to value not only
              their work, but also their private life, including their family
              and hobbies. In order to realize the work-life balance for each
              employee, we are actively promoting awareness-raising activities
              and establishing various systems.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
            {/* Card 1 - Monthly overtime */}
            <div className="group relative cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:blur-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl blur opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>

              {/* Card content */}
              <div className="relative bg-black/40 group-hover:bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-white/10 group-hover:border-blue-400/40 transition-all duration-500 h-80 overflow-hidden">
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 via-blue-400/5 to-purple-600/0 group-hover:from-blue-400/10 group-hover:via-blue-400/20 group-hover:to-purple-600/10 transition-all duration-500 rounded-2xl"></div>

                <div className="relative z-10">
                  <h3 className="text-lg font-medium mb-3 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300 group-hover:drop-shadow-lg">
                    Monthly overtime hours: 4.8 hours
                  </h3>
                  <p className="text-sm leading-relaxed mb-6 text-gray-300 group-hover:text-white transition-colors duration-300">
                    We are implementing activities to reduce overtime work and
                    encourage employees to leave work on time. Our corporate culture
                    values employees who can work efficiently and achieve high
                    results within the allotted time
                  </p>
                </div>

                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                  <Laptop className="w-12 h-12 text-white/70 group-hover:text-blue-400 group-hover:drop-shadow-lg transition-all duration-300" strokeWidth={1.5} />
                </div>

                {/* Floating particles effect */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-ping transition-opacity duration-300"></div>
                <div className="absolute top-8 right-8 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-80 group-hover:animate-pulse transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Card 2 - Days off */}
            <div className="group relative cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/30 to-blue-600/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:blur-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-600/20 rounded-2xl blur opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>

              <div className="relative bg-black/40 group-hover:bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-white/10 group-hover:border-green-400/40 transition-all duration-500 h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/0 via-green-400/5 to-blue-600/0 group-hover:from-green-400/10 group-hover:via-green-400/20 group-hover:to-blue-600/10 transition-all duration-500 rounded-2xl"></div>

                <div className="relative z-10">
                  <h3 className="text-lg font-medium mb-3 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300 group-hover:drop-shadow-lg">
                    126 days off per year
                  </h3>
                  <p className="text-sm leading-relaxed mb-6 text-gray-300 group-hover:text-white transition-colors duration-300">
                    Two days off per week (Saturday, Sunday, and public holidays).
                    Summer holidays, year-end and New Year holidays, annual paid
                    holidays, special holidays for special occasions, etc.
                  </p>
                </div>

                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                  <Umbrella className="w-12 h-12 text-white/70 group-hover:text-green-400 group-hover:drop-shadow-lg transition-all duration-300" strokeWidth={1.5} />
                </div>

                <div className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-ping transition-opacity duration-300"></div>
                <div className="absolute top-8 right-8 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-80 group-hover:animate-pulse transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Card 3 - Paid acquisition */}
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
                  <Calendar className="w-12 h-12 text-white/70 group-hover:text-pink-400 group-hover:drop-shadow-lg transition-all duration-300" strokeWidth={1.5} />
                </div>

                <div className="absolute top-4 right-4 w-2 h-2 bg-pink-400 rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-ping transition-opacity duration-300"></div>
                <div className="absolute top-8 right-8 w-1 h-1 bg-orange-400 rounded-full opacity-0 group-hover:opacity-80 group-hover:animate-pulse transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Card 4 - Flextime */}
            <div className="group relative cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-600/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:blur-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-600/20 rounded-2xl blur opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>

              <div className="relative bg-black/40 group-hover:bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-white/10 group-hover:border-purple-400/40 transition-all duration-500 h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/0 via-purple-400/5 to-blue-600/0 group-hover:from-purple-400/10 group-hover:via-purple-400/20 group-hover:to-blue-600/10 transition-all duration-500 rounded-2xl"></div>

                <div className="relative z-10">
                  <h3 className="text-lg font-medium mb-3 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300 group-hover:drop-shadow-lg">
                    Flextime system
                  </h3>
                  <p className="text-sm leading-relaxed mb-6 text-gray-300 group-hover:text-white transition-colors duration-300">
                    This system allows employees to freely adjust their start and
                    finish times, with a daily working time of 7.45 hours. *This
                    system does not apply to some occupations.
                  </p>
                </div>

                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                  <Clock className="w-12 h-12 text-white/70 group-hover:text-purple-400 group-hover:drop-shadow-lg transition-all duration-300" strokeWidth={1.5} />
                </div>

                <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-ping transition-opacity duration-300"></div>
                <div className="absolute top-8 right-8 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-80 group-hover:animate-pulse transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Certification Section */}
        <div className="relative px-4 md:px-8 py-16">
          {/* Background Blurred Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute left-10 top-1/4 opacity-25">
              <div className="w-80 h-80 bg-yellow-500 rounded-full blur-3xl"></div>
            </div>
            <div className="absolute right-10 bottom-1/4 opacity-25">
              <div className="w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
              <div className="w-64 h-64 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
            </div>
          </div>

          <div className="relative z-10 text-center mb-8">
            <span className="text-2xl md:text-3xl font-light bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              CERTIFIED AS
            </span>
          </div>

          <div className="relative z-10 text-center mb-12">
            <div className="inline-block px-6 md:px-8 py-3 md:py-4 rounded-full border border-gray-500 bg-black/20 backdrop-blur-md">
              <span className="text-white text-xl md:text-2xl lg:text-3xl font-light">
                Minato Ward Work-Life Balance Promotion Company
              </span>
            </div>
          </div>

          {/* Certification Card */}
          <div className="max-w-6xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-pink-500/20 rounded-3xl blur opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="relative bg-black/40 backdrop-blur-2xl rounded-3xl p-6 md:p-8 lg:p-12 border border-white/10">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                  {/* Logo/Certificate Visual */}
                  <div className="flex-shrink-0">
                    <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
                      {/* Glassmorphism background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-green-400/20 to-pink-400/20 rounded-2xl backdrop-blur-xl border border-white/10"></div>

                      {/* Logo content */}
                      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-8">
                        {/* Put your Logo or Minato image */}
                        <img src="./minato.png" alt="Minato" className="max-w-full max-h-full" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-white">
                      As a company that balances work and child-rearing and
                      creates a comfortable working environment for everyone,
                      Tecdia has been certified as a{" "}
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent font-medium">
                        "Minato Ward Work-Life Balance Promotion Company"
                      </span>{" "}
                      three times in a row from 2017 to 2021 and 2024. We will
                      continue to work toward becoming a better company.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional spacing for mobile */}
        <div className="pb-16"></div>
      </div>

      <div>
        <PresidentVision />
      </div>

      </section>
    </div>
  );
}
