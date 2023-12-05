import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AllExpenses from './app/src/screens/AllExpenses';
import RecentExpenses from './app/src/screens/RecentExpenses';
import ManageExpenses from './app/src/screens/ManageExpenses';
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from './constants/styles';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();
const TopTabs = createMaterialTopTabNavigator();


function ExpensesOverview() {
  return ( 
    <BottomTabs.Navigator
    screenOptions={{
      headerStyle:{
        backgroundColor:GlobalStyles.colors.primary500,
      },
      headerTintColor:'white',
      tabBarActiveTintColor:GlobalStyles.colors.accent500,
      tabBarStyle:{
        backgroundColor:GlobalStyles.colors.primary500
      }
    }}
    >
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          tabBarLabel: "User",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
          tabBarStyle: {
            backgroundColor:GlobalStyles.colors.primary500,
          },

        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          tabBarLabel: "User",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style='auto'/>
      <NavigationContainer>
        <Stack.Navigator 
        screenOptions={{
          contentStyle: { backgroundColor:GlobalStyles.colors.primary500 },
        }}
        >
        <Stack.Screen
            name="ExpensesOverview"
            component={ExpensesOverview}
            options={{headerShown:false}}
          />
          <Stack.Screen
            name="ManageExpenses" // Fix the typo here
            component={ManageExpenses}

          />
        </Stack.Navigator>
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
