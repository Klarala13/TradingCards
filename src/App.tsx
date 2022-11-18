import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./stacks/HomeStack";
import ProfileStack from "./stacks/ProfileStack";
import CollectionsStack from "./stacks/CollectionsStacks";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer style={styles.container}>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen
            options={{
              tabBarIcon: () => (
                <AntDesign name="home" size={24} color="black" />
              ),
            }}
            name="Home"
            component={HomeStack}
          />
          <Tab.Screen
            options={{
              tabBarIcon: () => (
                <FontAwesome5 name="person-booth" size={24} color="black" />
              ),
            }}
            name="Profile"
            component={ProfileStack}
          />
          <Tab.Screen
            options={{
              tabBarIcon: () => (
                <FontAwesome5 name="address-card" size={24} color="black" />
              ),
            }}
            name="Collections"
            component={CollectionsStack}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
