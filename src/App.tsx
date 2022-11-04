import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './stacks/HomeStack';
import ProfileStack from './stacks/ProfileStack';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>      
        <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen options={{tabBarIcon:() => <AntDesign name="home" size={24} color="black" />}} name="Home" component={HomeStack} />
          <Tab.Screen options={{tabBarIcon:() => <FontAwesome5 name="person-booth" size={24} color="black" />}} name="Profile" component={ProfileStack} />
        </Tab.Navigator>
      </NavigationContainer>
      
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
