'use client';
import { Modal } from 'antd';
import userImage from '@/assets/images/user-avatar-lg.png';
import Image from 'next/image';

export default function ProfileModal({ open, setOpen }) {
  return (
    <Modal
      centered
      open={open}
      onCancel={() => setOpen(false)}
      footer={null}
      width={600}
      className="profile-modal"
      styles={{ content: { padding: 0, borderRadius: '12px', overflow: 'hidden' } }}
    >
      <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6">
        {/* Header with title and status */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Principal</h2>
          <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
            Active
          </span>
        </div>

        {/* Profile Image Section */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-4 border-blue-400 p-1 bg-white">
              <Image
                src={userImage || '/placeholder.svg'}
                alt="user image"
                height={120}
                width={120}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Profile Information */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">First name</label>
            <div className="bg-gray-50 px-3 py-2 rounded-md text-gray-900">Justina</div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
            <div className="bg-gray-50 px-3 py-2 rounded-md text-gray-900">Ojayluv</div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">School email</label>
            <div className="bg-gray-50 px-3 py-2 rounded-md text-gray-900">justina@gmail.com</div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">District</label>
            <div className="bg-gray-50 px-3 py-2 rounded-md text-gray-900">Feni</div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <div className="bg-gray-50 px-3 py-2 rounded-md text-gray-900">Modhuai</div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
