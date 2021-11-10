import React from "react";
import { Grid } from 'semantic-ui-react'

import AssetSelector from "../containers/AssetSelector"
import AssetView from '../containers/AssetView'
import {SignOutButton} from "./SignOutButton";

export const AssetDashboard = () => (
    <>
    <Grid centered>
        <Grid.Row columns={2}>
            <Grid.Column>
                <AssetSelector />
            </Grid.Column>
            <Grid.Column floated='left'>
                <SignOutButton />
            </Grid.Column>
        </Grid.Row>
    </Grid>
    <AssetView />
    </>
)
