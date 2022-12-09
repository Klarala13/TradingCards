import { Text, View, FlatList, StyleSheet } from "react-native";
import axios from "react-native-axios";
import Button from "./../elements/Button";

const CollectionsScreen = () => {
  //TODO Add collection item itself from inputs
  //TODO Define backend routes and import here
  const addCollection = async () => {
    const config = {
      method: "post",
      //url: `${baseUrl}/collections`,
      url: "http://localhost:3000/collections/",
      headers: {
        "content-type": "text/json",
      },
    };
    const res = await axios(config);
    console.log("response", res.data);

    // const res = await axios.post("/collection", {
    //   id: "4",
    //   name: "Klara",
    //   email: "clara.sanchez@promocionesfarma.com",
    //   numOfAvailableCards: "3",
    // },
  };

  return (
    <View>
      <View>
        <Text style={styles.title}>Colecciones</Text>
        <FlatList
          data={[{ key: "Fútbol" }, { key: "Marvel" }, { key: "Disney" }]}
          renderItem={({ item }) => <Text style={styles.list}>{item.key}</Text>}
        ></FlatList>
      </View>
      <View>
        <Text style={styles.title}>Añade tu colleción aquí </Text>
        <Button
          onPress={addCollection}
          title={"Añadir"}
          style={styles.button}
          accessibilityLabel={"Añadir colección"}
        ></Button>
      </View>
    </View>
  );
};

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
    borderRadius: 5,
    borderWidth: 1,
  },
});

export default CollectionsScreen;
