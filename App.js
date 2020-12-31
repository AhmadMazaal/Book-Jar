import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import Colors from "./Constants/Colors";
import HomeScreen from "./Screens/HomeScreen";
import LibraryScreen from "./Screens/LibraryScreen";
import DiscoverScreen from "./Screens/DiscoverScreen";
import AccountScreen from "./Screens/AccountScreen";

import Header from "./Components/Header";

const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
  return (
    <NavigationContainer>
      <Header title="Book Jar" />
      <StatusBar backgroundColor={Colors.aestheticRed} />
      <Tab.Navigator
        initialRouteName="Home"
        activeColor={Colors.aestheticWhite}
        inactiveColor={Colors.aestheticWhite}
        barStyle={{ backgroundColor: Colors.aestheticRed }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Discover"
          component={DiscoverScreen}
          options={{
            tabBarLabel: "Discover",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="lightbulb"
                color={color}
                size={24}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Library"
          component={LibraryScreen}
          options={{
            tabBarLabel: "My Library",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="library-books" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{
            tabBarLabel: "Account",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={24} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
