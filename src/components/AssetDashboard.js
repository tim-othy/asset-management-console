import React from "react";

import {AssetSelector} from "./AssetSelector"
import {AssetView} from "./AssetView"
import {SignOutButton} from "./SignOutButton";

export const AssetDashboard = () => (
    <>
        <SignOutButton />
        <AssetSelector />
        <AssetView />
    </>
)
