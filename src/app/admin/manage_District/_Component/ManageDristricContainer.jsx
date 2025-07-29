'use client';
import CustomConfirm from '@/components/CustomConfirm/CustomConfirm';
import { Button, Table, Tooltip } from 'antd';
import { Edit, PlusCircle, Trash } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import AddDistricModal from './AddDistricModal';
import EditDistricModal from './EditDristicModal';

// Dummy table data
const data = Array.from({ length: 5 }).map((_, inx) => ({
  key: inx + 1,
  name: 'Wood',
  createdAt: '11 oct 24, 11.10PM',
  logoImage: '/camera.png',
  districtname: 'Feni',
  districtcode: '39000',
  type: 'Strict',
}));

const ManageDristricContainer = () => {
  const [open, setOpen] = useState(false);
  const [editopen, setEditOpen] = useState(false);
  // ================== Table Columns ================
  const columns = [
    {
      title: 'Serial',
      dataIndex: 'key',
      render: (value) => `#${value}`,
    },
    {
      title: 'Logo',
      dataIndex: 'logo',
      render: (value, record) => (
        <div className="flex-center-start gap-x-2">
          <Image
            src={record.logoImage}
            alt="User avatar"
            width={40}
            height={40}
            className="rounded-full !w-10 !h-auto aspect-square border-2 border-gray-200"
          />
        </div>
      ),
    },
    {
      title: 'District Name',
      dataIndex: 'districtname',
    },
    {
      title: 'District Code',
      dataIndex: 'districtcode',
    },
    {
      title: 'Type',
      dataIndex: 'type',
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      render: (value, record) => (
        <div className="flex-center-start gap-x-2">
          <p className="font-medium">{value}</p>
        </div>
      ),
    },
    {
      title: 'Action',
      render: (_, record) => (
        <div className="flex justify-start gap-x-3">
          <Tooltip title="Edit">
            <button onClick={() => setEditOpen(true)}>
              <Edit color="#1B70A6" size={22} />
            </button>
          </Tooltip>

          <Tooltip title="Delete">
            <CustomConfirm
              title="Delete This district"
              description="Are you sure to delete this district?"
              onConfirm={() => handleDelete(record?._id)}
            >
              <button>
                <Trash color="#F16365" size={22} />
              </button>
            </CustomConfirm>
          </Tooltip>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Button
        type="primary"
        size="large"
        icon={<PlusCircle size={20} />}
        iconPosition="start"
        className="!w-full !py-6"
        style={{ backgroundColor: '#2474A6' }}
        onClick={() => setOpen(true)}
      >
        Add District
      </Button>
      <Table
        style={{ overflowX: 'auto', marginTop: '30px' }}
        columns={columns}
        dataSource={data}
        scroll={{ x: '100%' }}
        // loading={isLoading}
        // pagination={{
        //   current: currentPage,
        //   onChange: (page) => setCurrentPage(page),
        //   pageSize: 10,
        //   total: jobTitle?.meta?.total,
        //   showTotal: (total) => `Total ${total} categories`,
        // }}
      ></Table>
      <AddDistricModal isModalOpen={open} setIsModalOpen={setOpen} />
      <EditDistricModal isModalOpen={editopen} setIsModalOpen={setEditOpen} />
    </div>
  );
};

export default ManageDristricContainer;
