
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Jobs from "./src/screens/Jobs/Jobs";
import JobDetail from "./src/screens/JobDetail/JobDetail";


export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="JobsPage"
        component={Jobs}
        options={{
         title: "Jobs App",
         headerStyle: { backgroundColor: "#FF6B6B" },
         headerTitleStyle: { color: "white" ,fontWeight:'bold',fontSize:25},
         headerTitleAlign:'center',
         headerTintColor:'white',
         
        }}
         />
         <Stack.Screen
        name="DetailPage"
        component={JobDetail}
        options={{
         title: "Jobs App",
         headerStyle: { backgroundColor: "#FF6B6B" },
         headerTitleStyle: { color: "white" ,fontWeight:'bold',fontSize:25},
         headerTitleAlign:'center',
         headerTintColor:'white',
         
        }}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
