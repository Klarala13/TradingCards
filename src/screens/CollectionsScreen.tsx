import { Text, View, FlatList, Button, StyleSheet } from "react-native";

export default function CollectionsScreen() {
  const addCollection = () => {
    console.log("Colección añadida a la BBDDD");
  };

  return (
    <View>
      <Text style={styles.text}>Colecciones</Text>
      <FlatList
        data={[{ key: "Fútbol" }, { key: "Marvel" }, { key: "Disney" }]}
        renderItem={({ item }) => <Text style={styles.list}>{item.key}</Text>}
      ></FlatList>
      <Text>
        Añade tu colleción aquí{" "}
        <Button
          onPress={addCollection}
          title="Añadir"
          accessibilityLabel="Añadir colección"
        ></Button>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
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
});
