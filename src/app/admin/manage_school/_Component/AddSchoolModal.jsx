'use client';

import FormWrapper from '@/components/Form/FormWrapper';
import UInput from '@/components/Form/UInput';
import USelect from '@/components/Form/USelect';
import { Button, Modal } from 'antd';
import { Plus } from 'lucide-react';

export default function AddSchoolModal({ open, setOpen }) {
  return (
    <Modal
      centered
      open={open}
      setOpen={setOpen}
      footer={null}
      onCancel={() => {
        setOpen(false);
      }}
      title=" Add School"
    >
      <FormWrapper>
        <UInput
          type="text"
          name="name"
          label="School Name"
          required={true}
          placeholder="Enter school name"
        />
        <USelect
          name="Select District"
          label=" Select District"
          required={true}
          options={[
            { value: 'public', label: 'Feni' },
            { value: 'private', label: 'Dhaka' },
          ]}
        />

        <Button
          type="primary"
          size="large"
          className="w-full"
          htmlType="submit"
          style={{ backgroundColor: '#2474A6' }}
        >
          Submit
        </Button>
      </FormWrapper>
    </Modal>
  );
}
