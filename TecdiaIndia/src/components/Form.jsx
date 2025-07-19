import React, { useState } from 'react';
import { User, Cpu, BarChart3, CheckCircle } from 'lucide-react';

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #374151 0%, #4B5563 50%, #111827 100%)',
    color: 'white',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  },
  mainContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '64px 24px'
  },
  heading: {
    textAlign: 'center',
    marginBottom: '64px',
    fontSize: '3rem',
    fontWeight: 'bold',
    lineHeight: '1.2'
  },
  headingPrimary: {
    color: '#f97316'
  },
  headingSecondary: {
    color: 'white'
  },
  positionsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '32px',
    marginBottom: '80px'
  },
  positionCard: {
    background: 'white',
    borderRadius: '16px',
    padding: '32px',
    color: '#374151',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  },
  positionCardHover: {
    transform: 'translateY(-8px)',
    boxShadow: '0 25px 50px -12px rgba(249, 115, 22, 0.2)'
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  },
  cardIcon: {
    marginBottom: '24px'
  },
  cardTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '24px'
  },
  cardTitlePrimary: {
    color: '#f97316'
  },
  cardTitleSecondary: {
    color: '#374151'
  },
  rolesList: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  roleItem: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.875rem',
    marginBottom: '12px'
  },
  roleBullet: {
    width: '8px',
    height: '8px',
    backgroundColor: '#374151',
    borderRadius: '50%',
    marginRight: '12px'
  },
  processSection: {
    marginBottom: '80px'
  },
  processGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '32px',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  processStep: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '24px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    borderRadius: '8px',
    padding: '16px'
  },
  processStepHover: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)'
  },
  stepIndicator: {
    flexShrink: 0
  },
  stepCircle: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1.125rem',
    transition: 'all 0.3s ease'
  },
  stepCircleActive: {
    backgroundColor: '#f97316'
  },
  stepCircleInactive: {
    backgroundColor: '#4B5563'
  },
  stepLine: {
    width: '2px',
    height: '64px',
    marginLeft: '23px',
    marginTop: '8px',
    transition: 'all 0.3s ease'
  },
  stepLineActive: {
    backgroundColor: '#f97316'
  },
  stepLineInactive: {
    backgroundColor: '#4B5563'
  },
  stepContent: {
    flex: 1
  },
  stepLabel: {
    fontSize: '0.875rem',
    color: '#f97316',
    fontWeight: '600',
    marginBottom: '4px'
  },
  stepTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '8px',
    transition: 'all 0.3s ease'
  },
  stepTitleActive: {
    color: 'white'
  },
  stepTitleInactive: {
    color: '#9CA3AF'
  },
  stepDescription: {
    fontSize: '0.875rem',
    transition: 'all 0.3s ease'
  },
  stepDescriptionActive: {
    color: '#D1D5DB'
  },
  stepDescriptionInactive: {
    color: '#6B7280'
  },
  formSection: {
    maxWidth: '1024px',
    margin: '0 auto'
  },
  formHeading: {
    textAlign: 'center',
    marginBottom: '48px'
  },
  formSubtitle: {
    fontSize: '1.25rem',
    color: '#D1D5DB',
    marginBottom: '16px'
  },
  formDescription: {
    fontSize: '1.125rem',
    color: '#9CA3AF'
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(16px)',
    borderRadius: '16px',
    padding: '40px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    border: '1px solid rgba(255, 255, 255, 0.2)'
  },
  formGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '32px',
    marginBottom: '32px'
  },
  formGroup: {
    marginBottom: '32px'
  },
  label: {
    display: 'block',
    color: 'white',
    fontWeight: '600',
    marginBottom: '12px'
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '8px',
    backgroundColor: 'white',
    border: '2px solid #f97316',
    color: '#374151',
    fontSize: '1rem',
    outline: 'none',
    transition: 'all 0.3s ease',
    boxSizing: 'border-box'
  },
  inputFocus: {
    ring: '2px',
    ringColor: '#fb923c'
  },
  select: {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '8px',
    backgroundColor: 'white',
    border: '2px solid #f97316',
    color: '#374151',
    fontSize: '1rem',
    outline: 'none',
    transition: 'all 0.3s ease',
    boxSizing: 'border-box'
  },
  textarea: {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '8px',
    backgroundColor: 'white',
    border: '2px solid #f97316',
    color: '#374151',
    fontSize: '1rem',
    outline: 'none',
    transition: 'all 0.3s ease',
    resize: 'none',
    fontFamily: 'inherit',
    boxSizing: 'border-box'
  },
  fileInput: {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '8px',
    backgroundColor: 'white',
    border: '2px solid #f97316',
    color: '#374151',
    fontSize: '1rem',
    outline: 'none',
    transition: 'all 0.3s ease',
    boxSizing: 'border-box'
  },
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer'
  },
  checkbox: {
    width: '20px',
    height: '20px',
    accentColor: '#f97316',
    marginRight: '12px'
  },
  checkboxLabel: {
    color: 'white'
  },
  link: {
    color: '#f97316',
    textDecoration: 'underline'
  },
  submitButton: {
    backgroundColor: '#f97316',
    color: 'white',
    fontWeight: 'bold',
    padding: '16px 48px',
    borderRadius: '8px',
    fontSize: '1.125rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
  },
  submitButtonHover: {
    backgroundColor: '#ea580c',
    transform: 'scale(1.05)',
    boxShadow: '0 10px 25px rgba(249, 115, 22, 0.3)'
  },
  submitContainer: {
    textAlign: 'center'
  }
};

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: '',
    resume: null,
    agreeToTerms: false
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredStep, setHoveredStep] = useState(null);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      resume: e.target.files[0]
    }));
  };

  const handleSubmit = () => {
    if (!formData.agreeToTerms) {
      alert('Please agree to the terms & conditions and privacy policies');
      return;
    }
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.position) {
      alert('Please fill in all required fields');
      return;
    }
    console.log('Form submitted:', formData);
    alert('Application submitted successfully!');
  };

  const positions = [
    {
      title: 'Technical Position',
      icon: <Cpu className="w-8 h-8 text-orange-500" style={{ width: '32px', height: '32px', color: '#f97316' }} />,
      roles: ['Research & Development (R&D)', 'Manufacturing/Quality Control', 'Quality Assurance', 'IT Development']
    },
    {
      title: 'Sales Position', 
      icon: <BarChart3 className="w-8 h-8 text-orange-500" style={{ width: '32px', height: '32px', color: '#f97316' }} />,
      roles: ['Domestic Sales', 'International Sales', 'Global Sales']
    },
    {
      title: 'Administrative Position',
      icon: <User className="w-8 h-8 text-orange-500" style={{ width: '32px', height: '32px', color: '#f97316' }} />,
      roles: ['Trade Operations / Import & Export', 'Production Management', 'General Affairs / Administration']
    }
  ];

  const recruitmentSteps = [
    { step: 1, title: 'Apply/Application', description: 'Submit your application through our online form or email' },
    { step: 2, title: 'Company Information Session', description: 'Learn more about our company culture and values' },
    { step: 3, title: 'Document Screening', description: 'Initial review of your qualifications and documents' },
    { step: 4, title: 'Web Test', description: 'Complete our online assessment test' },
    { step: 5, title: 'First Interview', description: 'Submit your application through our online form or email' },
    { step: 6, title: 'Final Interview', description: 'Submit your application through our online form or email' },
    { step: 7, title: 'Job Offer', description: 'Submit your application through our online form or email' }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.mainContent}>
        <div style={styles.heading}>
          <h1>
            <span style={styles.headingPrimary}>AVAILABLE</span>
            <br />
            <span style={styles.headingSecondary}>POSITIONS</span>
          </h1>
        </div>

        <div style={styles.positionsGrid}>
          {positions.map((position, index) => (
            <div 
              key={index} 
              style={{
                ...styles.positionCard,
                ...(hoveredCard === index ? styles.positionCardHover : {})
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={styles.cardContent}>
                <div style={styles.cardIcon}>{position.icon}</div>
                <h3 style={styles.cardTitle}>
                  <span style={styles.cardTitlePrimary}>{position.title.split(' ')[0]} </span>
                  <span style={styles.cardTitleSecondary}>{position.title.split(' ')[1]}</span>
                </h3>
                <ul style={styles.rolesList}>
                  {position.roles.map((role, roleIndex) => (
                    <li key={roleIndex} style={styles.roleItem}>
                      <div style={styles.roleBullet}></div>
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div style={styles.processSection}>
          <div style={styles.heading}>
            <h2>
              <span style={styles.headingPrimary}>RECRUITMENT</span>
              <br />
              <span style={styles.headingSecondary}>PROCESS</span>
            </h2>
          </div>

          <div style={styles.processGrid}>
            {recruitmentSteps.map((step, index) => (
              <div 
                key={index} 
                style={{
                  ...styles.processStep,
                  ...(hoveredStep === index ? styles.processStepHover : {})
                }}
                onClick={() => setCurrentStep(step.step)}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <div style={styles.stepIndicator}>
                  <div style={{
                    ...styles.stepCircle,
                    ...(step.step <= currentStep ? styles.stepCircleActive : styles.stepCircleInactive)
                  }}>
                    {step.step <= currentStep ? (
                      <CheckCircle style={{ width: '24px', height: '24px' }} />
                    ) : (
                      step.step
                    )}
                  </div>
                  {index < recruitmentSteps.length - 1 && (
                    <div style={{
                      ...styles.stepLine,
                      ...(step.step < currentStep ? styles.stepLineActive : styles.stepLineInactive)
                    }}></div>
                  )}
                </div>
                <div style={styles.stepContent}>
                  <div style={styles.stepLabel}>STEP {step.step.toString().padStart(2, '0')}</div>
                  <h3 style={{
                    ...styles.stepTitle,
                    ...(step.step <= currentStep ? styles.stepTitleActive : styles.stepTitleInactive)
                  }}>{step.title}</h3>
                  <p style={{
                    ...styles.stepDescription,
                    ...(step.step <= currentStep ? styles.stepDescriptionActive : styles.stepDescriptionInactive)
                  }}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.formSection}>
          <div style={styles.formHeading}>
            <h2 style={styles.heading}>
              <span style={styles.headingPrimary}>APPLICATION</span>
              <br />
              <span style={styles.headingSecondary}>FORM</span>
            </h2>
            <p style={styles.formSubtitle}>Take the first step towards joining our team</p>
            <p style={styles.formDescription}>Fill out the form below to apply</p>
          </div>

          <div style={styles.formContainer}>
            <div style={styles.formGrid}>
              <div>
                <label style={styles.label}>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  style={styles.input}
                />
              </div>
              <div>
                <label style={styles.label}>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  style={styles.input}
                />
              </div>
            </div>

            <div style={styles.formGrid}>
              <div>
                <label style={styles.label}>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={styles.input}
                />
              </div>
              <div>
                <label style={styles.label}>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  style={styles.input}
                />
              </div>
            </div>

            <div style={styles.formGrid}>
              <div>
                <label style={styles.label}>Position Applied For</label>
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  style={styles.select}
                >
                  <option value="">Select Position</option>
                  <option value="technical">Technical Position</option>
                  <option value="sales">Sales Position</option>
                  <option value="administrative">Administrative Position</option>
                </select>
              </div>
              <div>
                <label style={styles.label}>Years of Experience</label>
                <input
                  type="number"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  style={styles.input}
                  min="0"
                />
              </div>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Cover Letter</label>
              <textarea
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleInputChange}
                rows={6}
                style={styles.textarea}
                placeholder="Tell us about yourself and why you're interested in this position..."
              ></textarea>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Resume/CV</label>
              <input
                type="file"
                name="resume"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                style={styles.fileInput}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.checkboxContainer}>
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  style={styles.checkbox}
                />
                <span style={styles.checkboxLabel}>
                  I agree to the <span style={styles.link}>terms & conditions</span> & <span style={styles.link}>privacy policies</span>
                </span>
              </label>
            </div>

            <div style={styles.submitContainer}>
              <button
                onClick={handleSubmit}
                style={{
                  ...styles.submitButton,
                  ...(isButtonHovered ? styles.submitButtonHover : {})
                }}
                onMouseEnter={() => setIsButtonHovered(true)}
                onMouseLeave={() => setIsButtonHovered(false)}
              >
                SUBMIT →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}