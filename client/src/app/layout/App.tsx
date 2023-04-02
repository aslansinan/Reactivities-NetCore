import '../../App.css';
import axios  from 'axios'
import React,{
  useState,useEffect, Fragment
} from 'react'
import {List} from 'antd'
import { Activity } from '../models/activity';
import NavBar from './NavBar'
import { Container } from 'semantic-ui-react';
import ActivtiyDashboard from '../../features/activities/dashboard/ActivtiyDashboard';
function App() {
  const [activities, setActivites] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('https://localhost:44355/api/Activities').then((response)=>{
      console.log(response);
      // @ts-ignore
      setActivites(response.data)
    })
  },[])

  return (
    <Fragment>
        <NavBar />
        <Container className='container'>
            <ActivtiyDashboard activities={activities} />
        </Container>
    </Fragment>
  );
}
export default App;
