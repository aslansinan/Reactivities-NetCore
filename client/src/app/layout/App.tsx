import '../../App.css';
import axios  from 'axios'
import {
  useState,useEffect
} from 'react'
import {List} from 'semantic-ui-react'
import { Activity } from '../models/activity';
import NavBar from './NavBar'
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
    <div className="App">
        <NavBar />
        <List>
          {activities.map((activity) => (
              <li key={activity.id}>{activity.title}</li>
          ))}
        </List>
    </div>
  );
}
export default App;
