import React from 'react';

const translations = {
  en: {
    heading: 'Welcome to the Hiring Portal',
    message: 'Find the right opportunity for your career.',
  },
  hi: {
    heading: 'हायरिंग पोर्टल में आपका स्वागत है',
    message: 'अपने करियर के लिए सही अवसर खोजें।',
  },
  fr: {
    heading: 'Bienvenue sur le portail d\'embauche',
    message: 'Trouvez l\'opportunité qui convient à votre carrière.',
  },
};

const HomePage = ({ currentLang }) => {
  const { heading, message } = translations[currentLang] || translations.en;

  return (
    <div className="home-container">
      <h1>{heading}</h1>
      <p>{message}</p>
      <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>
        Current language: <strong>{currentLang}</strong>
      </p>
    </div>
  );
};

export default HomePage;
