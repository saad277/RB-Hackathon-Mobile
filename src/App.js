import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { Colors } from "./styles";

import { RootStack } from "./navigation";

const App = () => {
    return (
        <>
            <StatusBar backgroundColor={Colors.primary} />
            <NavigationContainer>
                <RootStack />
            </NavigationContainer>
        </>
    );
};

export default App;
