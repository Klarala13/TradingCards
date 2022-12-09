import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createNativeStackNavigator();

const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Profiles" component={ProfileScreen} />
  </Stack.Navigator>
);

export default ProfileStack;
