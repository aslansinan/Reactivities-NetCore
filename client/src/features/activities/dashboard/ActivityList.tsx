import {observer} from 'mobx-react-lite';
import React, {useState, SyntheticEvent} from 'react';
import {Link} from 'react-router-dom';
import {Button, Card, Container, Divider, Item, Segment} from 'semantic-ui-react';
import {Activity} from '../../../app/models/activity';
import {useStore} from '../../../app/stores/store';


export default observer(function ActivityList() {
  const {activityStore} = useStore();
  const {deleteActivity, activitiesByDate, loading} = activityStore
  const [target, setTarget] = useState('');

  function handleActivityDelete(e: any, id: string) {
    setTarget(e.currentTarget.name)
    deleteActivity(id);
  }

  return (
    <Segment>
      <Item.Group divided>
        {activitiesByDate.map(activity => (
          <Item key={activity.id} className='activity-head'>
            <Item.Content>
              <Item.Header as='a'>{activity.title}</Item.Header>
              <Item.Meta>
                {activity.date}
              </Item.Meta>
              <Item.Description>
                <div>{activity.description}</div>
                <div>{activity.city}, {activity.venue}</div>
              </Item.Description>
              <Item.Extra>
                <Button as={Link} to={`/activities/${activity.id}`} style={{float: 'right'}}>
                  View
                </Button>
                <Button
                  name={activity.id}
                  loading={loading && target === activity.id}
                  onClick={(e) => handleActivityDelete(e, activity.id)}
                  style={{float: 'right'}}
                  danger>
                  Delete
                </Button>
                <Button>
                  {activity.category}
                </Button>
              </Item.Extra>

            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  )
})

