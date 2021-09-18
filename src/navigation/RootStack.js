import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import APP_ROUTES from "./routes";

import Splash from "../screens/Splash/Splash";
import AuthStack from "./AuthStack";

const Stack = createStackNavigator();

export default () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={APP_ROUTES.SPLASH}
                component={Splash}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={APP_ROUTES.AUTH}
                component={AuthStack}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};
