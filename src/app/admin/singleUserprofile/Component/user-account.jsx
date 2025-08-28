'use client';

import { useGetUserByIdQuery } from '@/redux/api/userApi';
import { Image } from 'antd';
import { useSearchParams } from 'next/navigation';
import { DNA } from 'react-loader-spinner';

export default function UserAccount() {
  // get user id from search params
  const searchParams = useSearchParams();
  const userId = searchParams?.get('id');

  //  get single user data from api using userId
  const { data: teacherdata, isLoading } = useGetUserByIdQuery(userId, { skip: !userId });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-6 rounded-xl bg-white shadow-lg min-h-screen min-w-[400px]">
        <DNA
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    );
  }
  const teacher = teacherdata?.data?.teacher?.user || {};
  const userData = {
    firstName: teacher?.name || 'N/A',
    email: teacher?.email || 'N/A',
    roomNumber: teacher?.roomNumber || 'N/A',
    districtCode: teacher?.district?.code || 'N/A',
    schoolName: teacher?.school?.name || 'N/A',
  };

  return (
    <div className="p-6 rounded-xl bg-white shadow-lg min-h-screen min-w-[400px]">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-bold text-gray-800">User Account</h2>
      </div>

      {/* Profile Image */}
      <div className="text-center mb-8">
        <div className="relative inline-block">
          <div className="w-40 h-40 rounded-full border-4 border-blue-200 overflow-hidden  bg-gray-100 shadow-lg">
            <Image
              src={teacher?.image || '/placeholder.svg'}
              alt="User Avatar"
              width={1200}
              height={1200}
              className="!w-40 !h-40 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Static Info Fields */}
      <div className="space-y-5">
        <div>
          <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">
            Name
          </label>
          <h3 className="text-base font-medium text-gray-800">{userData.firstName}</h3>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">
            School Email
          </label>
          <h3 className="text-base font-medium text-gray-800">{userData.email}</h3>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">
            Room Number
          </label>
          <h3 className="text-base font-medium text-gray-800">{userData.roomNumber}</h3>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">
            District Code
          </label>
          <h3 className="text-base font-medium text-gray-800">{userData.districtCode}</h3>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">
            School Name
          </label>
          <h3 className="text-base font-medium text-gray-800">{userData.schoolName}</h3>
        </div>
      </div>
      {/* {role === 'principle' && (
        <div className="flex justify-center mt-8">
          <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded w-full">
            Remove Account
          </button>
        </div>
      )} */}
    </div>
  );
}
