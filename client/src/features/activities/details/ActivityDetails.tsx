import {Button, Card, Space} from 'antd';
import Meta from 'antd/es/card/Meta';
import React from 'react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';

export default function ActivityDetails() {
    const {activityStore} = useStore();
    const  {selectedActivity:activity,openForm,cancelSelectedActivity} = activityStore;
    if (!activity) return <LoadingComponent/>;
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
                <Button type="dashed" onClick={cancelSelectedActivity}>Cancel</Button>
            </Space>
        </Card>
    )
}