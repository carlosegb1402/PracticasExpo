import { StatusBar } from "expo-status-bar";
import {
  Alert,
  BackHandler,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "../Styles/Styles";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Saludar({ navigation }) {
  const tituloText = "Mi Primera Aplicacion";
  const [nombre, setNombre] = useState("");
  const [titulo, setTitulo] = useState(tituloText);

  const fnSaludar = () => {
    console.log("Saludar");
    if (nombre === "") {
      Alert.alert("Campos Vacios", "Ingresa Un Nombre");
    } else {
      setTitulo("Hola " + nombre);
    }
  };

  const fnLimpiar = () => {
    setNombre("");
    setTitulo(tituloText);
  };

  const fnCerrar = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{titulo}</Text>
      <TextInput
        placeholder="Escribe Tu Nombre"
        style={styles.input}
        onChangeText={(text) => setNombre(text)}
        value={nombre}
      ></TextInput>
      <TouchableOpacity onPress={fnSaludar} style={styles.button}>
        <Text style={styles.buttonText}>Saludar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={fnLimpiar} style={styles.button}>
        <Text style={styles.buttonText}>Limpiar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={fnCerrar} style={styles.button}>
        <Text style={styles.buttonText}>Salir</Text>
      </TouchableOpacity>

      <StatusBar style="dark" />
    </SafeAreaView>
  );
}
