import '../../App.css';
import React, {
    Fragment
} from 'react'
import NavBar from './NavBar'
import {Container} from 'semantic-ui-react';
import ActivtiyDashboard from '../../features/activities/dashboard/ActivtiyDashboard';
import {observer} from 'mobx-react-lite';
import { Outlet } from 'react-router-dom';

function App() {
  
    return (
        <Fragment>
            <NavBar/>
            <Container className='container'>
               <Outlet />
            </Container>
        </Fragment>
    );
}

export default observer(App);
