import React from "react";
import { useMsal } from "@azure/msal-react";
import { Button } from "semantic-ui-react";

function handleLogout(instance) {
    instance.logoutRedirect().catch(e => {
        console.error(e);
    });
}

export const SignOutButton = () => {
    const { instance } = useMsal();

    return (
        <Button floated='right' onClick={() => handleLogout(instance)}>Sign out</Button>
    );
}