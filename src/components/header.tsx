'use client'
import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import Link from 'next/link';


// const items: MenuProps['items'] = [
//     {
//         label: <Link href={"/"}>School</Link>,
//         key: 'homepage',
//         // icon: <MailOutlined />,
//     },
//     {
//         label: <Link href={"/users"}>News</Link>,
//         key: 'users',
//         // icon: <MailOutlined />,
//     },
//     {
//         label: <Link href={"/blogs"}>Blog</Link>,
//         key: 'blogs',
//         // icon: <AppstoreOutlined />,
//         //disabled: true,
//     },
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

// ];

const Header: React.FC = () => {
    const [current, setCurrent] = useState('homepage');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return <>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems:'center', backgroundColor:'#2596be', padding:'10px'}}>
            <Link

                href='/users'
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-transparent rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800 mr-20"
            >
                Về chúng tôi
            </Link>
            {/* <Menu onClick={onClick} selectedKeys={[current]} mode="vertical" items={items}
                style={{ display: 'flex', justifyContent: 'space-evenly' }}
            /> */}
            <div>
            <Link href='/schools'
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-transparent rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-white focus:bg-white dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800 mr-20"
            >
                Trường
            </Link>
            <Link href='/users'
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-transparent rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-white focus:bg-white dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800 mr-20"
            >
                Tin tức
            </Link>
            <Link href='/blogs'
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-transparent rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-white focus:bg-white dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800 mr-20"
            >
                Chia sẻ
            </Link>
            </div>
            <Link
                href='/blogs'
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-white rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-white focus:bg-white dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800 mr-20"
            >
                Nâng cấp
            </Link>
        </div>
    </>;
};

export default Header;