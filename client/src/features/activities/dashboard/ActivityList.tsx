import {Card, Button, Divider} from 'antd';
import { observer } from 'mobx-react-lite';
import React,{useState,SyntheticEvent} from 'react';
import {Container, Item} from 'semantic-ui-react';
import {Activity} from '../../../app/models/activity';
import { useStore } from '../../../app/stores/store';


export default observer(function ActivityList() {
    const {activityStore} = useStore();
    const {deleteActivity,activitiesByDate,loading} = activityStore
    const [target,setTarget] =useState('');
    function handleActivityDelete(e:any, id:string) {
        setTarget(e.currentTarget.name)
        deleteActivity(id);
    }
    
    return (
        <Container>
            {activitiesByDate.map(activity => (
                <Card key={activity.id} title={activity.title} className='activity-head' bordered={false}
                      style={{width: 800}}>
                    <Item.Content>
                        <Item.Meta>
                            {activity.date}
                        </Item.Meta>
                        <Item.Description>
                            <div>{activity.description}</div>
                            <div>{activity.city}, {activity.venue}</div>
                        </Item.Description>
                        <Item.Extra>
                            <Button onClick={()=>activityStore.selectActivity(activity.id)} style={{float: 'right'}} type="primary">
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
                            <Button type="dashed">
                                {activity.category}
                            </Button>
                        </Item.Extra>
    
                    </Item.Content>
                </Card>
            ))}
            <Divider/>
        </Container>
    )
})

