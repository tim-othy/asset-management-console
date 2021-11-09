import React from "react";
import {AuthenticatedTemplate, UnauthenticatedTemplate} from "@azure/msal-react";
import LoginForm from "./components/LoginForm";

import 'semantic-ui-css/semantic.min.css'
import {SignOutButton} from "./components/SignOutButton";

function App() {
    return (
        <>
            <AuthenticatedTemplate>
                <SignOutButton />
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <LoginForm />
            </UnauthenticatedTemplate>
        </>
    );
}

export default App;