import * as React from "react";
// import { Text, Box } from "native-base";

import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import { useTheme } from "native-base";

// Import Screen
import Calculator from "../pages/calculator";
import Data from "../pages/datadisplay";
import DetailData from "../pages/datadetail";
import Todos from "../pages/todos";
import AddContact from "../pages/addContact";
import DetailContact from "../pages/detailContact";
import EditContact from "../pages/editContact";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function MyTab() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Calculator"
      screenOptions={({ route }) => ({
        headerMode: "screen",
        headerTintColor: "white",
        headerStyle: { backgroundColor: theme.colors.primary["300"] },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Calculator") {
            iconName = focused ? "calculator" : "calculator-outline";
          } else if (route.name == "Todos") {
            iconName = focused ? "eye" : "eye-outline";
          } else if (route.name == "Tes") {
            iconName = focused ? "eye" : "eye-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.primary["800"],
        tabBarInactiveTintColor: "grey",
      })}
    >
      <Tab.Screen
        name="Calculator"
        component={Calculator}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name="Todos"
        component={Todos}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default function Container() {
  const theme = useTheme();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MyTab}
          options={{
            headerShown: false,
            // title: "Task React Native",
            // headerStyle: {
            //   backgroundColor: "#faf7f7",
            // },
            // headerTintColor: "black",
            // headerTitleStyle: {
            //   fontWeight: "bold",
            // },
            // headerTitleAlign: "center",
          }}
        />

        <Stack.Screen name="DetailData" component={DetailData} />
        <Stack.Screen name="AddContact" component={AddContact} />
        <Stack.Screen name="Todos" component={Todos} />
        <Stack.Screen name="DetailContact" component={DetailContact} />
        <Stack.Screen name="EditContact" component={EditContact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
