import {Card, Button, Divider} from 'antd';
import React from 'react';
import {Container, Item} from 'semantic-ui-react';
import {Activity} from '../../../app/models/activity';

interface Props {
    activities: Activity[];
    selectActivity: (id: string) => void;
}

export default function ActivityList({activities,selectActivity}: Props) {
    return (
        <Container>
            {activities.map(activity => (
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
                            <Button onClick={()=>selectActivity(activity.id)} style={{float: 'right'}} type="primary">
                                View
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
}

