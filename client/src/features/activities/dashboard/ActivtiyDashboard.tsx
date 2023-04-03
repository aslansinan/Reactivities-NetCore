import {Col, Row} from 'antd';
import React from 'react';
import {Activity} from '../../../app/models/activity';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import ActivityList from './ActivityList';

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void
    createOrEdit: (activity: Activity) => void;
}

export default function ActivtiyDashboard({
                                              activities, selectedActivity, selectActivity,
                                              cancelSelectActivity,
                                              editMode, openForm, closeForm,createOrEdit
                                          }: Props) {
    return (
        <Row>
            <Col span={16}><ActivityList activities={activities} selectActivity={selectActivity}/></Col>
            <Col span={8}>{selectedActivity && !editMode &&
                <ActivityDetails
                    activity={selectedActivity}
                    cancelSelectActivity={cancelSelectActivity}
                    openForm={openForm}
                />}
                {editMode &&
                    <ActivityForm closeForm={closeForm} activity={selectedActivity} createOrEdit={createOrEdit}/>}
            </Col>
        </Row>
    )
}