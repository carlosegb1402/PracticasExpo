import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Hola({ navigation }) {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [resultado, setResultado] = useState("");

  const fnCalcular = () => {
    if (altura && peso) {
      //convertir strings a numeros flotantes
      const alturaNum = parseFloat(altura);
      const pesoNum = parseFloat(peso);

      //validacion si ingresan texto
      if (isNaN(alturaNum) || isNaN(pesoNum) || alturaNum === 0) {
        Alert.alert("Datos inválidos", "Ingrese valores numéricos correctos");
        return;
      }

      const imc = pesoNum / (alturaNum * alturaNum);
      setResultado(imc.toFixed(1));
    } else {
      Alert.alert("Campos Vacíos", "Ingrese Todos Los Datos");
    }
  };

  const fnLimpiar = () => {
    setPeso("");
    setAltura("");
    setResultado("");
  };

  const fnCerrar = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Escribe Tu Altura"
        style={styles.input}
        onChangeText={(text) => setAltura(text)}
        value={altura}
        keyboardType="decimal-pad"
      ></TextInput>
      <TextInput
        placeholder="Escribe Tu Peso"
        style={styles.input}
        onChangeText={(text) => setPeso(text)}
        value={peso}
        keyboardType="decimal-pad"
      ></TextInput>
      <Text style={styles.resultadoTXT}>
        {resultado || "Su Resultado Aparecerá Aquí"}
      </Text>
      <View style={styles.buttonCotenedor}>
        <TouchableOpacity onPress={fnCalcular} style={styles.button}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={fnLimpiar} style={styles.button}>
          <Text style={styles.buttonText}>Limpiar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={fnCerrar} style={styles.button}>
          <Text style={styles.buttonText}>Salir</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 5,
  },
  resultadoTXT: {
    marginTop: 20,
    fontSize: 18,
    color: "red",
    width: "100%",
    textAlign: "center",
  },
  input: {
    borderColor: "black",
    borderBottomWidth: 1,
    height: 40,
    width: "100%",
    textAlign: "left",
    marginTop: 20,
    color: "black",
  },
  buttonCotenedor: {
    marginTop: 20,
    alignSelf: "center",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  button: {
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
    height: 35,
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 18,
  },
});
