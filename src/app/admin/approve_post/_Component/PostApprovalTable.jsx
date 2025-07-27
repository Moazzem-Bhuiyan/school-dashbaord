'use client';

import { Input, Table } from 'antd';
import { Tooltip } from 'antd';
import { ConfigProvider } from 'antd';
import { Search } from 'lucide-react';
import userImage from '@/assets/images/user-avatar-lg.png';
import { Eye } from 'lucide-react';
import { UserX } from 'lucide-react';
import { useState } from 'react';
import { Filter } from 'lucide-react';
import Image from 'next/image';
import CustomConfirm from '@/components/CustomConfirm/CustomConfirm';
import { message } from 'antd';
import ProfileModal from '@/components/SharedModals/ProfileModal';
import { Tag } from 'antd';
import { useRouter } from 'next/navigation';

// Dummy table Data
const data = Array.from({ length: 50 }).map((_, inx) => ({
  key: inx + 1,
  name: 'Robert Fox',
  userImg: userImage,
  email: 'justina@gmail.com',
  contact: '+1234567890',
  date: '11 oct 24, 11.10PM',
  status: 'Joined',
}));

export default function PostApprovalTable() {
  const [searchText, setSearchText] = useState('');
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const router = useRouter();

  // Block user handler
  const handleBlockUser = () => {
    message.success('User blocked successfully');
  };

  // ================== Table Columns ================
  const columns = [
    { title: 'Serial', dataIndex: 'key', render: (value) => `#${value}` },
    {
      title: 'Name',
      dataIndex: 'name',
      render: (value, record) => (
        <div className="flex-center-start gap-x-2">
          <Image
            src={record.userImg}
            alt="User avatar"
            width={1200}
            height={1200}
            className="rounded-full w-10 h-auto aspect-square"
          />
          <p className="font-medium">{value}</p>
        </div>
      ),
    },
    { title: 'Email', dataIndex: 'email' },

    { title: 'Date', dataIndex: 'date' },
    {
      title: 'Post',
      render: () => (
        <div>
          <button
            onClick={() => {
              router.push('/admin/singleUserprofile/postDetails');
            }}
            className="text-primary-blue border rounded-lg px-3 py-1 border-[#1B70A6] shadow-md"
          >
            View
          </button>
        </div>
      ),
    },
    {
      title: 'Action',
      render: () => (
        <div className="flex-center-start gap-x-3">
          <Tooltip title="Show Details">
            <CustomConfirm
              title="Approve Post"
              description="Are you sure to approve this post?"
              onConfirm={handleBlockUser}
            >
              <button
                className="bg-[#1B70A6] border text-white rounded-lg px-3 py-1 border-[#1B70A6] shadow-md"
                onClick={() => {}}
              >
                Approve
              </button>
            </CustomConfirm>
          </Tooltip>

          <Tooltip title="Deny Post">
            <CustomConfirm
              title=" Deny Post"
              description="Are you sure to deny this post?"
              onConfirm={handleBlockUser}
            >
              <button className="bg-[#F16365] border text-white rounded-lg px-3 py-1 border-[#F16365] shadow-md">
                Deny
              </button>
            </CustomConfirm>
          </Tooltip>
        </div>
      ),
    },
  ];

  return (
    <ConfigProvider
      theme={{ token: { colorPrimary: '#1B70A6', colorInfo: '#1B70A6', borderRadius: 12 } }}
    >
      <div className="w-1/3 ml-auto gap-x-5 mb-3">
        <Input
          placeholder="Search by name or email"
          prefix={<Search className="mr-2 text-black" size={20} />}
          className="h-11 !border !rounded-lg !text-base"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <Table
        style={{ overflowX: 'auto' }}
        columns={columns}
        dataSource={data}
        scroll={{ x: '100%' }}
      ></Table>
    </ConfigProvider>
  );
}
