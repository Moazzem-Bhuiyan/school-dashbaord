'use client';
import { Button, Divider, Form, Input, InputNumber, Select, Upload } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import Modal from 'antd/es/modal/Modal';
import { UploadOutlined } from '@ant-design/icons';
import React from 'react';

const EditDistricModal = ({ isModalOpen, setIsModalOpen }) => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log('Form Values:', values);
    setIsModalOpen(false);
    form.resetFields();
  };
  return (
    <div>
      <Modal centered open={isModalOpen} onCancel={() => setIsModalOpen(false)} footer={null}>
        <div className="pb-5">
          <h4 className="text-center text-2xl font-medium">Edit Distric Details</h4>
          <Divider />
          <div className="flex-1">
            <Form
              form={form}
              onFinish={handleSubmit}
              layout="vertical"
              initialValues={{
                category: '',
              }}
            >
              {/* Image Upload */}
              <Form.Item
                name="bannerImage"
                valuePropName="fileList"
                getValueFromEvent={(e) => (Array.isArray(e) ? e : e && e.fileList)}
                rules={[
                  {
                    required: true,
                    message: 'Please upload a logo image',
                  },
                ]}
                style={{
                  textAlign: 'center',
                  border: '2px dashed #B87CAE',
                  paddingBlock: '20px',
                  borderRadius: '10px',
                }}
              >
                <Upload name="imageBanner" listType="picture" beforeUpload={(file) => false}>
                  <Button icon={<UploadOutlined />}>Upload Distric logo</Button>
                </Upload>
              </Form.Item>

              {/* District Name Name */}
              <Form.Item
                name="DistrictName"
                label="District Name"
                rules={[
                  {
                    required: true,
                    message: 'Please input District Name',
                  },
                ]}
              >
                <Input placeholder="Enter District Name" />
              </Form.Item>

              {/* Banner Link */}
              <Form.Item
                name="District-Code"
                label="District Code"
                rules={[
                  {
                    required: true,
                    message: 'Please input District Code',
                  },
                ]}
              >
                <InputNumber
                  style={{ width: '100%' }}
                  max={100}
                  min={1}
                  placeholder="Enter banner link"
                />
              </Form.Item>

              {/* type */}
              <Form.Item
                name="type"
                label="Type"
                rules={[
                  {
                    required: true,
                    message: 'Please input type',
                  },
                ]}
              >
                <Select placeholder="Select type">
                  <Select.Option value="1">Strict</Select.Option>
                  <Select.Option value="2">Non-Strict</Select.Option>
                </Select>
              </Form.Item>

              {/* Submit Button */}
              <Button
                htmlType="submit"
                size="large"
                block
                // loading={isLoading}
                style={{
                  backgroundColor: '#0059A4',
                  color: 'white',
                  marginTop: '20px',
                }}
              >
                Upload
              </Button>
            </Form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default EditDistricModal;
