import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Menu from "./Views/Menu";
import Saludar from "./Views/Saludar";
import IMC from "./Views/IMC";
import Conversion from "./Views/Conversion";
import CotizacionInicio from "./Views/Cotizacion/Inicio";
import CotizacionForm from "./Views/Cotizacion/Formulario";
import Moneda from "./Views/Moneda";
import Spinner from "./Views/Spinner";

const stack = createStackNavigator();

function MyStack() {
  return (
    <stack.Navigator
      initialRouteName="Menu"
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: "royalblue" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <stack.Screen
        name="Menu"
        options={{ title: "Menu Principal" }}
        component={Menu}
      ></stack.Screen>
      <stack.Screen
        name="Saludar"
        options={{ title: "Practica Saludar" }}
        component={Saludar}
      ></stack.Screen>
      <stack.Screen
        name="IMC"
        options={{ title: "Practica IMC" }}
        component={IMC}
      ></stack.Screen>
      <stack.Screen
        name="Conversion"
        options={{ title: "Practica Conversion" }}
        component={Conversion}
      ></stack.Screen>
      {/* Actividad Cotizacion */}
      <stack.Screen
        name="Cotizacion"
        options={{ title: "Practica Cotizacion" }}
        component={CotizacionInicio}
      ></stack.Screen>
      <stack.Screen
        name="CotizacionFormulario"
        options={{ title: "Practica Cotizacion" }}
        component={CotizacionForm}
      ></stack.Screen>
      <stack.Screen
        name="Moneda"
        options={{ title: "Practica Moneda" }}
        component={Moneda}
      ></stack.Screen>
      <stack.Screen
        name="Spinner"
        options={{ title: "Practica Spinner" }}
        component={Spinner}
      ></stack.Screen>
    </stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <MyStack />
    </NavigationContainer>
  );
}
