import {Button, Card, Space} from 'antd';
import Meta from 'antd/es/card/Meta';
import React from 'react';
import {Activity} from '../../../app/models/activity';

interface Props {
    activity: Activity
}

export default function ActivityDetails({activity}: Props) {
    return (
        <Card
            hoverable
            style={{width: 380, marginTop: 35}}
            cover={<img alt="example" src={`/assets/categoryImages/${activity.category}.jpg`}/>}
        >
            <Meta title={activity.title} description={activity.date}/>
            <p>{activity.description}</p>
            <Space style={{marginTop: 10,float: 'right'}}>
                <Button type="primary">Edit</Button>
                <Button type="dashed">Cancel</Button>
            </Space>
        </Card>
    )
}