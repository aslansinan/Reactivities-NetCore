import {Button, Card, Space} from 'antd';
import Meta from 'antd/es/card/Meta';
import React from 'react';
import {Activity} from '../../../app/models/activity';

interface Props {
    activity: Activity
    cancelSelectActivity: () => void;
    openForm: (id: string) => void;
}

export default function ActivityDetails({activity, cancelSelectActivity,openForm}: Props) {
    return (
        <Card
            hoverable
            style={{width: 320, marginTop: 35}}
            cover={<img alt="example" src={`/assets/categoryImages/${activity.category}.jpg`}/>}
        >
            <Meta title={activity.title} description={activity.date}/>
            <p>{activity.description}</p>
            <Space style={{marginTop: 10, float: 'right'}}>
                <Button onClick={() => openForm(activity.id)} type="primary">Edit</Button>
                <Button type="dashed" onClick={cancelSelectActivity}>Cancel</Button>
            </Space>
        </Card>
    )
}