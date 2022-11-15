import { Text, View, FlatList, StyleSheet } from "react-native";

export default function ProfileScreen() {
  return (
    <View>
      <Text style={styles.text}>Tus colecciones</Text>
      <FlatList
        data={[{ key: "Fútbol" }, { key: "Marvel" }, { key: "Disney" }]}
        renderItem={({ item }) => <Text style={styles.list}>{item.key}</Text>}
      ></FlatList>
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
