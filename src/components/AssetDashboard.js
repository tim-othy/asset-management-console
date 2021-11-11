import React from "react";
import { Grid } from 'semantic-ui-react'

import AssetSelector from "../containers/AssetSelector"
import AssetView from '../containers/AssetView'
import {SignOutButton} from "./SignOutButton";

export const AssetDashboard = () => (
    <>
    <Grid centered padded>
        <Grid.Row columns={3} padded='horizontally'>
            <Grid.Column>
                <AssetSelector />
            </Grid.Column>
            <Grid.Column></Grid.Column>
            <Grid.Column>
                <SignOutButton />
            </Grid.Column>
        </Grid.Row>
    </Grid>
    <AssetView />
    </>
)
