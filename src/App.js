import React from "react";
import {AuthenticatedTemplate, UnauthenticatedTemplate} from "@azure/msal-react";
import LoginForm from "./components/LoginForm";

import 'semantic-ui-css/semantic.min.css'
import {SignOutButton} from "./components/SignOutButton";
import {AssetDashboard} from "./components/AssetDashboard";

function App() {
    return (
        <>
            <AuthenticatedTemplate>
                <AssetDashboard />
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <LoginForm />
            </UnauthenticatedTemplate>
        </>
    );
}

export default App;