import { NavigationContainer } from "@react-navigation/native";
import StackRoutes from "./src/routes/StackRoutes";
import { GlobalProvider } from "./src/contexts/GlobalContext";

export default function App() {
  return (
    <GlobalProvider>
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </GlobalProvider>
  );
}
