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
import {v4 as uuid} from 'uuid'
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
    function handleCreateOrEditActivity(activity:Activity) {
        activity.id  
            ? setActivites([...activities.filter(x=>x.id !==activity.id),activity])
            : setActivites([...activities,{...activity,id:uuid()}])
        setEditMode(false);
        setSelectedActivity(activity);
    }
    function handleDeleteActivity(id:string){
        setActivites([...activities.filter(x=>x.id !==id)])
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
                    createOrEdit={handleCreateOrEditActivity}
                    deleteActivity={handleDeleteActivity}
                />
            </Container>
        </Fragment>
    );
}

export default App;
