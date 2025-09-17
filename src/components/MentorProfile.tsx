import React, { useState } from 'react';
import { ArrowLeft, Star, MapPin, Clock, Award, Users, Calendar, MessageCircle, Video, Phone, Globe, CheckCircle } from 'lucide-react';

interface Mentor {
  id: number;
  name: string;
  title: string;
  specialties: string[];
  rating: number;
  reviews: number;
  experience: string;
  location: string;
  availability: string;
  image: string;
  price: string;
  verified: boolean;
  languages: string[];
  bio: string;
}

interface MentorProfileProps {
  mentor: Mentor;
  onBack: () => void;
}

const MentorProfile: React.FC<MentorProfileProps> = ({ mentor, onBack }) => {
  const [selectedTab, setSelectedTab] = useState('about');
  const [showBookingModal, setShowBookingModal] = useState(false);

  const tabs = [
    { id: 'about', label: 'About' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'availability', label: 'Availability' }
  ];

  const sessionTypes = [
    { type: 'Video Call', icon: Video, duration: '50 min', price: mentor.price },
    { type: 'Phone Call', icon: Phone, duration: '50 min', price: '$100' },
    { type: 'Chat Session', icon: MessageCircle, duration: '60 min', price: '$80' }
  ];

  const reviews = [
    {
      id: 1,
      name: 'Anonymous',
      rating: 5,
      date: '2 weeks ago',
      comment: 'Dr. Johnson helped me through a very difficult time. Her approach is compassionate and professional. I highly recommend her services.'
    },
    {
      id: 2,
      name: 'M.K.',
      rating: 5,
      date: '1 month ago',
      comment: 'Excellent therapist! Very understanding and provides practical tools for managing anxiety. Sessions are always productive.'
    },
    {
      id: 3,
      name: 'Sarah T.',
      rating: 4,
      date: '2 months ago',
      comment: 'Great experience overall. Dr. Johnson is knowledgeable and creates a safe space for discussion. Would definitely continue sessions.'
    }
  ];

  const availableSlots = [
    { date: 'Today', time: '2:00 PM', available: true },
    { date: 'Today', time: '4:00 PM', available: true },
    { date: 'Tomorrow', time: '10:00 AM', available: true },
    { date: 'Tomorrow', time: '2:00 PM', available: false },
    { date: 'Friday', time: '11:00 AM', available: true },
    { date: 'Friday', time: '3:00 PM', available: true }
  ];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Mentors</span>
        </button>

        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
            <div className="relative">
              <img
                src={mentor.image}
                alt={mentor.name}
                className="w-32 h-32 rounded-full object-cover"
              />
              {mentor.verified && (
                <div className="absolute -bottom-2 -right-2 bg-blue-600 rounded-full p-2">
                  <Award className="w-5 h-5 text-white" />
                </div>
              )}
            </div>

            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-800 mb-2">{mentor.name}</h1>
                  <p className="text-xl text-blue-600 font-medium mb-3">{mentor.title}</p>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="text-lg font-medium text-gray-700 ml-1">
                        {mentor.rating}
                      </span>
                      <span className="text-gray-500 ml-1">({mentor.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{mentor.experience} experience</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-800 mb-2">{mentor.price}</div>
                  <div className="text-sm text-gray-600">per session</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  {mentor.location}
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  {mentor.availability}
                </div>
                <div className="flex items-center text-gray-600">
                  <Globe className="w-4 h-4 mr-2" />
                  {mentor.languages.join(', ')}
                </div>
                <div className="flex items-center text-green-600">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Verified Professional
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Specialties</h3>
                <div className="flex flex-wrap gap-2">
                  {mentor.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-blue-100 text-blue-700 font-medium rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setShowBookingModal(true)}
                className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-3 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-green-700 transition-all duration-200 transform hover:scale-105"
              >
                Book Session
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`px-6 py-4 font-medium transition-colors ${
                    selectedTab === tab.id
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-8">
            {selectedTab === 'about' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">About Me</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{mentor.bio}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Session Types</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {sessionTypes.map((session, index) => {
                      const Icon = session.icon;
                      return (
                        <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                          <div className="flex items-center space-x-3 mb-3">
                            <Icon className="w-6 h-6 text-blue-600" />
                            <span className="font-medium text-gray-800">{session.type}</span>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">{session.duration}</div>
                          <div className="text-lg font-semibold text-gray-800">{session.price}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Approach & Methods</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-800 mb-2">Cognitive Behavioral Therapy</h4>
                      <p className="text-sm text-gray-600">Evidence-based approach focusing on changing negative thought patterns</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-800 mb-2">Mindfulness-Based Therapy</h4>
                      <p className="text-sm text-gray-600">Incorporating mindfulness techniques for stress reduction and emotional regulation</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedTab === 'reviews' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-800">Client Reviews</h3>
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-lg font-medium">{mentor.rating} out of 5</span>
                    <span className="text-gray-500">({mentor.reviews} reviews)</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-green-400 rounded-full flex items-center justify-center">
                            <span className="text-white font-medium text-sm">
                              {review.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <div className="font-medium text-gray-800">{review.name}</div>
                            <div className="text-sm text-gray-500">{review.date}</div>
                          </div>
                        </div>
                        <div className="flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedTab === 'availability' && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800">Available Time Slots</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {availableSlots.map((slot, index) => (
                    <div
                      key={index}
                      className={`border rounded-lg p-4 transition-all ${
                        slot.available
                          ? 'border-green-200 bg-green-50 hover:border-green-300 cursor-pointer'
                          : 'border-gray-200 bg-gray-50 opacity-50'
                      }`}
                    >
                      <div className="font-medium text-gray-800 mb-1">{slot.date}</div>
                      <div className="text-lg font-semibold text-gray-700">{slot.time}</div>
                      <div className={`text-sm mt-2 ${
                        slot.available ? 'text-green-600' : 'text-gray-500'
                      }`}>
                        {slot.available ? 'Available' : 'Booked'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Book a Session</h3>
            <p className="text-gray-600 mb-6">
              Choose your preferred session type and time slot with {mentor.name}
            </p>
            
            <div className="space-y-4 mb-6">
              {sessionTypes.map((session, index) => {
                const Icon = session.icon;
                return (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Icon className="w-5 h-5 text-blue-600" />
                        <div>
                          <div className="font-medium text-gray-800">{session.type}</div>
                          <div className="text-sm text-gray-600">{session.duration}</div>
                        </div>
                      </div>
                      <div className="font-semibold text-gray-800">{session.price}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => setShowBookingModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowBookingModal(false);
                  alert('Booking confirmed! You will receive a confirmation email shortly.');
                }}
                className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg hover:from-blue-700 hover:to-green-700 transition-all"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MentorProfile;