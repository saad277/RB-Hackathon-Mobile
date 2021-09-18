import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import APP_ROUTES from "./routes";

import Appointments from "../screens/Appointments/Appointments";
import Profile from "../screens/Profile/Profile";

const Stack = createStackNavigator();

const routes = [
    {
        name: APP_ROUTES.APPOINTMENTS,
        screen: Appointments,
    },
    {
        name: APP_ROUTES.PROFILE,
        screen: Profile,
    },
];

export default () => {
    return (
        <Stack.Navigator>
            {routes.map((route, index) => {
                const { name, screen } = route;
                return (
                    <Stack.Screen
                        name={name}
                        component={screen}
                        options={{ headerShown: false }}
                        key={index}
                    />
                );
            })}
        </Stack.Navigator>
    );
};
