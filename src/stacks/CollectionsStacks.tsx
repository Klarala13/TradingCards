import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CollectionsScreen from "@/screens/CollectionsScreen";

const Stack = createNativeStackNavigator();

const Collections = () => (
  <Stack.Navigator>
    <Stack.Screen name="Collection" component={CollectionsScreen} />
  </Stack.Navigator>
);

export default Collections;
