import '../../App.css';
import React, {
    useEffect, Fragment
} from 'react'
import NavBar from './NavBar'
import {Container} from 'semantic-ui-react';
import ActivtiyDashboard from '../../features/activities/dashboard/ActivtiyDashboard';
import LoadingComponent from './LoadingComponent';
import {useStore} from '../stores/store';
import {observer} from 'mobx-react-lite';

function App() {
    const {activityStore} = useStore();

    useEffect(() => {
        activityStore.loadActivities();
    }, [activityStore])


    if (activityStore.loadingInitial == false) return <LoadingComponent content='Loading App'/>
    return (
        <Fragment>
            <NavBar/>
            <Container className='container'>
                <ActivtiyDashboard/>
            </Container>
        </Fragment>
    );
}

export default observer(App);
