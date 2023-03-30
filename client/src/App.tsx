import './App.css';
import axios  from 'axios'
import {
  useState,useEffect
} from 'react'
import {Header,List} from 'semantic-ui-react'
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
      <Header as='h2' icon='users' content='Reactivities'>
        <List>
          {activities.map((activity:any) => (
              <li key={activity.id}>{activity.title}</li>
          ))}
        </List>
      </Header>
    </div>
  );
}
export default App;
