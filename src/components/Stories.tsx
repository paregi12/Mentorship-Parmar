import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Plus, Filter, Search, Clock, User, ThumbsUp } from 'lucide-react';

interface Story {
  id: number;
  title: string;
  content: string;
  author: string;
  isAnonymous: boolean;
  date: string;
  category: string;
  likes: number;
  comments: number;
  tags: string[];
}

interface StoriesProps {
  user: any;
}

const Stories: React.FC<StoriesProps> = ({ user }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newStory, setNewStory] = useState({
    title: '',
    content: '',
    category: 'Recovery',
    isAnonymous: false,
    tags: []
  });

  const categories = ['All', 'Recovery', 'Anxiety', 'Depression', 'Success Stories', 'Support', 'Therapy Journey'];

  const stories: Story[] = [
    {
      id: 1,
      title: 'My Journey Through Anxiety: Finding Light in the Darkness',
      content: 'Two years ago, I couldn\'t leave my house without having a panic attack. Today, I want to share how I overcame my anxiety with the help of therapy, medication, and an incredible support system. It wasn\'t easy, but every small step forward was worth celebrating...',
      author: 'Sarah M.',
      isAnonymous: false,
      date: '3 days ago',
      category: 'Recovery',
      likes: 47,
      comments: 12,
      tags: ['anxiety', 'recovery', 'therapy', 'hope']
    },
    {
      id: 2,
      title: 'Breaking the Stigma: My Experience with Depression',
      content: 'For the longest time, I thought asking for help was a sign of weakness. I want to share my story to help others understand that seeking mental health support is actually one of the bravest things you can do. Here\'s how I learned to prioritize my mental health...',
      author: 'Anonymous',
      isAnonymous: true,
      date: '1 week ago',
      category: 'Depression',
      likes: 63,
      comments: 18,
      tags: ['depression', 'stigma', 'courage', 'healing']
    },
    {
      id: 3,
      title: 'How Mindfulness Changed My Life',
      content: 'I was skeptical about meditation and mindfulness practices at first. But after my therapist recommended it, I decided to give it a try. Six months later, I can honestly say it has transformed how I handle stress and anxiety. Here are the techniques that worked for me...',
      author: 'Michael K.',
      isAnonymous: false,
      date: '2 weeks ago',
      category: 'Success Stories',
      likes: 89,
      comments: 25,
      tags: ['mindfulness', 'meditation', 'stress', 'transformation']
    },
    {
      id: 4,
      title: 'Finding the Right Therapist: My Experience',
      content: 'It took me three tries to find the right therapist, and I want to share what I learned along the way. The connection between you and your therapist is so important, and it\'s okay to shop around until you find the right fit...',
      author: 'Anonymous',
      isAnonymous: true,
      date: '3 weeks ago',
      category: 'Therapy Journey',
      likes: 34,
      comments: 8,
      tags: ['therapy', 'therapist', 'mental health', 'advice']
    },
    {
      id: 5,
      title: 'Supporting a Loved One Through Mental Health Struggles',
      content: 'When my partner was diagnosed with bipolar disorder, I didn\'t know how to help. I want to share what I\'ve learned about being a supportive partner while also taking care of my own mental health. It\'s a delicate balance, but it\'s possible...',
      author: 'Jennifer L.',
      isAnonymous: false,
      date: '1 month ago',
      category: 'Support',
      likes: 72,
      comments: 15,
      tags: ['support', 'relationships', 'bipolar', 'caregiving']
    }
  ];

  const filteredStories = stories.filter(story => {
    const matchesCategory = selectedCategory === 'All' || story.category === selectedCategory;
    const matchesSearch = story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleCreateStory = () => {
    // In a real app, this would submit to a backend
    console.log('Creating story:', newStory);
    setShowCreateModal(false);
    setNewStory({
      title: '',
      content: '',
      category: 'Recovery',
      isAnonymous: false,
      tags: []
    });
    alert('Your story has been shared! Thank you for contributing to our community.');
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Community Stories</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Share your journey, find inspiration, and connect with others who understand your experience
          </p>
          <button
            onClick={() => setShowCreateModal(true)}
            className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-200 transform hover:scale-105 inline-flex items-center space-x-2"
          >
            <Plus className="w-5 h-5" />
            <span>Share Your Story</span>
          </button>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search stories, tags, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex gap-2 overflow-x-auto">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stories */}
        <div className="space-y-6">
          {filteredStories.map((story) => (
            <div key={story.id} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-green-400 rounded-full flex items-center justify-center">
                    {story.isAnonymous ? (
                      <User className="w-5 h-5 text-white" />
                    ) : (
                      <span className="text-white font-medium">
                        {story.author.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">
                      {story.isAnonymous ? 'Anonymous' : story.author}
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{story.date}</span>
                      <span>•</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                        {story.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">{story.title}</h2>
              
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                {story.content}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {story.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <div className="flex items-center space-x-6">
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors">
                    <Heart className="w-5 h-5" />
                    <span>{story.likes}</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    <span>{story.comments}</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-green-500 transition-colors">
                    <Share2 className="w-5 h-5" />
                    <span>Share</span>
                  </button>
                </div>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredStories.length === 0 && (
          <div className="text-center py-12">
            <MessageCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No stories found</h3>
            <p className="text-gray-500">Try adjusting your search or category filter</p>
          </div>
        )}
      </div>

      {/* Create Story Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-800">Share Your Story</h3>
              <p className="text-gray-600 mt-2">
                Your story can inspire and help others on their mental health journey
              </p>
            </div>
            
            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Story Title
                </label>
                <input
                  type="text"
                  value={newStory.title}
                  onChange={(e) => setNewStory({...newStory, title: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Give your story a meaningful title..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Story
                </label>
                <textarea
                  value={newStory.content}
                  onChange={(e) => setNewStory({...newStory, content: e.target.value})}
                  rows={8}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Share your experience, what you've learned, or advice for others..."
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    value={newStory.category}
                    onChange={(e) => setNewStory({...newStory, category: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {categories.slice(1).map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center">
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={newStory.isAnonymous}
                      onChange={(e) => setNewStory({...newStory, isAnonymous: e.target.checked})}
                      className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      Share anonymously
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 flex space-x-3">
              <button
                onClick={() => setShowCreateModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateStory}
                className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg hover:from-blue-700 hover:to-green-700 transition-all"
              >
                Share Story
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Stories;