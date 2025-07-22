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

  // The 'styles' object will be removed as styles are moved to Tailwind classes.

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
            className="text-[#ff9900] text-base font-bold cursor-pointer"
            onClick={() => handleNavClick('/track')}
          >
            Track Application
          </a>
        </nav>
        
        <div className="flex items-center gap-5">
          <button 
            className="bg-[#ff5722] text-white px-6 py-3 rounded-md text-base font-bold cursor-pointer flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
            onClick={handleApplyClick}
          >
            Apply Now ↗
          </button>
          
          <div className="flex flex-col gap-1 cursor-pointer md:hidden">
            <div className="w-6 h-[3px] bg-white rounded-sm"></div>
            <div className="w-6 h-[3px] bg-white rounded-sm"></div>
            <div className="w-6 h-[3px] bg-white rounded-sm"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-10 py-16 max-w-[1200px] mx-auto md:px-5 md:py-10">
        <h1 className="text-5xl font-bold mb-10 text-left md:text-3xl">
          TRACK YOUR <span className="text-[#ff9900]">APPLICATION</span>
        </h1>
        
        <div className="bg-white rounded-2xl p-16 text-black mb-10 md:p-8">
          <form onSubmit={handleTrack}>
            <div className="mb-8">
              <label className="block text-lg mb-2 font-bold text-gray-800" htmlFor="applicationId">
                Application ID
              </label>
              <input
                className="w-full p-4 text-base border-2 border-gray-300 rounded-lg transition-all duration-300 focus:border-[#ff9900] focus:outline-none max-w-lg"
                type="text"
                id="applicationId"
                value={applicationId}
                onChange={(e) => setApplicationId(e.target.value)}
                placeholder="Enter your application number (e.g. TECDIA2023)"
                required
              />
            </div>
            <button 
              className="bg-[#ff5722] text-white px-8 py-4 rounded-lg text-base font-bold cursor-pointer transition-all duration-300 hover:bg-[#e64a19] disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? 'Tracking...' : 'Track Application'}
            </button>
            {isLoading && <div className="animate-spin border-4 border-white border-t-[#ff5722] rounded-full w-8 h-8 mx-auto mt-5"></div>}
            {error && <div className="text-[#ff5722] mt-5 font-bold">{error}</div>}
          </form>
        </div>

        {trackingData && (
          <div className="bg-white rounded-2xl p-16 text-black md:p-8">
            <h2 className="text-4xl font-bold mb-8 text-[#ff5722] md:text-3xl">Application Status</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
              <div className="mb-5">
                <div className="text-sm text-gray-600 mb-1">Application ID</div>
                <div className="text-xl font-bold">{trackingData.id}</div>
              </div>
              <div className="mb-5">
                <div className="text-sm text-gray-600 mb-1">Position</div>
                <div className="text-xl font-bold">{trackingData.position}</div>
              </div>
              <div className="mb-5">
                <div className="text-sm text-gray-600 mb-1">Application Date</div>
                <div className="text-xl font-bold">{trackingData.date}</div>
              </div>
              <div className="mb-5">
                <div className="text-sm text-gray-600 mb-1">Current Status</div>
                <div className="text-xl font-bold">{trackingData.status}</div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-bold mb-8 text-gray-800">Application Timeline</h3>
              
              <div className="relative pl-12">
                <div className="absolute left-5 top-0 h-full w-1 bg-gray-300"></div>
                <div className="absolute left-5 top-0 w-1 bg-[#ff9900] transition-all duration-500" style={{ height: `${(trackingData.currentStage / statusStages.length) * 100}%` }}></div>
                
                {statusStages.map((stage) => (
                  <div key={stage.id} className="relative mb-8 pb-8">
                    <div className={`absolute left-[-22px] top-0 w-5 h-5 rounded-full bg-gray-300 z-10 ${stage.id <= trackingData.currentStage ? 'bg-[#ff9900] shadow-md shadow-orange-300' : ''}`}></div>
                    <div className="text-lg font-bold mb-1">{stage.name}</div>
                    <div className="text-sm text-gray-600">
                      {stage.id < trackingData.currentStage ? 'Completed' : (stage.id === trackingData.currentStage ? 'In Progress' : 'Pending')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="bg-[#ff9900] text-black px-6 py-3 rounded-md text-base font-bold cursor-pointer inline-flex items-center gap-2 transition-all duration-300 hover:bg-orange-500 mt-8">
              Contact Recruiter: {trackingData.recruiter} ↗
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default TrackApp;