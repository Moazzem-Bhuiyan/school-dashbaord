'use client';
import { Button, Divider, Form, Input, Modal } from 'antd';
import { RiCloseLargeLine } from 'react-icons/ri';
import { useState } from 'react';

const AddPricipalModal = ({ open, setOpen }) => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log('Form Values:', values);
    setOpen(false);
    form.resetFields();
  };

  return (
    <Modal
      open={open}
      footer={null}
      centered
      onCancel={() => setOpen(false)}
      closeIcon={false}
      style={{ minWidth: 'max-content', position: 'relative' }}
    >
      {/* Close Icon */}
      <div
        className="absolute right-0 top-0 h-12 w-12 cursor-pointer rounded-bl-3xl"
        onClick={() => setOpen(false)}
      >
        <RiCloseLargeLine size={18} color="black" className="absolute left-1/3 top-1/3" />
      </div>

      <div className="pb-5">
        <h4 className="text-xl font-bold mb-2">Add Principal</h4>
        <Divider />
        <div className="flex-1">
          <Form
            form={form}
            onFinish={handleSubmit}
            layout="vertical"
            style={{ maxWidth: 500, marginTop: '25px' }}
          >
            <Form.Item
              label="First name"
              name="firstName"
              rules={[{ required: true, message: 'Please enter first name' }]}
            >
              <Input placeholder="Enter first name" className="rounded-full py-2" />
            </Form.Item>

            <Form.Item
              label="Last name"
              name="lastName"
              rules={[{ required: true, message: 'Please enter last name' }]}
            >
              <Input placeholder="Enter last name" className="rounded-full py-2" />
            </Form.Item>

            <Form.Item
              label="School email"
              name="email"
              rules={[{ required: true, type: 'email', message: 'Enter a valid email' }]}
            >
              <Input placeholder="Enter email" className="rounded-full py-2" />
            </Form.Item>

            <Form.Item
              label="District"
              name="district"
              rules={[{ required: true, message: 'Please enter district' }]}
            >
              <Input placeholder="Enter district" className="rounded-full py-2" />
            </Form.Item>

            <Form.Item
              label="Location"
              name="location"
              rules={[{ required: true, message: 'Please enter location' }]}
            >
              <Input placeholder="Enter location" className="rounded-full py-2" />
            </Form.Item>

            <Form.Item>
              <Button
                htmlType="submit"
                size="large"
                block
                style={{ backgroundColor: '#2474A6', color: 'white', borderRadius: '999px' }}
              >
                Add
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Modal>
  );
};

export default AddPricipalModal;
