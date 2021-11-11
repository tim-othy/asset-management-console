import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import {Button, Icon} from "semantic-ui-react";

const handleLogin = (instance) => {
    instance.loginRedirect(loginRequest)
        .catch(e => {
            console.error(e);
        });
}

/**
 * Renders a button which, when selected, will redirect the page to the login prompt
 */
export const SignInButton = () => {
    const { instance } = useMsal();

    return (
        <Button size='huge' animated onClick={() => handleLogin(instance)}>
            <Button.Content visible>Sign in with Microsoft</Button.Content>
            <Button.Content hidden>
                <Icon name='microsoft' />
            </Button.Content>
        </Button>
    );
}