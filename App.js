import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Paginas
import Home from './src/Pages/Home';
import Formacao from './src/Pages/Formacao';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Formacao" component={Formacao}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}



