import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {PostScreen, UserScreen, UserListScreen} from './src/index';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Lista de Usuarios"
        headerMode="screen"
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: {backgroundColor: '#000000'},
        }}>
        <Stack.Screen name="Entrada" component={PostScreen} />
        <Stack.Screen name="Usuario" component={UserScreen} />
        <Stack.Screen name="Lista de Usuarios" component={UserListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
