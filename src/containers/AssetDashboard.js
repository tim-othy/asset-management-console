import React from "react";

import AssetSelector from "./AssetSelector"
// import {AssetView} from "./AssetView"
import AssetView from './AssetView'
import {SignOutButton} from "../components/SignOutButton";

export const AssetDashboard = () => (
    <>
        <SignOutButton />
        <AssetSelector />
        <AssetView />
    </>
)
