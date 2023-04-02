import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';
import { MenuProps } from 'antd';
import { Menu } from 'antd';

const items: MenuProps['items'] = [
    {
        label: 'Reactivities',
        key: 'mail',
        icon: <MailOutlined />,
    },
    {
        label: 'Activities',
        key: 'mail2',
        icon: <AppstoreOutlined />,
    },
    {
        label: (
            <button>Navigation Four - Link</button>
        ),
        key: 'alipay',
    },
];

const NavBar: React.FC = () => {
    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default NavBar;