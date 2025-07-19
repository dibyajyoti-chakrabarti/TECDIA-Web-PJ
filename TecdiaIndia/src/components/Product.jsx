import React, { useState } from 'react';

const Product = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "CERAMIC APPLICATION TECHNOLOGY",
      description: "Tecdia's main products are electronic components using ceramics. Applications include 5G communications, satellites, global data centers, and other semiconductor communications markets. We have the number one share in the global niche market."
    },
    {
      title: "3D PRINTING SOLUTIONS",
      description: "Advanced 3D printing technology for manufacturing precision components. Our solutions enable rapid prototyping and production of complex geometries with superior quality and accuracy."
    },
    {
      title: "DATA CENTER INFRASTRUCTURE", 
      description: "Comprehensive solutions for modern data centers including cooling systems, power management, and high-performance networking components designed for maximum efficiency."
    },
    {
      title: "SPACE TECHNOLOGY COMPONENTS",
      description: "Specialized components designed for space applications including satellites, spacecraft systems, and ground-based communication equipment with extreme reliability requirements."
    }
  ];

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#000',
      color: '#fff',
      minHeight: '100vh',
      padding: 0,
      margin: 0
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 40px',
      borderBottom: '1px solid #333'
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    logoText: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      letterSpacing: '2px'
    },
    flag: {
      width: '20px',
      height: '15px',
      backgroundColor: '#ff9900',
      border: '1px solid #ccc'
    },
    navigation: {
      display: 'flex',
      gap: '30px',
      alignItems: 'center'
    },
    navLink: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'color 0.3s ease'
    },
    navLinkActive: {
      color: '#ff9900',
      fontWeight: 'bold'
    },
    applyButton: {
      backgroundColor: '#ff5722',
      color: '#fff',
      padding: '12px 25px',
      border: 'none',
      borderRadius: '5px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'all 0.3s ease'
    },
    hamburger: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      cursor: 'pointer'
    },
    hamburgerLine: {
      width: '25px',
      height: '3px',
      backgroundColor: '#fff',
      borderRadius: '2px'
    },
    mainContent: {
      padding: '60px 40px'
    },
    pageTitle: {
      fontSize: '3rem',
      fontWeight: 'bold',
      marginBottom: '60px',
      textAlign: 'left'
    },
    businessOperations: {
      color: '#ff9900'
    },
    sliderContainer: {
      position: 'relative',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    slider: {
      backgroundColor: '#fff',
      borderRadius: '20px',
      padding: '60px',
      color: '#000',
      minHeight: '400px',
      display: 'flex',
      alignItems: 'center',
      position: 'relative'
    },
    sliderContent: {
      display: 'flex',
      alignItems: 'center',
      gap: '60px',
      width: '100%'
    },
    leftContent: {
      flex: 1
    },
    slideTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      lineHeight: '1.2',
      marginBottom: '30px'
    },
    ceramic: {
      color: '#ff5722'
    },
    application: {
      color: '#666'
    },
    technology: {
      color: '#ff9900'
    },
    slideDescription: {
      fontSize: '1.1rem',
      lineHeight: '1.6',
      color: '#666',
      maxWidth: '500px'
    },
    rightContent: {
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    youtubeButton: {
      backgroundColor: '#ff0000',
      color: '#fff',
      padding: '12px 20px',
      border: 'none',
      borderRadius: '5px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'all 0.3s ease'
    },
    navigationButtons: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      pointerEvents: 'none'
    },
    navButton: {
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      backgroundColor: '#ff5722',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '24px',
      color: '#fff',
      transition: 'all 0.3s ease',
      pointerEvents: 'auto'
    },
    prevButton: {
      marginLeft: '-100px'
    },
    nextButton: {
      marginRight: '-100px'
    },
    dots: {
      display: 'flex',
      justifyContent: 'center',
      gap: '15px',
      marginTop: '40px'
    },
    dot: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      backgroundColor: '#666',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    dotActive: {
      backgroundColor: '#ff9900'
    },
    '@media (max-width: 768px)': {
      header: {
        padding: '15px 20px'
      },
      navigation: {
        display: 'none'
      },
      mainContent: {
        padding: '40px 20px'
      },
      pageTitle: {
        fontSize: '2rem'
      },
      slider: {
        padding: '40px 20px'
      },
      sliderContent: {
        flexDirection: 'column',
        gap: '30px'
      },
      slideTitle: {
        fontSize: '2rem'
      },
      navigationButtons: {
        display: 'none'
      }
    }
  };

  const handleApplyClick = () => {
    // For router integration, replace with: navigate('/form');
    window.location.href = '/form';
  };

  const handleNavClick = (path) => {
    // For router integration, replace with: navigate(path);
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
    const words = title.split(' ');
    return words.map((word, index) => {
      let style = {};
      if (word === 'CERAMIC') style = styles.ceramic;
      else if (word === 'APPLICATION') style = styles.application;
      else if (word === 'TECHNOLOGY') style = styles.technology;
      
      return (
        <span key={index} style={style}>
          {word}{index < words.length - 1 ? ' ' : ''}
        </span>
      );
    });
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logo}>
          <div style={styles.logoText}>TECINDIA</div>
          <div style={styles.flag}></div>
        </div>
        
        <nav style={styles.navigation}>
          <a 
            style={styles.navLink} 
            onClick={() => handleNavClick('/')}
          >
            Home
          </a>
          <a 
            style={{...styles.navLink, ...styles.navLinkActive}}
            onClick={() => handleNavClick('/product')}
          >
            Product
          </a>
          <a 
            style={styles.navLink}
            onClick={() => handleNavClick('/contact')}
          >
            Contact
          </a>
        </nav>
        
        <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
          <button style={styles.applyButton} onClick={handleApplyClick}>
            Apply Now ↗
          </button>
          
          <div style={styles.hamburger}>
            <div style={styles.hamburgerLine}></div>
            <div style={styles.hamburgerLine}></div>
            <div style={styles.hamburgerLine}></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={styles.mainContent}>
        <h1 style={styles.pageTitle}>
          TECDIA'S <span style={styles.businessOperations}>BUSINESS OPERATIONS</span>
        </h1>
        
        <div style={styles.sliderContainer}>
          <div style={styles.slider}>
            <div style={styles.sliderContent}>
              <div style={styles.leftContent}>
                <h2 style={styles.slideTitle}>
                  {renderSlideTitle(slides[currentSlide].title)}
                </h2>
                <p style={styles.slideDescription}>
                  {slides[currentSlide].description}
                </p>
              </div>
              
              <div style={styles.rightContent}>
                <button style={styles.youtubeButton}>
                  ▶ YouTube ↗
                </button>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <div style={styles.navigationButtons}>
              <button 
                style={{...styles.navButton, ...styles.prevButton}}
                onClick={prevSlide}
              >
                ←
              </button>
              <button 
                style={{...styles.navButton, ...styles.nextButton}}
                onClick={nextSlide}
              >
                →
              </button>
            </div>
          </div>
          
          {/* Dots Navigation */}
          <div style={styles.dots}>
            {slides.map((_, index) => (
              <div
                key={index}
                style={{
                  ...styles.dot,
                  ...(index === currentSlide ? styles.dotActive : {})
                }}
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