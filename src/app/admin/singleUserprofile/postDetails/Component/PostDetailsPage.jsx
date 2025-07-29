'use client';

import { ArrowLeft } from 'lucide-react';

import { Avatar, Image } from 'antd';
import { useState } from 'react';

export default function PostDetailsPage() {
  const [mainImage, setMainImage] = useState('/postimage.png');
  const thumbnailImages = ['/postimage.png', '/postimage.png', '/postimage.png', '/postimage.png'];

  const itemDetails = [
    { label: 'Quantity:', value: '10 piece' },
    { label: 'Material:', value: 'wood' },
    { label: 'School:', value: 'SES-Smith' },
    { label: 'Category:', value: 'Furniture' },
  ];

  return (
    <div className="min-h-screen bg-white rounded-lg shadow-xl">
      {/* Header */}
      <div className=" px-6 py-4 flex items-center gap-4  top-0 z-10">
        <button
          onClick={() => window.history.back()}
          variant="ghost"
          size="icon"
          className="h-10 w-10 hover:bg-gray-100 rounded-full"
        >
          <ArrowLeft size={20} className="h-8 w-8 text-black" />
        </button>
        <h1 className="text-xl md:text-2xl font-bold text-gray-900">Item Details</h1>
      </div>

      <div className="h-[calc(100vh-120px)] overflow-y-auto space-y-6 pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        <div className="">
          {/* Image Section */}
          <div className="">
            <div className="  overflow-auto">
              {/* Main Image */}
              <div className="">
                <Image
                  src={mainImage}
                  alt="Main item image"
                  fill
                  className="object-cover transition-transform duration-300"
                  // sizes="(max-width: 768px) 100vw, 66vw"
                  priority
                />
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-3 p-4">
                {thumbnailImages.map((src, index) => (
                  <button
                    key={index}
                    className="relative aspect-square rounded-lg overflow-hidden hover:opacity-90 transition-all duration-200 border-2 border-transparent hover:border-blue-500"
                    onClick={() => setMainImage(src)}
                  >
                    <Image
                      src={src || '/placeholder.svg'}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="100px"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
              {/* User Info */}
              <div className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center gap-3">
                  <Avatar size={48} className="bg-blue-500">
                    AR
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-900">Alyse Roe</div>
                    <div className="text-sm text-gray-500">Posted by</div>
                  </div>
                </div>
                <span className="text-sm text-gray-500">May 18, 2025</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-900">Sofa Set</h2>

              {/* Description */}
              <div className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in
                  a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum
                  passage, and going through the cites of the word in classical literature,
                  discovered the undoubtable source.
                </p>
              </div>

              {/* Other Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Other Details</h3>
                <div className="grid gap-3">
                  {itemDetails.map((detail, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-gray-100"
                    >
                      <span className="text-gray-600 text-sm">{detail.label}</span>
                      <span className="text-gray-900 text-sm font-medium">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
