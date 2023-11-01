import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Loja from "../screens/Loja";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";
import Ionicon from "react-native-vector-icons/Ionicons";

const BottomTab = createBottomTabNavigator();

const BottomTabRoutes = () => {
    return (
        <BottomTab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({color, size}) => {
                    if (route.name === "Loja") {
                        return (
                            <SimpleLineIcon name={"handbag"} size={size} color={color} />
                        )
                    } else if (route.name === "Notificações") {
                        return (
                            <Ionicon name={"notifications-outline"} size={size} color={color} />
                        )
                    } else if (route.name === "Perfil") {
                        return (
                            <SimpleLineIcon name={"user"} size={size} color={color} />
                        )
                    } else {
                        return (
                            <Ionicon name={"home"} size={size} color={color} />
                        )
                    }
                },
                tabBarInactiveTintColor: "#000",
                tabBarActiveTintColor: "#FF7A00"
            })}
        >
            <BottomTab.Screen name="Home" component={Home} />
            <BottomTab.Screen name="Loja" component={Loja} />
            <BottomTab.Screen name="Notificações" component={Home} />
            <BottomTab.Screen name="Perfil" component={Home} />
        </BottomTab.Navigator>
    )
}

export default BottomTabRoutes;