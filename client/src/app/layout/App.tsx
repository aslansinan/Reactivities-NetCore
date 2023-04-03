import '../../App.css';
import axios from 'axios'
import React, {
    useState, useEffect, Fragment
} from 'react'
import {List} from 'antd'
import {Activity} from '../models/activity';
import NavBar from './NavBar'
import {Container} from 'semantic-ui-react';
import ActivtiyDashboard from '../../features/activities/dashboard/ActivtiyDashboard';

function App() {
    const [activities, setActivites] = useState<Activity[]>([]);
    const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
    const[editMode, setEditMode] = useState(false);

    useEffect(() => {
        axios.get<Activity[]>('https://localhost:44355/api/Activities').then((response) => {
            console.log(response);
            // @ts-ignore
            setActivites(response.data)
        })
    }, [])

    function handleSelectActivity(id: string) {
        setSelectedActivity(activities.find(x => x.id))
    }

    function handleCancelSelectActivity() {
        setSelectedActivity(undefined);
    }

    function handleFormOpen(id?: string){
        id ? handleSelectActivity(id) : handleCancelSelectActivity();
        setEditMode(true);
    }
    
    function handleFormClose() {
        setEditMode(false);
    }
    
    return (
        <Fragment>
            <NavBar openForm={handleFormOpen}/>
            <Container className='container'>
                <ActivtiyDashboard 
                    activities = {activities}
                    selectedActivity = {selectedActivity}
                    selectActivity = {handleSelectActivity}
                    cancelSelectActivity = {handleCancelSelectActivity}
                    editMode = {editMode}
                    openForm = {handleFormOpen}
                    closeForm = {handleFormClose}
                />
            </Container>
        </Fragment>
    );
}

export default App;
