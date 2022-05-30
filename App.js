import { StyleSheet, View } from 'react-native';
import Home from './screen/Home';
import List from './screen/List';
import Profile from './screen/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {AntDesign, MaterialCommunityIcons} from 'react-native-vector-icons';
import {useFonts} from 'expo-font'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  const [ load ] = useFonts({
    Kalam : require('./assets/Kalam-Regular.ttf'),
    PoiretOne : require('./assets/PoiretOne-Regular.ttf'),
    Lobster : require('./assets/Lobster-Regular.ttf')
  })

  if(!load) return false

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: () => {

            if (route.name === 'Home') {
                return <AntDesign name="home" size={30} color='gray' />;
            } else if (route.name === 'List') {
              return <MaterialCommunityIcons name="clipboard-list-outline" size={30} color='gray' />;
            } else if (route.name === 'Profile') {
              return <AntDesign name="user" size={30} color='gray' />;
            };
          },

          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarShowLabel:false
        }
        
        )}
      >
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="List" component={List} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    fontFamily : 'Satisfy'
  },
});
