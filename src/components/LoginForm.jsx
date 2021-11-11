import React from 'react'
import { Icon, Grid, Header, Segment } from 'semantic-ui-react'
import {SignInButton} from "./SignInButton";

const LoginForm = () => (
    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 500 }}>
            <Segment padded='very'>
                <Header
                    as='h1'
                    textAlign='center'
                >
                    <Icon name='money bill alternate outline' color='grey' />
                </Header>
                <Header
                    as='h1'
                    style={{color: 'steelblue', backdropFilter: 'blur(8px)'}}
                    textAlign='center'
                    content='Asset management console'
                />
                <SignInButton />
            </Segment>
        </Grid.Column>
    </Grid>
)

export default LoginForm