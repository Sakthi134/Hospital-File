import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splashs from './src/Splashs';
import Home from './src/Home';
import Log from './src/Log';
import Map from './src/Map';
import Logh from './src/Logh';
import Login from './src/Login';
import Loginh from './src/Loginh';
import Form from './src/Form';
import Formh from './src/Formh';
import Search from './src/Search';
import Details from './src/Details';
//import Update from './src/Update';

const Stack = createStackNavigator();
const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Splashs" component={Splashs} />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Home',
              headerTintColor: '#4287f5',
            }}
          />
          <Stack.Screen
            name="Log"
            component={Log}
            options={{
              title: 'Log',
              headerTintColor: '#4287f5',
            }}
          />
          <Stack.Screen
            name="Map"
            component={Map}
            options={{
              title: 'Map',
              headerTintColor: '#4287f5',
            }}
          />
          <Stack.Screen
            name="Logh"
            component={Logh}
            options={{
              title: 'Doctor',
              headerTintColor: '#4287f5',
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: 'Login',
              headerTintColor: '#4287f5',
            }}
          />
          <Stack.Screen
            name="Loginh"
            component={Loginh}
            options={{
              title: 'Hospital Login',
              headerTintColor: '#4287f5',
            }}
          />
          <Stack.Screen
            name="Form"
            component={Form}
            options={{
              title: 'Sign Up Form',
              headerTintColor: '#4287f5',
            }}
          />
          <Stack.Screen
            name="Formh"
            component={Formh}
            options={{
              title: 'Doctor Form',
              headerTintColor: '#4287f5',
            }}
          />
          <Stack.Screen
            name="Search"
            component={Search}
            options={{
              title: 'Search',
              headerTintColor: '#4287f5',
            }}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{
              title: 'Appointment',
              headerTintColor: '#4287f5',
            }}
          />
          {/* <Stack.Screen name="Update" component={Update} /> */}
        </Stack.Navigator>
      </NavigationContainer>
  );
};
export default App;
