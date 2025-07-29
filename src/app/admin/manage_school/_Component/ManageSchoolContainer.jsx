'use client';

import { Button, Table, Tooltip } from 'antd';
import { PlusCircle, Trash } from 'lucide-react';
import { useState } from 'react';
import CustomConfirm from '@/components/CustomConfirm/CustomConfirm';
import AddSchoolModal from './AddSchoolModal';

// Dummy table data
const data = Array.from({ length: 5 }).map((_, inx) => ({
  key: inx + 1,
  name: 'Wood',
  createdAt: '11 oct 24, 11.10PM',
  districtname: 'Feni',
}));

export default function ManageSchoolContainer() {
  const [showCreateCategoryModal, setShowCreateCategoryModal] = useState(false);
  const [showEditCategoryModal, setShowEditCategoryModal] = useState(false);

  // ================== Table Columns ================
  const columns = [
    {
      title: 'Serial',
      dataIndex: 'key',
      render: (value) => `#${value}`,
    },
    {
      title: 'School Name',
      dataIndex: 'name',
      render: (value) => (
        <div className="flex-center-start gap-x-2">
          <p className="font-medium">{value}</p>
        </div>
      ),
    },
    {
      title: 'District  Name',
      dataIndex: 'districtname',
      render: (value) => (
        <div className="flex-center-start gap-x-2">
          <p className="font-medium">{value}</p>
        </div>
      ),
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
          <Tooltip title="Delete">
            <CustomConfirm
              title="Delete This School"
              description="Are you sure to delete this school?"
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
        onClick={() => setShowCreateCategoryModal(true)}
      >
        Add School
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

      {/* Create Category Modal */}
      <AddSchoolModal open={showCreateCategoryModal} setOpen={setShowCreateCategoryModal} />

      {/* Edit category modal */}
      {/* <EditCategoryModal open={showEditCategoryModal} setOpen={setShowEditCategoryModal} /> */}
    </div>
  );
}
