import React from 'react';
import { Grid, List } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';

interface Props{
    activities : Activity[];
}
export default function ActivtiyDashboard({activities}:Props){
    return(
        <Grid>
            <Grid.Column>
                <List>
                    {activities.map((activity) => (
                        <li key={activity.id}>{activity.title}</li>
                    ))}
                </List>
            </Grid.Column>
        </Grid>
    )
}