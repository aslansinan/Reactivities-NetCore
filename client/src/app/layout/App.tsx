import '../../App.css';
import React, {
    useState, useEffect, Fragment
} from 'react'
import {Activity} from '../models/activity';
import NavBar from './NavBar'
import {Container} from 'semantic-ui-react';
import ActivtiyDashboard from '../../features/activities/dashboard/ActivtiyDashboard';
import {v4 as uuid} from 'uuid'
import agent from '../api/agent';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {
    const {activityStore} = useStore();
    const [activities, setActivites] = useState<Activity[]>([]);
    const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
    const [editMode, setEditMode] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
       activityStore.loadActivities();
    }, [activityStore])
    
    function handleCreateOrEditActivity(activity: Activity) {
        setSubmitting(true);
        if (activity.id) {
            agent.Activities.update(activity).then(() => {
                setActivites([...activities.filter(x => x.id !== activity.id), activity])
                setSelectedActivity(activity);
                setEditMode(false);
                setSubmitting(false);
            })
        } else {
            activity.id = uuid();
            agent.Activities.create(activity).then(() => {
                setActivites([...activities, activity])
                setSelectedActivity(activity);
                setEditMode(false);
                setSubmitting(false);
            })
        }
    }

    function handleDeleteActivity(id: string) {
        setSubmitting(true);
        agent.Activities.delete(id).then(() => {
            setActivites([...activities.filter(x => x.id !== id)])
            setSubmitting(false)
        })
    }

    if (activityStore.loadingInitial == false) return <LoadingComponent content='Loading App'/>
    return (
        <Fragment>
            <NavBar/>
            <Container className='container'>
                <ActivtiyDashboard
                    activities={activityStore.activities}
                    createOrEdit={handleCreateOrEditActivity}
                    deleteActivity={handleDeleteActivity}
                    submitting={submitting}
                />
            </Container>
        </Fragment>
    );
}

export default observer(App);
