import React from "react";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { PageLayout } from "./components/PageLayout";
import LoginForm from "./components/LoginForm";

import 'semantic-ui-css/semantic.min.css'

function App() {
    return (
        <PageLayout>
            <AuthenticatedTemplate>
                <p>You are logged in</p>
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <LoginForm />
            </UnauthenticatedTemplate>
        </PageLayout>
    );
}

export default App;