import {
  NavigationContainer
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { View } from 'react-native-web';
import { LinearGradient } from 'expo-linear-gradient';
import Details from './src/pages/Details';
import Login from './src/pages/Login';
import Screen1 from './src/pages/Screen1';
import Screen2 from './src/pages/Screen2';

const Stack = createNativeStackNavigator();

const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 0)',
    text: '#fff',
    text: '#fff',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme} >
      <StatusBar translucent backgroundColor="transparent" />
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        <LinearGradient
          // colors={['#8430c8', '#4e00ff', '#3100a2']}
          colors={['#fff', '#fefefe']}
          style={{ flex: 1 }}
        >
          <Stack.Navigator initialRouteName='Login' screenOptions={{
            headerShown: true,
            animation: 'slide_from_right',
            headerTransparent: true,
            headerTintColor: 'black',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitle: '',
          }}>
            <Stack.Screen name="Login" component={Login}></Stack.Screen>
            <Stack.Screen name="Details" component={Details} />
            <Stack.Screen name="Screen 1" component={Screen1} />
            <Stack.Screen name="Screen 2" component={Screen2} />
          </Stack.Navigator>
        </LinearGradient>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});