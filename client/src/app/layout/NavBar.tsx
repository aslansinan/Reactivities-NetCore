import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';
import {Button, MenuProps } from 'antd';
import { Menu } from 'antd';
import { useStore } from '../stores/store';

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


export default function NavBar(){
    const [current, setCurrent] = useState('mail');
    const  {activityStore} = useStore();

    return <Menu onClick={() => activityStore.openForm()} className='Menu' selectedKeys={[current]} mode="horizontal" items={items} />;
};
    