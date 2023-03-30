import './App.css';
import axios  from 'axios'
import {
  useState,useEffect
} from 'react'
import {Card,List} from 'antd'
function App() {
  const [activities, setActivites] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:44355/api/Activities').then((response)=>{
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
          {activities.map((activity:any) => (
              <li key={activity.id}>{activity.title}</li>
          ))}
        </List>
      </Card>
    </div>
  );
}
export default App;
