import {Col, Row} from 'antd';
import {observer} from 'mobx-react-lite';
import React, {useEffect} from 'react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import {useStore} from '../../../app/stores/store';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import ActivityList from './ActivityList';

export default observer(function ActivtiyDashboard() {
  const {activityStore} = useStore();
  const {selectedActivity, editMode} = activityStore;

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore])


  if (activityStore.loadingInitial == false) return <LoadingComponent content='Loading App'/>
  return (
    <Row>
      <Col span={16}><ActivityList/></Col>
      <Col span={8}>{selectedActivity && !editMode &&
          <ActivityDetails/>}
        {editMode &&
            <ActivityForm/>}
      </Col>
    </Row>
  )
})