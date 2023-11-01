import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaInicial from "../screens/TelaInicial";
import Login from "../screens/Login";
import Produto from "../screens/Produto";
import CarrinhoCompras from "../screens/CarrinhoCompras";
import BottomTabRoutes from "./BottomTabRoutes";

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
    return (
        <Stack.Navigator
            initialRouteName="Tela Inicial"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Tela Inicial" component={TelaInicial} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Bottom Tab Routes" component={BottomTabRoutes} />
            <Stack.Screen name="Produto" component={Produto} />
            <Stack.Screen name="CarrinhoCompras" component={CarrinhoCompras} />
        </Stack.Navigator>
    )
}

export default StackRoutes;