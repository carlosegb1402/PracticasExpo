import Checkbox from "expo-checkbox";
import { useEffect, useState } from "react";
import {
  Alert,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Formulario({ route, navigation }) {
  //Recibir Parametros De La Vista De Inicio
  const { cliente } = route.params;
  //Variables
  const [descripcionAuto, setDescripcionAuto] = useState("");
  const [porPagoInicial, setPorPagoInicial] = useState("");
  const [valorAuto, setValorAuto] = useState("");
  const [meses, setMeses] = useState("");
  const [folio, setFolio] = useState("");
  const [pagoInicial, setPagoInicial] = useState("");
  const [pagoTotal, setPagoTotal] = useState("");
  const [pagoMensual, setPagoMensual] = useState("");

  //Ejecucion automatica de codigo al iniciar la vista
  useEffect(() => {
    setFolio(generarFolio());
  }, []);

  //Funcion para calcular pago inicial
  function calcularPagoInicial() {
    let pagoInicial = 0.0;
    pagoInicial = parseFloat(valorAuto) * (parseFloat(porPagoInicial) / 100);
    return pagoInicial;
  }

  //Funcion para calcular pago total final
  function calcularTotalFin() {
    return parseFloat(valorAuto) - calcularPagoInicial();
  }
  //Funcion para calcular pago mensual
  function calcularPagoMensual() {
    return calcularTotalFin() / parseInt(meses);
  }

  //Funcion para generar folio
  function generarFolio() {
    return Math.floor(Math.random() * 333) + 1;
  }

  //Funcion Calcular BTN
  const calcular = () => {
    if (!descripcionAuto || !porPagoInicial || !valorAuto || !meses || !folio) {
      Alert.alert("Advertencia", "Faltan Datos Por Ingresar");
    } else {
      setPagoInicial(
        "Pago Inicial: " + calcularPagoInicial().toFixed(2) + " $"
      );
      setPagoMensual(
        "Pago Mensual: " + calcularPagoMensual().toFixed(2) + " $"
      );
      setPagoTotal(
        "Total A Financiar: " + calcularTotalFin().toFixed(2) + " $"
      );
    }
  };

  //Funcio Limpiar
  const limpiar = () => {
    setDescripcionAuto("");
    setMeses("");
    setPorPagoInicial("");
    setValorAuto("");
    setPagoInicial("");
    setPagoMensual("");
    setPagoTotal("");
  };

  const salir = () => {
    navigation.goBack();
  };

  //Elementos de la vista
  return (
    <SafeAreaView style={styles.container}>
      {/* Nombre Cliente Text */}
      <Text style={{ color: "red", fontSize: 25, marginTop: 20 }}>
        {cliente || "Nombre Del Cliente"}
      </Text>
      {/* Numero Folio Text */}
      <Text
        style={{
          color: "black",
          fontSize: 20,
          textAlign: "left",
          width: "100%",
        }}
      >
        Num. Folio: {folio}
      </Text>
      {/* Descripcion Automovil Input Text */}
      <TextInput
        placeholder="Descripcion del automovil"
        style={styles.input}
        onChangeText={(text) => setDescripcionAuto(text)}
        value={descripcionAuto}
      ></TextInput>
      {/* Porcentaje Pago Inicial Input Text */}
      <TextInput
        placeholder="Porcentaje De Pago Inicial"
        style={styles.input}
        onChangeText={(text) => {
          if (parseFloat(text) > 100) {
            Alert.alert(
              "Advertencia",
              "El porcentaje no puede ser mayor a 100%"
            );
            setPorPagoInicial("");
            return;
          }
          setPorPagoInicial(text);
        }}
        value={porPagoInicial}
        keyboardType="decimal-pad"
      ></TextInput>
      {/* Valor Auto Input Text */}
      <TextInput
        placeholder="Valor Del Auto"
        style={styles.input}
        onChangeText={(text) => setValorAuto(text)}
        value={valorAuto}
        keyboardType="decimal-pad"
      ></TextInput>
      {/* Plazos Text */}
      <Text style={{ color: "red", fontSize: 25, marginTop: 20 }}>Plazos</Text>
      {/* Plazo 12 Meses CheckBox */}
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={meses === "12"}
          onValueChange={() => setMeses(meses === "12" ? "" : "12")}
          color={meses === "12" ? "purple" : undefined}
        />
        <Text style={styles.paragraph}>12 Meses</Text>
      </View>
      {/* Plazo 24 Meses CheckBox */}
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={meses === "24"}
          onValueChange={() => setMeses(meses === "24" ? "" : "24")}
          color={meses === "24" ? "purple" : undefined}
        />
        <Text style={styles.paragraph}>24 Meses</Text>
      </View>
      {/* Plazo 36 Meses CheckBox */}
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={meses === "36"}
          onValueChange={() => setMeses(meses === "36" ? "" : "36")}
          color={meses === "36" ? "purple" : undefined}
        />
        <Text style={styles.paragraph}>36 Meses</Text>
      </View>
      {/* Plazo 48 Meses CheckBox */}
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={meses === "48"}
          onValueChange={() => setMeses(meses === "48" ? "" : "48")}
          color={meses === "48" ? "purple" : undefined}
        />
        <Text style={styles.paragraph}>48 Meses</Text>
      </View>
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
      {/* Resultado Text */}
      <Text style={{ color: "red", fontSize: 25, marginTop: 20 }}>
        Resultado
      </Text>
      <Text
        style={{
          color: "black",
          fontSize: 20,
          textAlign: "left",
          width: "100%",
        }}
      >
        {pagoInicial || "Pago Inicial:"}
      </Text>
      <Text
        style={{
          color: "black",
          fontSize: 20,
          textAlign: "left",
          width: "100%",
        }}
      >
        {pagoTotal || "Total A Financiar:"}
      </Text>
      <Text
        style={{
          color: "black",
          fontSize: 20,
          textAlign: "left",
          width: "100%",
        }}
      >
        {pagoMensual || "Pago Mensual:"}
      </Text>
    </SafeAreaView>
  );
}

//Estilos De Elementos
const styles = StyleSheet.create({
  section: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  paragraph: {
    fontSize: 20,
  },
  checkbox: {
    marginRight: 10,
    fontSize: 30,
    tintColor: "red",
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
  },
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
});
