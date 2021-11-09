import React from 'react'
import { Icon, Grid, Header, Segment } from 'semantic-ui-react'
import {SignInButton} from "./SignInButton";

const LoginForm = () => (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450, maxHeight: 600 }}>
            <Header
                as='h1'
                textAlign='center'
            >
                <Icon name='money bill alternate outline' color='grey' />
            </Header>
            <Header
                as='h1'
                color='teal'
                textAlign='center'
                content='Asset management console'
            />
            <Segment padded='very'>
                <SignInButton />
            </Segment>
        </Grid.Column>
    </Grid>
)

export default LoginForm