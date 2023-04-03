import {Col, Row } from 'antd';
import React from 'react';
import {Activity} from '../../../app/models/activity';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import ActivityList from './ActivityList';

interface Props {
    activities: Activity[];
}

export default function ActivtiyDashboard({activities}: Props) {
    return (
        <Row>
            <Col span={16}><ActivityList activities={activities}/></Col>
            <Col span={8}>{activities[0] &&
                <ActivityDetails activity={activities[0]}/>}
                <ActivityForm />
            </Col>
        </Row>
    )
}