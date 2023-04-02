import '../../App.css';
import axios  from 'axios'
import React,{
  useState,useEffect, Fragment
} from 'react'
import {List} from 'antd'
import { Activity } from '../models/activity';
import NavBar from './NavBar'
import { Container } from 'semantic-ui-react';
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
        <List>
          {activities.map((activity) => (
              <li key={activity.id}>{activity.title}</li>
          ))}
        </List>
        </Container>
    </Fragment>
  );
}
export default App;
