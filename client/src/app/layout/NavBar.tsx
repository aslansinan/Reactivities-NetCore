import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';
import {Button, MenuProps } from 'antd';
import { Menu } from 'antd';

const items: MenuProps['items'] = [
    {
        label: 'Reactivities',
        key: 'mail',
        icon: <MailOutlined />,
        className : 'mail',
    },
    {
        label: 'Activities',
        key: 'mail2',
        icon: <AppstoreOutlined />,
        className : 'mail',
    },
    {   
        label: (
            <Button type="primary">
                Create Activity
            </Button>
        ),
        key: 'alipay',
        className : 'mail',
    },
];

const NavBar: React.FC = () => {
    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return <Menu onClick={onClick} className='Menu' selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default NavBar;