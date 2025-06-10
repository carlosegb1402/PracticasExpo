import { useState } from "react";
import {
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Inicio({ navigation }) {
  const [cliente, setCliente] = useState("");

  const fnAcceder = () => {
    if (!cliente) {
      Alert.alert("Advertencia", "Ingrese el nombre del cliente");
    } else {
      navigation.navigate("CotizacionFormulario", { cliente: cliente });
    }
  };
  const fnCerrar = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 20, color: "red" }}>Toyota</Text>
      <Text style={{ fontSize: 20, color: "black" }}>Av. Del Mar 1200</Text>
      <Text style={{ fontSize: 18, color: "black" }}>Mazatlan, Sinaloa</Text>
      <Image
        source={require("../../assets/toyota_icon.png")}
        style={{ width: 120, height: 120, resizeMode: "contain" }}
      ></Image>
      <Text style={{ fontSize: 18, color: "black", marginTop: 20 }}>
        Nombre Del Cliente
      </Text>
      <TextInput
        placeholder="Escribe el nombre del cliente"
        style={styles.input}
        onChangeText={(text) => setCliente(text)}
        value={cliente}
      ></TextInput>
      <TouchableOpacity onPress={fnAcceder} style={styles.button}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={fnCerrar} style={styles.button}>
        <Text style={styles.buttonText}>Regresar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 15,
  },
  input: {
    borderColor: "black",
    borderBottomWidth: 1,
    width: "100%",
    height: 35,
    paddingBottom: 1,
    fontSize: 18,
    textAlign: "center",
    color: "black",
    outlineStyle: "none",
  },
  button: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "mediumpurple",
    height: 35,
    borderRadius: 12,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
  },
});
