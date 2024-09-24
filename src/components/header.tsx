'use client'
import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import Link from 'next/link';


const items: MenuProps['items'] = [
    {
        label: <Link href={"/"}>Home</Link>,
        key: 'homepage',
        icon: <MailOutlined />,
    },
    {
        label: <Link href={"/users"}>Manage Users</Link>,
        key: 'users',
        icon: <MailOutlined />,
    },
    {
        label: <Link href={"/blogs"}>Manage Blogs</Link>,
        key: 'blogs',
        icon: <AppstoreOutlined />,
        //disabled: true,
    },
    //   {
    //     label: 'Navigation Three - Submenu',
    //     key: 'SubMenu',
    //     icon: <SettingOutlined />,
    //     children: [
    //       {
    //         type: 'group',
    //         label: 'Item 1',
    //         children: [
    //           {
    //             label: 'Option 1',
    //             key: 'setting:1',
    //           },
    //           {
    //             label: 'Option 2',
    //             key: 'setting:2',
    //           },
    //         ],
    //       },
    //       {
    //         type: 'group',
    //         label: 'Item 2',
    //         children: [
    //           {
    //             label: 'Option 3',
    //             key: 'setting:3',
    //           },
    //           {
    //             label: 'Option 4',
    //             key: 'setting:4',
    //           },
    //         ],
    //       },
    //     ],
    //   },

];

const Header: React.FC = () => {
    const [current, setCurrent] = useState('homepage');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return <>
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}  
        style={{ display: 'flex', justifyContent: 'space-around' }}
        />
        </>;
};

export default Header;