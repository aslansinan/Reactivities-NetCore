import './App.css';
import axios  from 'axios'
import {
  useState,useEffect
} from 'react'
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
      <header className="App-header">
        <ul>
          {activities.map((activity:any) => (
              <li key={activity.id}>{activity.title}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
