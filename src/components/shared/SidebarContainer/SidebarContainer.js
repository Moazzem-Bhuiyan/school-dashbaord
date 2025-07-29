'use client';

import './Sidebar.css';
import logo from '@/assets/logos/logo.png';
import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import user from '@/assets/icon/account.svg';
import category from '@/assets/icon/category.svg';
import dash from '@/assets/icon/Group.svg';
import faUser from '@/assets/icon/fauser.svg';
import school from '@/assets/icon/school.svg';
import privecy from '@/assets/icon/Vector (2).svg';
import logout from '@/assets/icon/logout.svg';
import approved from '@/assets/icon/approved.svg';

const SidebarContainer = ({ collapsed }) => {
  // const dispatch = useDispatch();
  const router = useRouter();
  const [role, setRole] = useState(null);
  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    setRole(storedRole);
  }, []);

  // Logout handler
  const onClick = (e) => {
    // if (e.key === "logout") {
    //   dispatch(logout());
    //   router.refresh();
    //   router.push("/login");

    //   Success_model({ title: "Logout successful" });
    // }

    console.log('logout success');
  };

  const navLinks = {
    superAdmin: [
      {
        key: 'dashboard',
        icon: <Image src={dash} width={21} height={21} alt="" />,
        label: <Link href={'/admin/dashboard'}>Dashboard</Link>,
      },
      {
        key: 'account-details',
        icon: <Image src={user} width={21} height={21} alt="" />,
        label: <Link href={'/admin/account-details'}>Accounts Details</Link>,
      },
      {
        key: 'Manage-Principal',
        icon: <Image src={faUser} width={23} height={23} className="mt-2" alt="" />,
        label: <Link href={'/admin/manage_Principal'}>Manage Principal</Link>,
      },
      {
        key: 'Manage-school',
        icon: <Image src={school} width={21} height={21} alt="" />,
        label: <Link href={'/admin/manage_school'}>Manage-School</Link>,
      },
      {
        key: 'Manage-category',
        icon: <Image src={category} width={21} height={21} alt="" />,
        label: <Link href={'/admin/category'}>Manage-Category</Link>,
      },
      {
        key: 'Manage-District',
        icon: <Image src={category} width={21} height={21} alt="" />,
        label: <Link href={'/admin/manage_District'}>Manage District</Link>,
      },
      {
        key: 'privacy-policy',
        icon: <Image src={privecy} width={21} height={21} alt="" />,
        label: <Link href="/admin/privacy-policy">Privacy Policy</Link>,
      },
      {
        key: 'logout',
        icon: <Image src={logout} width={21} height={21} alt="" />,
        label: <Link href="/login">Logout</Link>,
      },
    ],
    principle: [
      {
        key: 'dashboard',
        icon: <Image src={dash} width={21} height={21} alt="" />,
        label: <Link href={'/admin/dashboard'}>Dashboard</Link>,
      },
      {
        key: 'account-details',
        icon: <Image src={user} width={21} height={21} alt="" />,
        label: <Link href={'/admin/account-details'}>Accounts Details</Link>,
      },
      {
        key: 'Approve-system',
        icon: <Image src={approved} width={21} height={21} alt="" />,
        label: <Link href={'/admin/approve_post'}>Approve system</Link>,
      },
      {
        key: 'logout',
        icon: <Image src={logout} width={21} height={21} alt="" />,
        label: <Link href="/login">Logout</Link>,
      },
    ],
  };

  const links = navLinks[role];

  // Get current path for sidebar menu item `key`
  const currentPathname = usePathname()?.replace('/admin/', '')?.split(' ')[0];

  return (
    <Sider
      width={320}
      theme="light"
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{
        paddingInline: `${!collapsed ? '10px' : '4px'}`,
        paddingBlock: '30px',
        backgroundColor: '#154462',
        maxHeight: '100vh',
        overflow: 'auto',
      }}
      className="scroll-hide h-screen sticky top-0 z-50"
    >
      <div className="mb-6 flex flex-col justify-center items-center gap-y-5">
        <Link href={'/'}>
          {collapsed ? (
            // Logo small
            <Image src={logo} alt="Logo Of Before After Story" className="h-4 w-auto" />
          ) : (
            <Image src={logo} alt="Logo Of Before After Story" className="h-[200px] w-auto" />
          )}
        </Link>
      </div>

      <Menu
        onClick={onClick}
        defaultSelectedKeys={[currentPathname]}
        mode="inline"
        className="sidebar-menu !bg-transparent space-y-2.5 !border-none"
        items={links}
      />
    </Sider>
  );
};

export default SidebarContainer;
