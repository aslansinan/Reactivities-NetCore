import {Card, Descriptions, Button, Divider} from 'antd';
import React from 'react';
import {Container, Item, Label, Segment} from 'semantic-ui-react';
import {Activity} from '../../../app/models/activity';

interface Props {
    activities: Activity[];
}

export default function ActivityList({activities}: Props) {
    return (
        <Container>
            {activities.map(activity => (
                <Card key={activity.id} title={activity.title} className='activity-head' bordered={false}
                      style={{width: 600}}>
                    <Item.Content>
                        <Item.Meta>
                            {activity.date}
                        </Item.Meta>
                        <Item.Description>
                            <div>{activity.description}</div>
                            <div>{activity.city}, {activity.venue}</div>
                        </Item.Description>
                        <Item.Extra>
                            <Button style={{float: 'right'}} type="primary">
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

