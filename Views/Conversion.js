import { StatusBar } from "expo-status-bar";
import {
  Alert,
  BackHandler,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Checkbox from "expo-checkbox";

export default function Conversion({ navigation }) {
  const [grados, setGrados] = useState("");
  const [resultado, setResultado] = useState("");
  const [conversion, setConversion] = useState(null);

  const fnCalcular = () => {
    if (grados === "") {
      Alert.alert(
        "Advertencia",
        "No se han ingresado los grados para la conversion"
      );
    } else {
      if (conversion === "CaF") {
        setResultado((parseFloat(grados) * 9) / 5 + 32 + " °F");
      } else if (conversion === "FaC") {
        setResultado((((parseFloat(grados) - 32) * 5) / 9).toFixed(2) + " °C");
      } else {
        Alert.alert("Advertencia", "Seleccione Una Opción");
      }
    }
  };

  const fnLimpiar = () => {
    setGrados("");
    setResultado("");
    setConversion(null);
  };

  const fnCerrar = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <Text style={{ fontSize: 20 }}>Grados:</Text>
        <TextInput
          placeholder="Captura la cantidad de grados"
          style={styles.input}
          onChangeText={(text) => setGrados(text)}
          value={grados}
          keyboardType="numeric"
        ></TextInput>
      </View>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={conversion === "CaF"}
          onValueChange={() => setConversion("CaF")}
          color={conversion === "CaF" ? "purple" : undefined}
        />
        <Text style={styles.paragraph}>Celsius a Fahrenheit</Text>
      </View>

      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={conversion === "FaC"}
          onValueChange={() => setConversion("FaC")}
          color={conversion === "FaC" ? "purple" : undefined}
        />
        <Text style={styles.paragraph}>Fahrenheit a Celsius</Text>
      </View>
      <Text style={styles.paragraphResultado}>{resultado || "Resultado"}</Text>

      <TouchableOpacity onPress={fnCalcular} style={styles.button}>
        <Text style={styles.buttonText}>Convertir</Text>
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

const styles = StyleSheet.create({
  section: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  paragraph: {
    fontSize: 20,
  },
  paragraphResultado: {
    marginTop: 20,
    fontSize: 25,
    color: "red",
  },
  checkbox: {
    marginRight: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fffff",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 28,
    color: "red",
    width: 300,
    textAlign: "center",
  },
  input: {
    borderColor: "black",
    borderBottomWidth: 1,
    flex: 1,
    height: 35,
    paddingBottom: 1,
    fontSize: 20,
    textAlign: "center",
    color: "black",
    outlineStyle: "none",
  },
  button: {
    width: 200,
    marginTop: 20,
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
