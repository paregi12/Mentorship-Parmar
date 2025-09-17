import React, { useState } from 'react';
import { Search, Filter, Star, MapPin, Clock, Award, Users } from 'lucide-react';

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

interface MentorDirectoryProps {
  onMentorSelect: (mentor: Mentor) => void;
}

const MentorDirectory: React.FC<MentorDirectoryProps> = ({ onMentorSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [sortBy, setSortBy] = useState('rating');

  const mentors: Mentor[] = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      title: 'Licensed Clinical Psychologist',
      specialties: ['Anxiety', 'Depression', 'Trauma', 'CBT'],
      rating: 4.9,
      reviews: 127,
      experience: '12 years',
      location: 'New York, NY',
      availability: 'Available today',
      image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '$120/session',
      verified: true,
      languages: ['English', 'Spanish'],
      bio: 'Specialized in cognitive behavioral therapy with over 12 years of experience helping individuals overcome anxiety and depression.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'Mental Health Counselor',
      specialties: ['Stress Management', 'Career Counseling', 'Mindfulness'],
      rating: 4.8,
      reviews: 89,
      experience: '8 years',
      location: 'San Francisco, CA',
      availability: 'Available tomorrow',
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '$90/session',
      verified: true,
      languages: ['English', 'Mandarin'],
      bio: 'Helping professionals manage stress and find balance in their careers and personal lives through mindfulness-based approaches.'
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      title: 'Psychiatrist & Therapist',
      specialties: ['Bipolar Disorder', 'ADHD', 'Medication Management'],
      rating: 4.9,
      reviews: 156,
      experience: '15 years',
      location: 'Los Angeles, CA',
      availability: 'Available this week',
      image: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '$150/session',
      verified: true,
      languages: ['English', 'Spanish', 'Portuguese'],
      bio: 'Board-certified psychiatrist specializing in mood disorders and ADHD, with expertise in both therapy and medication management.'
    },
    {
      id: 4,
      name: 'James Wilson',
      title: 'Licensed Social Worker',
      specialties: ['Family Therapy', 'Relationship Issues', 'Addiction'],
      rating: 4.7,
      reviews: 73,
      experience: '10 years',
      location: 'Chicago, IL',
      availability: 'Available next week',
      image: 'https://images.pexels.com/photos/5327647/pexels-photo-5327647.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '$100/session',
      verified: true,
      languages: ['English'],
      bio: 'Experienced in family systems therapy and addiction counseling, helping families heal and rebuild stronger relationships.'
    },
    {
      id: 5,
      name: 'Dr. Priya Patel',
      title: 'Clinical Psychologist',
      specialties: ['Eating Disorders', 'Body Image', 'Self-Esteem'],
      rating: 4.8,
      reviews: 94,
      experience: '9 years',
      location: 'Austin, TX',
      availability: 'Available today',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '$110/session',
      verified: true,
      languages: ['English', 'Hindi', 'Gujarati'],
      bio: 'Specializing in eating disorders and body image issues, using evidence-based approaches to help clients develop a healthy relationship with food and their bodies.'
    },
    {
      id: 6,
      name: 'Robert Thompson',
      title: 'Trauma Specialist',
      specialties: ['PTSD', 'Trauma Recovery', 'EMDR'],
      rating: 4.9,
      reviews: 112,
      experience: '14 years',
      location: 'Seattle, WA',
      availability: 'Available this week',
      image: 'https://images.pexels.com/photos/5327653/pexels-photo-5327653.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '$130/session',
      verified: true,
      languages: ['English'],
      bio: 'Certified EMDR therapist with extensive experience in trauma recovery and PTSD treatment for veterans and civilians.'
    }
  ];

  const specialties = ['All', 'Anxiety', 'Depression', 'Trauma', 'ADHD', 'Stress Management', 'Family Therapy', 'Eating Disorders'];

  const filteredMentors = mentors.filter(mentor => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mentor.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesSpecialty = selectedSpecialty === '' || selectedSpecialty === 'All' ||
                            mentor.specialties.includes(selectedSpecialty);
    return matchesSearch && matchesSpecialty;
  });

  const sortedMentors = [...filteredMentors].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'reviews':
        return b.reviews - a.reviews;
      case 'experience':
        return parseInt(b.experience) - parseInt(a.experience);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Find Your Perfect Mentor</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with qualified mental health professionals who understand your journey
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex gap-4">
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {specialties.map(specialty => (
                  <option key={specialty} value={specialty === 'All' ? '' : specialty}>
                    {specialty}
                  </option>
                ))}
              </select>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="rating">Sort by Rating</option>
                <option value="reviews">Sort by Reviews</option>
                <option value="experience">Sort by Experience</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {sortedMentors.length} of {mentors.length} mentors
          </p>
        </div>

        {/* Mentor Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedMentors.map((mentor) => (
            <div
              key={mentor.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => onMentorSelect(mentor)}
            >
              <div className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="relative">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    {mentor.verified && (
                      <div className="absolute -bottom-1 -right-1 bg-blue-600 rounded-full p-1">
                        <Award className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      {mentor.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-2">{mentor.title}</p>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium text-gray-700 ml-1">
                          {mentor.rating}
                        </span>
                      </div>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm text-gray-600">
                        {mentor.reviews} reviews
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {mentor.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    {mentor.availability}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    {mentor.experience} experience
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {mentor.specialties.slice(0, 3).map((specialty, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                    {mentor.specialties.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                        +{mentor.specialties.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-lg font-semibold text-gray-800">
                    {mentor.price}
                  </span>
                  <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-green-700 transition-all duration-200">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {sortedMentors.length === 0 && (
          <div className="text-center py-12">
            <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No mentors found</h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MentorDirectory;