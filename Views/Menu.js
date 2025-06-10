import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const data = [
  { id: "1", text: "Saludar", image: require("../assets/hola_icon.png") },
  { id: "2", text: "IMC", image: require("../assets/imc_icon.png") },
  { id: "3", text: "Conversion", image: require("../assets/temp_icon.png") },
  { id: "4", text: "Moneda", image: require("../assets/money_icon.png") },
  { id: "5", text: "Cotizacion", image: require("../assets/toyota_icon.png") },
  { id: "6", text: "Spinner", image: require("../assets/spinner_icon.png") },
];

export default function Menu({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.textHeader}>Carlos Eduardo Gonzalez Barboza</Text>
          <Text style={styles.textHeader}>21050309</Text>
          <Text style={styles.textHeader}>Desarrollo Movil</Text>
        </View>
        <Image
          source={require("../assets/user_icon.png")}
          style={{ width: 70, height: 70, resizeMode: "contain" }}
        ></Image>
      </View>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate(item.text)}
            activeOpacity={0.65}
          >
            <Image source={item.image} style={styles.image} />
            <Text style={styles.text}>{item.text}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: "100%",
    backgroundColor: "midnightblue",
    height: 100,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  textHeader: {
    color: "white",
    fontSize: 20,
    fontWeight: "100",
  },

  list: {
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  card: {
    backgroundColor: "white",
    borderWidth: 1.5,
    borderColor: "darkgray",
    borderRadius: 30,
    width: 180,
    height: 180,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  text: {
    fontSize: 20,
    color: "black",
    marginTop: 10,
    fontWeight: "bold",
  },
});
