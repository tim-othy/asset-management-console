import React from "react";
import {AuthenticatedTemplate, UnauthenticatedTemplate} from "@azure/msal-react";
import LoginForm from "./components/LoginForm";
import { Provider } from 'react-redux';

import 'semantic-ui-css/semantic.min.css'
import './style.css'
import {AssetDashboard} from "./components/AssetDashboard";

import store from './store';

function App() {
    return (
        <Provider store={store}>
            <AuthenticatedTemplate>
                <AssetDashboard />
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <div
                    style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL + '/bg.jpg'})`,
                        height: '101.9vh',
                        backgroundSize: 'cover',
                    }}
                >
                    <LoginForm/>
                </div>
            </UnauthenticatedTemplate>
        </Provider>
    );
}

export default App;