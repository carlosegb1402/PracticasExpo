import { useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
  ToastAndroid,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CATEGORIES = [
  {
    label: "Seleccionar Categoria",
    label2: "Desplegar Lista",
    value: "",
    image: require("../assets/spinner/categorias.png"),
  },
  {
    label: "Agradecimiento",
    label2: "Prueba Dar Las Gracias",
    value: "agradecimiento",
    image: require("../assets/spinner/agradecimiento.png"),
  },
  {
    label: "Amor",
    label2: "Enamora Con Estas Frases",
    value: "amor",
    image: require("../assets/spinner/amor.png"),
  },
  {
    label: "Año Nuevo",
    label2: "Felicita El Año Nuevo",
    value: "añoNuevo",
    image: require("../assets/spinner/newyear.png"),
  },
  {
    label: "Canciones",
    label2: "Escucha Solo Lo Mejor",
    value: "canciones",
    image: require("../assets/spinner/canciones.png"),
  },
];

export default function Spinner({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);
  const [modalVisible, setModalVisible] = useState(false);

  const salir = () => {
    navigation.goBack();
  };

  function mostrarToast(label) {
    ToastAndroid.show("Se ha seleccionado " + label, ToastAndroid.SHORT);
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        setSelectedCategory(item);
        setModalVisible(false);
        mostrarToast(item.label);
      }}
    >
      <Image source={item.image} style={styles.image} />
      <View style={{ flex: 1 }}>
        <Text style={styles.label}>{item.label}</Text>
        <Text style={styles.label2}>{item.label2}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Seleccione una categoría:</Text>

      <TouchableOpacity
        style={styles.selector}
        onPress={() => setModalVisible(true)}
      >
        <Image source={selectedCategory.image} style={styles.image} />
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>{selectedCategory.label}</Text>
          <Text style={styles.label2}>{selectedCategory.label2}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          salir();
        }}
        style={styles.closeButton}
      >
        <Text style={styles.closeText}>Cerrar</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Seleccione una categoría</Text>
          <FlatList
            data={CATEGORIES.slice(1)}
            keyExtractor={(item) => item.value}
            renderItem={renderItem}
          />
          <TouchableOpacity
            onPress={() => {
              setSelectedCategory(CATEGORIES[0]);
              setModalVisible(false);
            }}
            style={styles.closeButton}
          >
            <Text style={styles.closeText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, marginBottom: 20, textAlign: "center" },
  selector: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#eee",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  image: { width: 40, height: 40, marginRight: 10 },
  label: { fontSize: 18 },
  label2: { fontSize: 16, color: "gray" },
  modalContainer: { flex: 1, paddingTop: 50 },
  closeButton: {
    marginTop: 20,
    backgroundColor: "#222",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  closeText: { color: "#fff", textAlign: "center" },
});
