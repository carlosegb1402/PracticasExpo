//Instalar libreria npx expo install @react-native-picker/picker
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import {
  Alert,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Moneda({ navigation }) {
  //Recibir Parametros De La Vista De Inicio
  //Variables
  const [cantidad, setCantidad] = useState("");
  const [monedaSeleccionada, setMonedaSeleccionada] = useState();
  const [resultado, setResultado] = useState("");

  //Funcion Calcular BTN
  const calcular = () => {
    const usd = 17.2;
    const cad = 12.8;
    const eur = 18.5;

    const tasas = {
      "MXN-USD": 1 / usd,
      "MXN-CAD": 1 / cad,
      "MXN-EUR": 1 / eur,
      "USD-MXN": usd,
      "CAD-MXN": cad,
      "EUR-MXN": eur,
    };

    let resultado = 0.0;

    if (!cantidad) {
      Alert.alert("Advertencia", "Ingrese La Cantidad A Convertir");
    } else if (!monedaSeleccionada) {
      Alert.alert("Advertencia", "Seleccione Una Opcion");
    } else if (tasas[monedaSeleccionada]) {
      resultado = parseFloat(cantidad) * tasas[monedaSeleccionada];
      setResultado(resultado.toFixed(2));
    }
  };

  //Funcio Limpiar
  const limpiar = () => {
    setCantidad("");
    setMonedaSeleccionada(null);
    setResultado("");
  };

  const salir = () => {
    navigation.goBack();
  };

  //Elementos de la vista
  return (
    <SafeAreaView style={styles.container}>
      {/* Descripcion Automovil Input Text */}
      <TextInput
        placeholder="Capture la cantidad"
        style={styles.input}
        onChangeText={(text) => setCantidad(text)}
        value={cantidad}
        keyboardType="decimal-pad"
      ></TextInput>
      <Picker
        style={{
          height: 50,
          width: "100%",
          outlineWidth: 1,
        }}
        selectedValue={monedaSeleccionada}
        mode="dropdown"
        onValueChange={(itemValue, itemIndex) =>
          setMonedaSeleccionada(itemValue)
        }
      >
        <Picker.Item label="Seleccionar Moneda" value={""} />

        <Picker.Item
          label="Pesos Mexicanos - Dolares Americanos"
          value="MXN-USD"
        />
        <Picker.Item
          label="Pesos Mexicanos - Dolares Canadiense"
          value="MXN-CAD"
        />
        <Picker.Item label="Pesos Mexicanos - Euro" value="MXN-EUR" />
        <Picker.Item
          label="Dolares Americanos - Pesos Mexicanos"
          value="USD-MXN"
        />
        <Picker.Item
          label="Dolares Canadiense - Pesos Mexicanos"
          value="CAD-MXN"
        />
        <Picker.Item label="Euro - Pesos Mexicanos" value="EUR-MXN" />
      </Picker>
      {/* Contenedor Botones */}
      <View style={styles.buttonCotenedor}>
        {/* Calcular Boton */}
        <TouchableOpacity onPress={calcular} style={styles.button}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
        {/* Limpiar Boton */}
        <TouchableOpacity onPress={limpiar} style={styles.button}>
          <Text style={styles.buttonText}>Limpiar</Text>
        </TouchableOpacity>
        {/* Salir Boton */}
        <TouchableOpacity onPress={salir} style={styles.button}>
          <Text style={styles.buttonText}>Salir</Text>
        </TouchableOpacity>
      </View>
      {/* Texto Resultado */}
      <Text style={styles.resultadoTXT}>
        {resultado || "Su Resultado Aparecerá Aquí"}
      </Text>
    </SafeAreaView>
  );
}

//Estilos De Elementos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  input: {
    borderColor: "black",
    borderBottomWidth: 1,
    width: "100%",
    height: 45,
    paddingBottom: 0,
    fontSize: 20,
    textAlign: "Left",
    color: "black",
    outlineStyle: "none",
    marginBottom: 20,
    marginTop: 20,
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
    backgroundColor: "mediumpurple",
    height: 35,
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
  },
  resultadoTXT: {
    marginTop: 20,
    fontSize: 18,
    color: "red",
    width: "100%",
    textAlign: "center",
  },
});
