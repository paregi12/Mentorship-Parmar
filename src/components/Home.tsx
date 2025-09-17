import React from 'react';
import { Heart, Users, BookOpen, Star, ArrowRight, Shield, Clock, Award } from 'lucide-react';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ setCurrentPage }) => {
  const features = [
    {
      icon: Users,
      title: 'Qualified Mentors',
      description: 'Connect with certified mental health professionals and experienced mentors',
      color: 'text-blue-600'
    },
    {
      icon: Shield,
      title: 'Safe Environment',
      description: 'A secure, judgment-free space for sharing and healing',
      color: 'text-green-600'
    },
    {
      icon: BookOpen,
      title: 'Community Stories',
      description: 'Share your journey and find inspiration in others\' experiences',
      color: 'text-purple-600'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Access resources and community support whenever you need it',
      color: 'text-orange-600'
    }
  ];

  const stats = [
    { number: '500+', label: 'Qualified Mentors' },
    { number: '10K+', label: 'Success Stories' },
    { number: '50K+', label: 'Community Members' },
    { number: '98%', label: 'Satisfaction Rate' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Your Mental Health
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                Journey Starts Here
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Connect with qualified mentors, share your story, and find support in a caring community 
              dedicated to mental wellness and personal growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setCurrentPage('mentors')}
                className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-green-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Users className="w-5 h-5" />
                <span>Find Your Mentor</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => setCurrentPage('stories')}
                className="bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <BookOpen className="w-5 h-5" />
                <span>Read Stories</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose MindfulMentors?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide a comprehensive platform designed to support your mental health journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center mb-6`}>
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 italic">
              "MindfulMentors changed my life. The mentor I connected with understood my struggles 
              and provided the guidance I needed. The community stories gave me hope when I needed it most."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-green-400 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">SM</span>
              </div>
              <div>
                <div className="font-semibold text-gray-800">Sarah M.</div>
                <div className="text-gray-600">Community Member</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of people who have found support, guidance, and healing through our platform
          </p>
          <button
            onClick={() => setCurrentPage('mentors')}
            className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-12 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-green-700 transition-all duration-200 transform hover:scale-105 inline-flex items-center space-x-2"
          >
            <Heart className="w-5 h-5" />
            <span>Get Started Today</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;