import {Col, Row} from 'antd';
import {observer} from 'mobx-react-lite';
import React from 'react';
import {Activity} from '../../../app/models/activity';
import {useStore} from '../../../app/stores/store';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import ActivityList from './ActivityList';

interface Props {
    activities: Activity[];
    deleteActivity: (id: string) => void;
    submitting: boolean;
}


export default observer(function ActivtiyDashboard({activities, deleteActivity, submitting}: Props) {
    const {activityStore} = useStore();
    const {selectedActivity, editMode} = activityStore;
    return (
        <Row>
            <Col span={16}><ActivityList activities={activities} submitting={submitting}
                                         deleteActivity={deleteActivity}/></Col>
            <Col span={8}>{selectedActivity && !editMode &&
                <ActivityDetails/>}
                {editMode &&
                    <ActivityForm />}
            </Col>
        </Row>
    )
})