import React from "react";
import { useMsal } from "@azure/msal-react";
import { Button } from "semantic-ui-react";

function handleLogout(instance) {
    instance.logoutRedirect().catch(e => {
        console.error(e);
    });
}

/**
 * Renders a button which, when selected, will redirect the page to the logout prompt
 */
export const SignOutButton = () => {
    const { instance } = useMsal();

    return (
        <Button onClick={() => handleLogout(instance)}>Sign out using Redirect</Button>
    );
}