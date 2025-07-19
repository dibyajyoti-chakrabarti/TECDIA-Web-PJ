import React, { useState } from 'react';

const TrackApp = () => {
  const [applicationId, setApplicationId] = useState('');
  const [trackingData, setTrackingData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const statusStages = [
    { id: 1, name: 'Application Received', completed: true },
    { id: 2, name: 'Under Review', completed: true },
    { id: 3, name: 'Technical Assessment', completed: true },
    { id: 4, name: 'Interview Scheduled', completed: false },
    { id: 5, name: 'Final Decision', completed: false },
  ];

  const handleTrack = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    // Simulate API call
    setTimeout(() => {
      if (applicationId === 'TECDIA2023') {
        setTrackingData({
          id: 'TECDIA2023',
          position: 'Ceramic Engineer',
          date: 'October 15, 2023',
          status: 'Under Review',
          currentStage: 3,
          recruiter: 'Sarah Johnson',
          contact: 's.johnson@tecdia.com'
        });
      } else {
        setError('No application found with this ID. Please check your application number.');
      }
      setIsLoading(false);
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
    trackingTitle: {
      color: '#ff9900'
    },
    trackForm: {
      backgroundColor: '#fff',
      borderRadius: '20px',
      padding: '60px',
      color: '#000',
      marginBottom: '40px'
    },
    formGroup: {
      marginBottom: '30px'
    },
    formLabel: {
      display: 'block',
      fontSize: '1.1rem',
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
      transition: 'all 0.3s ease',
      maxWidth: '500px'
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
      transition: 'all 0.3s ease'
    },
    submitButtonHover: {
      backgroundColor: '#e64a19'
    },
    loadingSpinner: {
      border: '4px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '50%',
      borderTop: '4px solid #ff5722',
      width: '30px',
      height: '30px',
      animation: 'spin 1s linear infinite',
      margin: '20px auto'
    },
    errorMessage: {
      color: '#ff5722',
      marginTop: '20px',
      fontWeight: 'bold'
    },
    resultsContainer: {
      backgroundColor: '#fff',
      borderRadius: '20px',
      padding: '60px',
      color: '#000'
    },
    resultsHeader: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '30px',
      color: '#ff5722'
    },
    resultsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '30px',
      marginBottom: '40px'
    },
    resultItem: {
      marginBottom: '20px'
    },
    resultLabel: {
      fontSize: '0.9rem',
      color: '#666',
      marginBottom: '5px'
    },
    resultValue: {
      fontSize: '1.2rem',
      fontWeight: 'bold'
    },
    statusContainer: {
      marginTop: '40px'
    },
    statusTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '30px',
      color: '#333'
    },
    statusTimeline: {
      position: 'relative',
      paddingLeft: '50px'
    },
    timelineLine: {
      position: 'absolute',
      left: '20px',
      top: '0',
      height: '100%',
      width: '4px',
      backgroundColor: '#ddd'
    },
    timelineProgress: {
      position: 'absolute',
      left: '20px',
      top: '0',
      height: '60%', // This would be dynamic based on current stage
      width: '4px',
      backgroundColor: '#ff9900'
    },
    statusItem: {
      position: 'relative',
      marginBottom: '30px',
      paddingBottom: '30px'
    },
    statusDot: {
      position: 'absolute',
      left: '-38px',
      top: '0',
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      backgroundColor: '#ddd',
      zIndex: '2'
    },
    statusDotActive: {
      backgroundColor: '#ff9900',
      boxShadow: '0 0 0 5px rgba(255, 153, 0, 0.2)'
    },
    statusName: {
      fontSize: '1.1rem',
      fontWeight: 'bold',
      marginBottom: '5px'
    },
    statusDate: {
      fontSize: '0.9rem',
      color: '#666'
    },
    contactButton: {
      backgroundColor: '#ff9900',
      color: '#000',
      padding: '12px 25px',
      border: 'none',
      borderRadius: '5px',
      fontSize: '1rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'all 0.3s ease',
      marginTop: '30px'
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
      trackForm: {
        padding: '30px 20px'
      },
      resultsContainer: {
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
            style={{...styles.navLink, ...styles.navLinkActive}}
            onClick={() => handleNavClick('/track')}
          >
            Track Application
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
          TRACK YOUR <span style={styles.trackingTitle}>APPLICATION</span>
        </h1>
        
        <div style={styles.trackForm}>
          <form onSubmit={handleTrack}>
            <div style={styles.formGroup}>
              <label style={styles.formLabel} htmlFor="applicationId">
                Application ID
              </label>
              <input
                style={styles.formInput}
                type="text"
                id="applicationId"
                value={applicationId}
                onChange={(e) => setApplicationId(e.target.value)}
                placeholder="Enter your application number (e.g. TECDIA2023)"
                required
              />
            </div>
            <button 
              style={styles.submitButton}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? 'Tracking...' : 'Track Application'}
            </button>
            {isLoading && <div style={styles.loadingSpinner}></div>}
            {error && <div style={styles.errorMessage}>{error}</div>}
          </form>
        </div>

        {trackingData && (
          <div style={styles.resultsContainer}>
            <h2 style={styles.resultsHeader}>Application Status</h2>
            
            <div style={styles.resultsGrid}>
              <div style={styles.resultItem}>
                <div style={styles.resultLabel}>Application ID</div>
                <div style={styles.resultValue}>{trackingData.id}</div>
              </div>
              <div style={styles.resultItem}>
                <div style={styles.resultLabel}>Position</div>
                <div style={styles.resultValue}>{trackingData.position}</div>
              </div>
              <div style={styles.resultItem}>
                <div style={styles.resultLabel}>Application Date</div>
                <div style={styles.resultValue}>{trackingData.date}</div>
              </div>
              <div style={styles.resultItem}>
                <div style={styles.resultLabel}>Current Status</div>
                <div style={styles.resultValue}>{trackingData.status}</div>
              </div>
            </div>

            <div style={styles.statusContainer}>
              <h3 style={styles.statusTitle}>Application Timeline</h3>
              
              <div style={styles.statusTimeline}>
                <div style={styles.timelineLine}></div>
                <div style={{
                  ...styles.timelineProgress,
                  height: `${(trackingData.currentStage / statusStages.length) * 100}%`
                }}></div>
                
                {statusStages.map((stage) => (
                  <div key={stage.id} style={styles.statusItem}>
                    <div style={{
                      ...styles.statusDot,
                      ...(stage.id <= trackingData.currentStage ? styles.statusDotActive : {})
                    }}></div>
                    <div style={styles.statusName}>{stage.name}</div>
                    <div style={styles.statusDate}>
                      {stage.completed ? 'Completed' : 'Pending'}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button style={styles.contactButton}>
              Contact Recruiter: {trackingData.recruiter} ↗
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default TrackApp;