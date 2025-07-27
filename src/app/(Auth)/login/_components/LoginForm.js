'use client';

import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@/schema/authSchema';
import FormWrapper from '@/components/Form/FormWrapper';
import UInput from '@/components/Form/UInput';

import { Button } from 'antd';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const router = useRouter();

  const onLoginSubmit = (data) => {
    if (data.email === 'admin@gmail.com') {
      localStorage.setItem('role', 'superAdmin');
    }
    if (data.email === 'pricipal@gmail.com') {
      localStorage.setItem('role', 'principle');
    }
    router.push('/admin/dashboard');
  };

  return (
    <div className="px-6 py-8 shadow-none shadow-primary-blue/10 w-full bg-transparent rounded-md text-white">
      <section className="mb-8 space-y-2">
        <h4 className="text-3xl font-semibold text-white">Welcome back!</h4>
        <p className=" text-white">Sign in to your account</p>
      </section>

      <FormWrapper onSubmit={onLoginSubmit} resolver={zodResolver(loginSchema)}>
        <UInput
          name="email"
          type="email"
          label="Email"
          placeholder="Enter your email"
          size="large"
          className="!h-10 text-white"
          labelStyles={{ color: 'white' }}
        />

        <UInput
          name="password"
          label="Password"
          type="password"
          placeholder="*************"
          size="large"
          className="!h-10 !mb-0"
          labelStyles={{ color: 'white' }}
        />

        <Button
          htmlType="submit"
          type="primary"
          size="large"
          className="w-full !font-semibold !h-10"
          block
          style={{ backgroundColor: '#2474A6' }}
        >
          Log In
        </Button>

        <Link
          href="/forgot-password"
          className="text-white text-center block mt-2 font-medium hover:text-primary-blue/85"
        >
          I forgot my password
        </Link>
      </FormWrapper>
    </div>
  );
}
