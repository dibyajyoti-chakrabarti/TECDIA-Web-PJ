import React, { useState } from 'react';
import { User, Cpu, BarChart3, CheckCircle } from 'lucide-react';

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
      icon: <Cpu className="w-8 h-8 text-orange-500" />,
      roles: ['Research & Development (R&D)', 'Manufacturing/Quality Control', 'Quality Assurance', 'IT Development']
    },
    {
      title: 'Sales Position', 
      icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
      roles: ['Domestic Sales', 'International Sales', 'Global Sales']
    },
    {
      title: 'Administrative Position',
      icon: <User className="w-8 h-8 text-orange-500" />,
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
    <div className="min-h-screen bg-gradient-to-br from-gray-700 via-gray-600 to-gray-900 text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16 text-5xl font-bold leading-tight">
          <h1>
            <span className="text-orange-500">AVAILABLE</span>
            <br />
            <span className="text-white">POSITIONS</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {positions.map((position, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl p-8 text-gray-700 shadow-xl transition-all duration-300 cursor-pointer 
                ${hoveredCard === index ? 'transform -translate-y-2 shadow-orange-500/20' : ''}`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">{position.icon}</div>
                <h3 className="text-2xl font-bold mb-6">
                  <span className="text-orange-500">{position.title.split(' ')[0]} </span>
                  <span className="text-gray-700">{position.title.split(' ')[1]}</span>
                </h3>
                <ul className="list-none p-0 m-0">
                  {position.roles.map((role, roleIndex) => (
                    <li key={roleIndex} className="flex items-center text-sm mb-3 last:mb-0">
                      <div className="w-2 h-2 bg-gray-700 rounded-full mr-3"></div>
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-20">
          <div className="text-center mb-16 text-5xl font-bold leading-tight">
            <h2>
              <span className="text-orange-500">RECRUITMENT</span>
              <br />
              <span className="text-white">PROCESS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {recruitmentSteps.map((step, index) => (
              <div 
                key={index} 
                className={`flex items-start gap-6 cursor-pointer transition-all duration-300 rounded-lg p-4 
                  ${hoveredStep === index ? 'bg-white/5' : ''}`}
                onClick={() => setCurrentStep(step.step)}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg transition-all duration-300 
                    ${step.step <= currentStep ? 'bg-orange-500' : 'bg-gray-600'}`}>
                    {step.step <= currentStep ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      step.step
                    )}
                  </div>
                  {index < recruitmentSteps.length - 1 && (
                    <div className={`w-0.5 h-16 ml-6 mt-2 transition-all duration-300 
                      ${step.step < currentStep ? 'bg-orange-500' : 'bg-gray-600'}`}></div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="text-sm text-orange-500 font-semibold mb-1">STEP {step.step.toString().padStart(2, '0')}</div>
                  <h3 className={`text-xl font-bold mb-2 transition-all duration-300 
                    ${step.step <= currentStep ? 'text-white' : 'text-gray-400'}`}>{step.title}</h3>
                  <p className={`text-sm transition-all duration-300 
                    ${step.step <= currentStep ? 'text-gray-300' : 'text-gray-500'}`}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold leading-tight">
              <span className="text-orange-500">APPLICATION</span>
              <br />
              <span className="text-white">FORM</span>
            </h2>
            <p className="text-xl text-gray-300 mb-4 mt-4">Take the first step towards joining our team</p>
            <p className="text-lg text-gray-400">Fill out the form below to apply</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-10 shadow-2xl border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label htmlFor="firstName" className="block text-white font-semibold mb-3">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full p-3.5 rounded-lg bg-white border-2 border-orange-500 text-gray-700 text-base outline-none transition-all duration-300 focus:ring-2 focus:ring-orange-400"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-white font-semibold mb-3">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full p-3.5 rounded-lg bg-white border-2 border-orange-500 text-gray-700 text-base outline-none transition-all duration-300 focus:ring-2 focus:ring-orange-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-3">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3.5 rounded-lg bg-white border-2 border-orange-500 text-gray-700 text-base outline-none transition-all duration-300 focus:ring-2 focus:ring-orange-400"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-white font-semibold mb-3">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-3.5 rounded-lg bg-white border-2 border-orange-500 text-gray-700 text-base outline-none transition-all duration-300 focus:ring-2 focus:ring-orange-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label htmlFor="position" className="block text-white font-semibold mb-3">Position Applied For</label>
                <select
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  className="w-full p-3.5 rounded-lg bg-white border-2 border-orange-500 text-gray-700 text-base outline-none transition-all duration-300 focus:ring-2 focus:ring-orange-400"
                >
                  <option value="">Select Position</option>
                  <option value="technical">Technical Position</option>
                  <option value="sales">Sales Position</option>
                  <option value="administrative">Administrative Position</option>
                </select>
              </div>
              <div>
                <label htmlFor="experience" className="block text-white font-semibold mb-3">Years of Experience</label>
                <input
                  type="number"
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full p-3.5 rounded-lg bg-white border-2 border-orange-500 text-gray-700 text-base outline-none transition-all duration-300 focus:ring-2 focus:ring-orange-400"
                  min="0"
                />
              </div>
            </div>

            <div className="mb-8">
              <label htmlFor="coverLetter" className="block text-white font-semibold mb-3">Cover Letter</label>
              <textarea
                id="coverLetter"
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleInputChange}
                rows={6}
                className="w-full p-3.5 rounded-lg bg-white border-2 border-orange-500 text-gray-700 text-base outline-none transition-all duration-300 resize-none font-sans focus:ring-2 focus:ring-orange-400"
                placeholder="Tell us about yourself and why you're interested in this position..."
              ></textarea>
            </div>

            <div className="mb-8">
              <label htmlFor="resume" className="block text-white font-semibold mb-3">Resume/CV</label>
              <input
                type="file"
                id="resume"
                name="resume"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                className="w-full p-3.5 rounded-lg bg-white border-2 border-orange-500 text-gray-700 text-base outline-none transition-all duration-300 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-orange-100 file:text-orange-700 hover:file:bg-orange-200 cursor-pointer focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div className="mb-8">
              <label htmlFor="agreeToTerms" className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="w-5 h-5 accent-orange-500 mr-3"
                />
                <span className="text-white">
                  I agree to the <span className="text-orange-500 underline">terms & conditions</span> & <span className="text-orange-500 underline">privacy policies</span>
                </span>
              </label>
            </div>

            <div className="text-center">
              <button
                onClick={handleSubmit}
                className={`bg-orange-500 text-white font-bold py-4 px-12 rounded-lg text-lg border-none cursor-pointer transition-all duration-300 shadow-lg 
                  ${isButtonHovered ? 'bg-orange-600 transform scale-105 shadow-orange-500/30' : ''}`}
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