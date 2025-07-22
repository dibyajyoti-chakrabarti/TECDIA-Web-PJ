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

  // Note: The 'styles' object will be completely removed after conversion.
  // For demonstration, some complex styles might require extending Tailwind's config (tailwind.config.js).

  const handleNavClick = (path) => {
    window.location.href = path;
  };

  const handleApplyClick = () => {
    window.location.href = '/form';
  };

  return (
    <div className="font-sans bg-black text-white min-h-screen p-0 m-0 overflow-hidden">
      {/* Header */}
      <header className="flex justify-between items-center px-10 py-5 border-b border-[#333] md:px-5 md:py-4">
        <div className="flex items-center gap-2">
          <div className="text-lg font-bold tracking-widest">TECINDIA</div>
          <div className="w-5 h-4 bg-[#ff9900] border border-gray-300"></div>
        </div>
        
        <nav className="hidden md:flex gap-8 items-center">
          <a 
            className="text-white text-base cursor-pointer hover:text-[#ff9900] transition-colors duration-300"
            onClick={() => handleNavClick('/')}
          >
            Home
          </a>
          <a 
            className="text-white text-base cursor-pointer hover:text-[#ff9900] transition-colors duration-300"
            onClick={() => handleNavClick('/product')}
          >
            Product
          </a>
          <a 
            className="text-white text-base cursor-pointer hover:text-[#ff9900] transition-colors duration-300"
            onClick={() => handleNavClick('/track')}
          >
            Track Application
          </a>
          <a 
            className="text-[#ff9900] text-base font-bold cursor-pointer"
            onClick={() => handleNavClick('/contact')}
          >
            Contact
          </a>
        </nav>
        
        <div className="flex items-center gap-5">
          <button 
            className="bg-[#ff5722] text-white px-6 py-3 rounded-md text-base font-bold cursor-pointer flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
            onClick={handleApplyClick}
          >
            Apply Now ↗
          </button>
          
          <div className="flex flex-col gap-1 cursor-pointer md:hidden"> {/* Hidden on medium and larger screens */}
            <div className="w-6 h-[3px] bg-white rounded-sm"></div>
            <div className="w-6 h-[3px] bg-white rounded-sm"></div>
            <div className="w-6 h-[3px] bg-white rounded-sm"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-10 py-16 max-w-[1200px] mx-auto md:px-5 md:py-10">
        <h1 className="text-5xl font-bold mb-10 text-left md:text-3xl">
          CONTACT <span className="text-[#ff9900]">TECDIA</span>
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 md:gap-5">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl p-10 text-black md:p-5">
            <h2 className="text-3xl font-bold mb-8 text-[#ff5722] md:text-2xl">Get in Touch</h2>
            
            <div className="flex items-start gap-4 mb-6">
              <div className="text-[#ff9900] text-2xl mt-1">📍</div>
              <div className="flex-1">
                <div className="text-base text-gray-600 mb-1">Headquarters</div>
                <div className="text-lg font-bold">
                  123 Tech Park, Silicon Valley<br />
                  San Francisco, CA 94107<br />
                  United States
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-4 mb-6">
              <div className="text-[#ff9900] text-2xl mt-1">✉️</div>
              <div className="flex-1">
                <div className="text-base text-gray-600 mb-1">Email</div>
                <div className="text-lg font-bold">info@tecdia.com</div>
              </div>
            </div>
            
            <div className="flex items-start gap-4 mb-6">
              <div className="text-[#ff9900] text-2xl mt-1">📞</div>
              <div className="flex-1">
                <div className="text-base text-gray-600 mb-1">Phone</div>
                <div className="text-lg font-bold">+1 (555) 123-4567</div>
              </div>
            </div>
            
            <div className="flex items-start gap-4 mb-6">
              <div className="text-[#ff9900] text-2xl mt-1">🕒</div>
              <div className="flex-1">
                <div className="text-base text-gray-600 mb-1">Business Hours</div>
                <div className="text-lg font-bold">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday - Sunday: Closed
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-10 text-black md:p-5">
            <h2 className="text-3xl font-bold mb-8 text-[#ff5722] md:text-2xl">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-base mb-2 font-bold text-gray-800" htmlFor="name">
                  Your Name
                </label>
                <input
                  className="w-full p-4 text-base border-2 border-gray-300 rounded-lg transition-all duration-300 focus:border-[#ff9900] focus:outline-none"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-base mb-2 font-bold text-gray-800" htmlFor="email">
                  Email Address
                </label>
                <input
                  className="w-full p-4 text-base border-2 border-gray-300 rounded-lg transition-all duration-300 focus:border-[#ff9900] focus:outline-none"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-base mb-2 font-bold text-gray-800" htmlFor="subject">
                  Subject
                </label>
                <input
                  className="w-full p-4 text-base border-2 border-gray-300 rounded-lg transition-all duration-300 focus:border-[#ff9900] focus:outline-none"
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-base mb-2 font-bold text-gray-800" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full p-4 text-base border-2 border-gray-300 rounded-lg transition-all duration-300 focus:border-[#ff9900] focus:outline-none min-h-[150px] resize-y"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <button 
                className="bg-[#ff5722] text-white px-8 py-4 rounded-lg text-base font-bold cursor-pointer transition-all duration-300 inline-flex items-center gap-2 hover:bg-[#e64a19] disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin border-4 border-white border-t-[#ff5722] rounded-full w-5 h-5"></div>
                    Sending...
                  </>
                ) : 'Send Message'}
              </button>
              
              {submitSuccess && (
                <div className="text-green-600 mt-5 font-bold">
                  Your message has been sent successfully!
                </div>
              )}
              
              {submitError && (
                <div className="text-[#ff5722] mt-5 font-bold">{submitError}</div>
              )}
            </form>
          </div>
        </div>
        
        {/* Map */}
        <div className="h-[400px] bg-white rounded-2xl overflow-hidden relative">
          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold">
            [Interactive Map Would Appear Here]
          </div>
        </div>
        
        {/* Global Offices */}
        <h2 className="text-4xl font-bold mt-16 mb-8 md:text-3xl">
          OUR <span className="text-[#ff9900]">GLOBAL OFFICES</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="bg-white rounded-2xl p-8 text-black">
            <h3 className="text-2xl font-bold mb-5 text-[#ff5722]">Tokyo, Japan</h3>
            <p className="text-base leading-relaxed">
              <strong className="font-bold">Address:</strong><br />
              TECDIA Japan, 5-6-7 Shibuya<br />
              Shibuya-ku, Tokyo 150-0002
            </p>
            <p className="text-base leading-relaxed mt-3">
              <strong className="font-bold">Phone:</strong> +81 3-1234-5678
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 text-black">
            <h3 className="text-2xl font-bold mb-5 text-[#ff5722]">Berlin, Germany</h3>
            <p className="text-base leading-relaxed">
              <strong className="font-bold">Address:</strong><br />
              TECDIA Europe, Friedrichstraße 100<br />
              10117 Berlin, Germany
            </p>
            <p className="text-base leading-relaxed mt-3">
              <strong className="font-bold">Phone:</strong> +49 30 1234567
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 text-black">
            <h3 className="text-2xl font-bold mb-5 text-[#ff5722]">Bangalore, India</h3>
            <p className="text-base leading-relaxed">
              <strong className="font-bold">Address:</strong><br />
              TECDIA India, 123 Tech Park<br />
              Whitefield, Bangalore 560066
            </p>
            <p className="text-base leading-relaxed mt-3">
              <strong className="font-bold">Phone:</strong> +91 80 1234 5678
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;