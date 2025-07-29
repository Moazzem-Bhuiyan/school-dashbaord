'use client';

import UserAccount from './user-account';
import PostCard from './post-card';
import { useState } from 'react';

const dummyPosts = [
  {
    id: 1,
    user: { name: 'Alyse Roe', avatar: '/user-avatar-lg.png' },
    date: 'October 26, 2019',
    title: 'Sofa chair',
    content:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.',
    image: '/placeholder.svg?height=200&width=300',
    details: { quantity: 10, material: 'Wood', school: 'SES-Smith' },
    likes: 24,
    comments: 8,
    isLiked: false,
  },
  {
    id: 2,
    user: { name: 'Alyse Roe', avatar: '/placeholder.svg?height=40&width=40' },
    date: 'October 26, 2019',
    title: 'Office Desk Setup',
    content:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.',
    image: '/placeholder.svg?height=200&width=300',
    details: { quantity: 5, material: 'Metal', school: 'SES-Smith' },
    likes: 18,
    comments: 12,
    isLiked: true,
  },
  {
    id: 3,
    user: { name: 'Alyse Roe', avatar: '/placeholder.svg?height=40&width=40' },
    date: 'October 25, 2019',
    title: 'Study Table',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/placeholder.svg?height=200&width=300',
    details: { quantity: 8, material: 'Wood', school: 'SES-Smith' },
    likes: 31,
    comments: 5,
    isLiked: false,
  },
  {
    id: 4,
    user: { name: 'Alyse Roe', avatar: '/placeholder.svg?height=40&width=40' },
    date: 'October 24, 2019',
    title: 'Conference Table',
    content:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    image: '/placeholder.svg?height=200&width=300',
    details: { quantity: 2, material: 'Glass', school: 'SES-Smith' },
    likes: 15,
    comments: 3,
    isLiked: false,
  },
];

export default function SingleUserProfileDetails() {
  const [posts, setPosts] = useState(dummyPosts);

  const handleLike = (postId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              isLiked: !post.isLiked,
              likes: post.isLiked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-xl">
      {/* Left Side - User Account */}
      {/* <div className="w-[400px] bg-white shadow-lg border-r border-gray-200 rounded-xl">
        <UserAccount />
      </div> */}

      {/* Right Side - User Posts */}
      <div className="flex-1 p-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">User Posts</h2>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                {posts.length} posts
              </span>
            </div>
          </div>

          <div className="h-[calc(100vh-120px)] overflow-y-auto space-y-6 pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} onLike={() => handleLike(post.id)} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
