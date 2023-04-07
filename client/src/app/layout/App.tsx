import '../../App.css';
import React, {
    useState, useEffect, Fragment
} from 'react'
import {Activity} from '../models/activity';
import NavBar from './NavBar'
import {Container} from 'semantic-ui-react';
import ActivtiyDashboard from '../../features/activities/dashboard/ActivtiyDashboard';
import agent from '../api/agent';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {
    const {activityStore} = useStore();
    const [activities, setActivites] = useState<Activity[]>([]);
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
       activityStore.loadActivities();
    }, [activityStore])
    
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
                    deleteActivity={handleDeleteActivity}
                    submitting={submitting}
                />
            </Container>
        </Fragment>
    );
}

export default observer(App);
