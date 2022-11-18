import { Text, View, FlatList, StyleSheet } from "react-native";
import Button from "./../elements/Button";

export default function CollectionsScreen() {
  const addCollection = () => {
    console.log("Colección añadida a la BBDDD");
  };

  return (
    <View>
      <Text style={styles.title}>Colecciones</Text>
      <FlatList
        data={[{ key: "Fútbol" }, { key: "Marvel" }, { key: "Disney" }]}
        renderItem={({ item }) => <Text style={styles.list}>{item.key}</Text>}
      ></FlatList>
      <Text style={styles.title}>Añade tu colleción aquí </Text>
      <Button
        onPress={addCollection}
        title={"Añadir"}
        accessibilityLabel={"Añadir colección"}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    color: "#000",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 24,
    marginTop: 20,
  },

  list: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

  button: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#000",
    color: "#ccc",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#007aff",
  },
});
