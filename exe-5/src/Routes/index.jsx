import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../Pages/Home";
import Detail from "../Pages/Detail"

const Stack = createNativeStackNavigator()

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Home"
                component={Home}
            />
            <Stack.Screen 
                name="Detail"
                component={Detail}
            />         
        </Stack.Navigator>
    )
}