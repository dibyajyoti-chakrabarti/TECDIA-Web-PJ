import React from 'react';
import ProfileCard from './ProfileCard';

const PresidentsVision = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-red-900 to-orange-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-red-500 to-orange-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-orange-600 to-red-600 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-red-400 to-orange-400 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-red-400 to-orange-400 rounded-full opacity-30 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-red-500 bg-clip-text text-transparent mb-6 animate-pulse">
            President's Vision
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full shadow-lg shadow-red-500/50"></div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
          {/* Left side - Profile Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="transform hover:scale-105 transition-all duration-500 hover:drop-shadow-2xl">
              <ProfileCard
                name="President Name"
                title="President of the Republic"
                handle="president"
                status="Leading the Nation"
                contactText="Contact Office"
                avatarUrl="/path/to/president-avatar.jpg"
                showUserInfo={true}
                enableTilt={true}
                behindGradient="radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(0,100%,60%,var(--card-opacity)) 4%,hsla(20,80%,50%,calc(var(--card-opacity)*0.75)) 10%,hsla(30,60%,40%,calc(var(--card-opacity)*0.5)) 50%,hsla(40,40%,30%,0) 100%),radial-gradient(35% 52% at 55% 20%,#ff4500c4 0%,#ff000000 100%),radial-gradient(100% 100% at 50% 50%,#ff6b35ff 1%,#8b000000 76%),conic-gradient(from 124deg at 50% 50%,#dc143cff 0%,#ff4500ff 40%,#ff4500ff 60%,#dc143cff 100%)"
                innerGradient="linear-gradient(145deg,#8b0000 0%,#ff4500 100%)"
                onContactClick={() => console.log('Contact President Office clicked')}
              />
            </div>
          </div>

          {/* Right side - Vision Content */}
          <div className="space-y-8">
            <div className="bg-black/40 backdrop-blur-lg rounded-3xl p-8 border border-red-500/20 shadow-2xl hover:shadow-red-500/20 transition-all duration-500 hover:bg-black/50">
              <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text mb-6">
                Our Vision for Tomorrow
              </h2>
              <p className="text-gray-200 text-lg leading-relaxed mb-4">
                Leading our nation towards a brighter future through innovation, unity, and unwavering commitment to progress. Together, we build tomorrow.
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                Every citizen deserves opportunities to thrive, and every dream deserves the chance to become reality. We stand united in our mission to create lasting change.
              </p>
            </div>

            <div className="bg-black/30 backdrop-blur-lg rounded-3xl p-6 border border-red-400/20 shadow-xl hover:shadow-red-400/20 transition-all duration-500">
              <blockquote className="text-xl italic text-gray-200 font-light">
                "The future belongs to those who believe in the beauty of their dreams and work tirelessly to make them reality."
              </blockquote>
              <cite className="block text-right mt-4 text-transparent bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text font-medium">
                - Presidential Quote
              </cite>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent"></div>
    </div>
  );
};

export default PresidentsVision;