import React from "react";
import {AuthenticatedTemplate, UnauthenticatedTemplate} from "@azure/msal-react";
import LoginForm from "./components/LoginForm";
import { Provider } from 'react-redux';

import 'semantic-ui-css/semantic.min.css'
import {SignOutButton} from "./components/SignOutButton";
import {AssetDashboard} from "./components/AssetDashboard";

import store from './store';

function App() {
    return (
        <Provider store={store}>
            <AuthenticatedTemplate>
                <AssetDashboard />
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <LoginForm />
            </UnauthenticatedTemplate>
        </Provider>
    );
}

export default App;