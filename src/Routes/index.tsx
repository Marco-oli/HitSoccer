import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {TableScreen} from '../screens/Table';
import {ListGridScreen} from '../screens/ListGrid';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TeamDetail} from '../screens/TeamDetail';
import {ITeamInfoProps} from '../interfaces/TableData';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export interface IListStackNavigatorProps {
  List: undefined;
  TeamDetail: {team: ITeamInfoProps};
}

const ListStackNavigator: React.FC<IListStackNavigatorProps> = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="List" component={ListGridScreen} />
      <Stack.Screen name="TeamDetail" component={TeamDetail} />
    </Stack.Navigator>
  );
};

export const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{headerShown: false, tabBarActiveTintColor: 'black'}}>
        <Tab.Screen
          name="TableScreen"
          component={TableScreen}
          options={{
            title: 'Tabela',
            tabBarIcon: ({color, size}) => (
              <FontAwesomeIcon name="table" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="List"
          component={ListStackNavigator}
          options={{
            title: 'Lista',
            tabBarIcon: ({color, size}) => (
              <FontAwesomeIcon name="list" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
