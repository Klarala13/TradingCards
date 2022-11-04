import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator();

const ProfileStack = () => 
<Stack.Navigator>
  <Stack.Screen name="Profile" component={ProfileScreen} />
</Stack.Navigator>

export default ProfileStack