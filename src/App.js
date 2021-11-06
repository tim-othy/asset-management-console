import React from "react";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { PageLayout } from "./components/PageLayout";

function App() {
    return (
        <PageLayout>
            <AuthenticatedTemplate>
                <p>You are signed in!</p>
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <p>You are not signed in! Please sign in.</p>
            </UnauthenticatedTemplate>
        </PageLayout>
    );
}

export default App;