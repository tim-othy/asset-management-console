import React from 'react'
import { Button, Form, Grid, Header, Icon, Segment } from 'semantic-ui-react'

const LoginForm = () => (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
                Asset management console
            </Header>
            <Form size='large'>
                <Segment stacked>
                    <Button animated>
                        <Button.Content visible>Sign in with Microsoft</Button.Content>
                        {/*<Button.Content hidden>Here</Button.Content>*/}
                        <Button.Content hidden>
                            <Icon name='microsoft' />
                        </Button.Content>
                    </Button>
                </Segment>
            </Form>
        </Grid.Column>
    </Grid>
)

export default LoginForm