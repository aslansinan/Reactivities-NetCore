﻿import React from 'react';
import { Grid, List } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import ActivityList from './ActivityList';

interface Props{
    activities : Activity[];
}
export default function ActivtiyDashboard({activities}:Props){
    return(
        <Grid>
            <Grid.Column>
                <ActivityList activities={activities} />
            </Grid.Column>
        </Grid>
    )
}