import '../../App.css';
import axios  from 'axios'
import {
  useState,useEffect
} from 'react'
import {Card,List} from 'antd'
import { Activity } from '../models/activity';
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
      <Card hoverable
            style={{ width: 1490 }}>
        <List>
          {activities.map((activity) => (
              <li key={activity.id}>{activity.title}</li>
          ))}
        </List>
      </Card>
    </div>
  );
}
export default App;
