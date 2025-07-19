import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    // Simulate form submission
    setTimeout(() => {
      if (formData.email.includes('@')) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitError('Please enter a valid email address');
      }
      setIsSubmitting(false);
    }, 1500);
  };

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
      padding: '60px 40px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    pageTitle: {
      fontSize: '3rem',
      fontWeight: 'bold',
      marginBottom: '40px',
      textAlign: 'left'
    },
    contactTitle: {
      color: '#ff9900'
    },
    contactContainer: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '40px',
      marginBottom: '60px'
    },
    infoCard: {
      backgroundColor: '#fff',
      borderRadius: '20px',
      padding: '40px',
      color: '#000'
    },
    infoTitle: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      marginBottom: '30px',
      color: '#ff5722'
    },
    infoItem: {
      marginBottom: '25px',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '15px'
    },
    infoIcon: {
      color: '#ff9900',
      fontSize: '1.5rem',
      marginTop: '3px'
    },
    infoContent: {
      flex: 1
    },
    infoLabel: {
      fontSize: '1rem',
      color: '#666',
      marginBottom: '5px'
    },
    infoValue: {
      fontSize: '1.1rem',
      fontWeight: 'bold'
    },
    formCard: {
      backgroundColor: '#fff',
      borderRadius: '20px',
      padding: '40px',
      color: '#000'
    },
    formTitle: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      marginBottom: '30px',
      color: '#ff5722'
    },
    formGroup: {
      marginBottom: '25px'
    },
    formLabel: {
      display: 'block',
      fontSize: '1rem',
      marginBottom: '10px',
      fontWeight: 'bold',
      color: '#333'
    },
    formInput: {
      width: '100%',
      padding: '15px',
      fontSize: '1rem',
      border: '2px solid #ddd',
      borderRadius: '8px',
      transition: 'all 0.3s ease'
    },
    formTextarea: {
      width: '100%',
      padding: '15px',
      fontSize: '1rem',
      border: '2px solid #ddd',
      borderRadius: '8px',
      transition: 'all 0.3s ease',
      minHeight: '150px',
      resize: 'vertical'
    },
    formInputFocus: {
      borderColor: '#ff9900',
      outline: 'none'
    },
    submitButton: {
      backgroundColor: '#ff5722',
      color: '#fff',
      padding: '15px 30px',
      border: 'none',
      borderRadius: '8px',
      fontSize: '1rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px'
    },
    submitButtonHover: {
      backgroundColor: '#e64a19'
    },
    loadingSpinner: {
      border: '4px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '50%',
      borderTop: '4px solid #ff5722',
      width: '20px',
      height: '20px',
      animation: 'spin 1s linear infinite'
    },
    successMessage: {
      color: '#4CAF50',
      marginTop: '20px',
      fontWeight: 'bold'
    },
    errorMessage: {
      color: '#ff5722',
      marginTop: '20px',
      fontWeight: 'bold'
    },
    mapContainer: {
      height: '400px',
      backgroundColor: '#fff',
      borderRadius: '20px',
      overflow: 'hidden',
      position: 'relative'
    },
    mapPlaceholder: {
      width: '100%',
      height: '100%',
      backgroundColor: '#eee',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#666',
      fontWeight: 'bold'
    },
    officeGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '30px',
      marginTop: '60px'
    },
    officeCard: {
      backgroundColor: '#fff',
      borderRadius: '20px',
      padding: '30px',
      color: '#000'
    },
    officeTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#ff5722'
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
      contactContainer: {
        gridTemplateColumns: '1fr'
      },
      infoCard: {
        padding: '30px 20px'
      },
      formCard: {
        padding: '30px 20px'
      }
    }
  };

  const handleNavClick = (path) => {
    window.location.href = path;
  };

  const handleApplyClick = () => {
    window.location.href = '/form';
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
            style={styles.navLink}
            onClick={() => handleNavClick('/product')}
          >
            Product
          </a>
          <a 
            style={styles.navLink}
            onClick={() => handleNavClick('/track')}
          >
            Track Application
          </a>
          <a 
            style={{...styles.navLink, ...styles.navLinkActive}}
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
          CONTACT <span style={styles.contactTitle}>TECDIA</span>
        </h1>
        
        <div style={styles.contactContainer}>
          {/* Contact Information */}
          <div style={styles.infoCard}>
            <h2 style={styles.infoTitle}>Get in Touch</h2>
            
            <div style={styles.infoItem}>
              <div style={styles.infoIcon}>📍</div>
              <div style={styles.infoContent}>
                <div style={styles.infoLabel}>Headquarters</div>
                <div style={styles.infoValue}>
                  123 Tech Park, Silicon Valley<br />
                  San Francisco, CA 94107<br />
                  United States
                </div>
              </div>
            </div>
            
            <div style={styles.infoItem}>
              <div style={styles.infoIcon}>✉️</div>
              <div style={styles.infoContent}>
                <div style={styles.infoLabel}>Email</div>
                <div style={styles.infoValue}>info@tecdia.com</div>
              </div>
            </div>
            
            <div style={styles.infoItem}>
              <div style={styles.infoIcon}>📞</div>
              <div style={styles.infoContent}>
                <div style={styles.infoLabel}>Phone</div>
                <div style={styles.infoValue}>+1 (555) 123-4567</div>
              </div>
            </div>
            
            <div style={styles.infoItem}>
              <div style={styles.infoIcon}>🕒</div>
              <div style={styles.infoContent}>
                <div style={styles.infoLabel}>Business Hours</div>
                <div style={styles.infoValue}>
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday - Sunday: Closed
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div style={styles.formCard}>
            <h2 style={styles.formTitle}>Send Us a Message</h2>
            
            <form onSubmit={handleSubmit}>
              <div style={styles.formGroup}>
                <label style={styles.formLabel} htmlFor="name">
                  Your Name
                </label>
                <input
                  style={styles.formInput}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.formLabel} htmlFor="email">
                  Email Address
                </label>
                <input
                  style={styles.formInput}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.formLabel} htmlFor="subject">
                  Subject
                </label>
                <input
                  style={styles.formInput}
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.formLabel} htmlFor="message">
                  Message
                </label>
                <textarea
                  style={styles.formTextarea}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <button 
                style={styles.submitButton}
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div style={styles.loadingSpinner}></div>
                    Sending...
                  </>
                ) : 'Send Message'}
              </button>
              
              {submitSuccess && (
                <div style={styles.successMessage}>
                  Your message has been sent successfully!
                </div>
              )}
              
              {submitError && (
                <div style={styles.errorMessage}>{submitError}</div>
              )}
            </form>
          </div>
        </div>
        
        {/* Map */}
        <div style={styles.mapContainer}>
          <div style={styles.mapPlaceholder}>
            [Interactive Map Would Appear Here]
          </div>
        </div>
        
        {/* Global Offices */}
        <h2 style={{...styles.pageTitle, fontSize: '2.5rem', margin: '60px 0 30px'}}>
          OUR <span style={styles.contactTitle}>GLOBAL OFFICES</span>
        </h2>
        
        <div style={styles.officeGrid}>
          <div style={styles.officeCard}>
            <h3 style={styles.officeTitle}>Tokyo, Japan</h3>
            <p>
              <strong>Address:</strong><br />
              TECDIA Japan, 5-6-7 Shibuya<br />
              Shibuya-ku, Tokyo 150-0002
            </p>
            <p>
              <strong>Phone:</strong> +81 3-1234-5678
            </p>
          </div>
          
          <div style={styles.officeCard}>
            <h3 style={styles.officeTitle}>Berlin, Germany</h3>
            <p>
              <strong>Address:</strong><br />
              TECDIA Europe, Friedrichstraße 100<br />
              10117 Berlin, Germany
            </p>
            <p>
              <strong>Phone:</strong> +49 30 1234567
            </p>
          </div>
          
          <div style={styles.officeCard}>
            <h3 style={styles.officeTitle}>Bangalore, India</h3>
            <p>
              <strong>Address:</strong><br />
              TECDIA India, 123 Tech Park<br />
              Whitefield, Bangalore 560066
            </p>
            <p>
              <strong>Phone:</strong> +91 80 1234 5678
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;