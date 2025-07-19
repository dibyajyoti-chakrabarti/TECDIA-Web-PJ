import React from 'react';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();
  
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
    heroSection: {
      background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
      padding: '80px 40px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    },
    heroContent: {
      maxWidth: '800px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 2
    },
    tagButtons: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      marginBottom: '40px',
      flexWrap: 'wrap'
    },
    tagButton: {
      padding: '10px 24px',
      backgroundColor: 'rgba(255, 153, 0, 0.15)',
      border: '1px solid #ff9900',
      borderRadius: '25px',
      color: '#ff9900',
      fontSize: '14px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontWeight: '500'
    },
    mainTitle: {
      fontSize: '4rem',
      fontWeight: 'bold',
      marginBottom: '30px',
      lineHeight: '1.2',
      letterSpacing: '-1px'
    },
    techdia: {
      color: '#ff9900'
    },
    description: {
      fontSize: '1.2rem',
      lineHeight: '1.7',
      marginBottom: '50px',
      maxWidth: '650px',
      margin: '0 auto 50px auto',
      color: '#ccc'
    },
    workHard: {
      color: '#ff9900',
      fontWeight: 'bold'
    },
    bottomButtons: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      flexWrap: 'wrap'
    },
    bottomButton: {
      padding: '10px 24px',
      backgroundColor: 'rgba(255, 153, 0, 0.15)',
      border: '1px solid #ff9900',
      borderRadius: '25px',
      color: '#ff9900',
      fontSize: '14px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontWeight: '500'
    },
    companyProfile: {
      backgroundColor: '#ff5722',
      color: '#fff',
      padding: '12px 25px',
      border: 'none',
      borderRadius: '5px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    presidentSection: {
      backgroundColor: '#fff',
      color: '#000',
      padding: '60px 40px',
      textAlign: 'center'
    },
    presidentTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '30px',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },
    presidentContent: {
      maxWidth: '800px',
      margin: '0 auto',
      fontSize: '1.1rem',
      lineHeight: '1.6',
      color: '#666'
    },
    numbersSection: {
      backgroundColor: '#000',
      padding: '80px 40px',
      textAlign: 'center'
    },
    numbersTitle: {
      fontSize: '3rem',
      fontWeight: 'bold',
      marginBottom: '60px',
      letterSpacing: '-1px'
    },
    numbersGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: '30px',
      maxWidth: '1000px',
      margin: '0 auto'
    },
    numberCard: {
      borderRadius: '20px',
      padding: '50px 30px',
      minHeight: '150px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'transform 0.3s ease',
      cursor: 'pointer'
    },
    blueCard: {
      backgroundColor: '#2196F3'
    },
    whiteCard: {
      backgroundColor: '#fff',
      color: '#000'
    },
    grayCard: {
      backgroundColor: '#666'
    },
    orangeCard: {
      backgroundColor: '#ff5722'
    },
    cultureSection: {
      backgroundColor: '#000',
      padding: '80px 40px'
    },
    cultureTitle: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: '#ff9900',
      textAlign: 'center',
      marginBottom: '80px',
      letterSpacing: '-1px'
    },
    contactSection: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '80px',
      maxWidth: '1200px',
      margin: '0 auto',
      alignItems: 'start'
    },
    contactLeft: {
      textAlign: 'left'
    },
    contactTitle: {
      fontSize: '2.2rem',
      fontWeight: 'bold',
      marginBottom: '25px',
      lineHeight: '1.3',
      letterSpacing: '-1px'
    },
    contactSubtitle: {
      color: '#ccc',
      marginBottom: '35px',
      fontSize: '1rem',
      lineHeight: '1.6'
    },
    contactEmail: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      color: '#ff9900',
      textDecoration: 'none',
      fontSize: '1.1rem',
      fontWeight: '500',
      transition: 'color 0.3s ease'
    },
    contactRight: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '50px'
    },
    contactColumn: {
      textAlign: 'left'
    },
    columnTitle: {
      fontSize: '1rem',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#ff9900',
      letterSpacing: '1px',
      textTransform: 'uppercase'
    },
    address: {
      fontSize: '0.95rem',
      lineHeight: '1.6',
      color: '#ccc',
      marginBottom: '20px'
    },
    socialLinks: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    },
    socialLink: {
      color: '#ccc',
      textDecoration: 'none',
      fontSize: '0.95rem',
      transition: 'color 0.3s ease'
    },
    footer: {
      textAlign: 'center',
      padding: '40px 20px 20px 20px',
      borderTop: '1px solid #333',
      marginTop: '80px',
      color: '#666',
      fontSize: '0.9rem'
    },
    // Mobile responsiveness
    '@media (max-width: 768px)': {
      header: {
        padding: '15px 20px'
      },
      navigation: {
        display: 'none'
      },
      heroSection: {
        padding: '60px 20px'
      },
      mainTitle: {
        fontSize: '2.8rem'
      },
      presidentSection: {
        padding: '40px 20px'
      },
      numbersSection: {
        padding: '60px 20px'
      },
      cultureSection: {
        padding: '60px 20px'
      },
      contactSection: {
        gridTemplateColumns: '1fr',
        gap: '40px'
      },
      tagButtons: {
        gap: '10px'
      },
      bottomButtons: {
        gap: '10px'
      },
      numbersGrid: {
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px'
      },
      contactRight: {
        gridTemplateColumns: '1fr',
        gap: '30px'
      }
    }
  };

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
    <div style={styles.container}>
      {/* Header - Consistent with Product page */}
      <header style={styles.header}>
        <div style={styles.logo}>
          <div style={styles.logoText}>TECINDIA</div>
          <div style={styles.flag}></div>
        </div>
        
        <nav style={styles.navigation}>
          <a 
            style={{...styles.navLink, ...styles.navLinkActive}}
            onClick={() => handleNavClick('/')}
          >
            Home
          </a>
          <a 
            style={styles.navLink}
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

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <div style={styles.tagButtons}>
            <button style={styles.tagButton}>3D printing</button>
            <button style={styles.tagButton}>Play Hard</button>
          </div>
          
          <h1 style={styles.mainTitle}>
            What is <span style={styles.techdia}>Techdia</span>?
          </h1>
          
          <p style={styles.description}>
            We are a manufacturer that supplies products necessary for the future, from 5G, data centers, and space development to smartphones and 3D printing. With the motto "<span style={styles.workHard}>Work Hard Play Hard</span>," we are a company that pursues fulfillment not only at work but also in private life.
          </p>
          
          <div style={styles.bottomButtons}>
            <button style={styles.bottomButton}>Work Hard</button>
            <button style={styles.companyProfile} onClick={handleProductClick}>Company Profile</button>
            <button style={styles.companyProfile} onClick={handleApplyClick}>Apply Now ↗</button>
            <button style={styles.bottomButton}>5G Data</button>
          </div>
        </div>
      </section>

      {/* President Vision Section */}
      <section style={styles.presidentSection}>
        <h2 style={styles.presidentTitle}>President Vision</h2>
        <div style={styles.presidentContent}>
          <p>Leading the future of technology with innovative solutions and a commitment to excellence. Our vision drives us to create products that shape tomorrow's digital landscape.</p>
        </div>
      </section>

      {/* Numbers Section */}
      <section style={styles.numbersSection}>
        <h2 style={styles.numbersTitle}>
          <span style={styles.techdia}>TECHDIA</span> in<br />NUMBERS
        </h2>
        <div style={styles.numbersGrid}>
          <div 
            style={{...styles.numberCard, ...styles.blueCard}}
            onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.target.style.transform = 'translateY(0px)'}
          >
            <h3 style={{margin: 0, fontSize: '2.5rem', marginBottom: '10px'}}>150+</h3>
            <p style={{margin: 0, fontSize: '1rem'}}>Global Clients</p>
          </div>
          <div 
            style={{...styles.numberCard, ...styles.whiteCard}}
            onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.target.style.transform = 'translateY(0px)'}
          >
            <h3 style={{margin: 0, fontSize: '2.5rem', marginBottom: '10px'}}>25+</h3>
            <p style={{margin: 0, fontSize: '1rem'}}>Countries</p>
          </div>
          <div 
            style={{...styles.numberCard, ...styles.grayCard}}
            onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.target.style.transform = 'translateY(0px)'}
          >
            <h3 style={{margin: 0, fontSize: '2.5rem', marginBottom: '10px'}}>500+</h3>
            <p style={{margin: 0, fontSize: '1rem'}}>Products</p>
          </div>
          <div 
            style={{...styles.numberCard, ...styles.orangeCard}}
            onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.target.style.transform = 'translateY(0px)'}
          >
            <h3 style={{margin: 0, fontSize: '2.5rem', marginBottom: '10px'}}>15</h3>
            <p style={{margin: 0, fontSize: '1rem'}}>Years Experience</p>
          </div>
          <div 
            style={{...styles.numberCard, ...styles.whiteCard}}
            onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.target.style.transform = 'translateY(0px)'}
          >
            <h3 style={{margin: 0, fontSize: '2.5rem', marginBottom: '10px'}}>99%</h3>
            <p style={{margin: 0, fontSize: '1rem'}}>Client Satisfaction</p>
          </div>
        </div>
      </section>

      {/* Organization Culture Section */}
      <section style={styles.cultureSection}>
        <h2 style={styles.cultureTitle}>ORGANIZATION CULTURE</h2>
        
        <div style={styles.contactSection}>
          <div style={styles.contactLeft}>
            <h3 style={styles.contactTitle}>
              WE WOULD LOVE<br />
              TO HEAR FROM YOU.
            </h3>
            <p style={styles.contactSubtitle}>
              Feel free to reach out if you want to<br />
              collaborate with us, or simply have a chat.
            </p>
            <a 
              href="mailto:contact@parthachav.com" 
              style={styles.contactEmail}
              onMouseEnter={(e) => e.target.style.color = '#fff'}
              onMouseLeave={(e) => e.target.style.color = '#ff9900'}
            >
              contact@parthachav.com →
            </a>
          </div>
          
          <div style={styles.contactRight}>
            <div style={styles.contactColumn}>
              <h4 style={styles.columnTitle}>OUR ADDRESS</h4>
              <div style={styles.address}>
                Anna 1st Room,<br />
                Anna 1st Room,<br />
                5th floor, Olive<br />
                city sector 82<br />
                <br />
                1 block 1018<br />
                Anna 1st Room,<br />
                5th floor, Olive<br />
                city sector 82
              </div>
            </div>
            
            <div style={styles.contactColumn}>
              <h4 style={styles.columnTitle}>FOLLOW US</h4>
              <div style={styles.socialLinks}>
                <a 
                  href="#" 
                  style={styles.socialLink}
                  onMouseEnter={(e) => e.target.style.color = '#ff9900'}
                  onMouseLeave={(e) => e.target.style.color = '#ccc'}
                >
                  → Instagram
                </a>
                <a 
                  href="#" 
                  style={styles.socialLink}
                  onMouseEnter={(e) => e.target.style.color = '#ff9900'}
                  onMouseLeave={(e) => e.target.style.color = '#ccc'}
                >
                  → LinkedIn
                </a>
                <a 
                  href="#" 
                  style={styles.socialLink}
                  onMouseEnter={(e) => e.target.style.color = '#ff9900'}
                  onMouseLeave={(e) => e.target.style.color = '#ccc'}
                >
                  → Twitter
                </a>
                <a 
                  href="#" 
                  style={styles.socialLink}
                  onMouseEnter={(e) => e.target.style.color = '#ff9900'}
                  onMouseLeave={(e) => e.target.style.color = '#ccc'}
                >
                  → Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div style={styles.footer}>
          TECHDIA PVT LTD. All rights reserved.
        </div>
      </section>
    </div>
  );
};

export default App;