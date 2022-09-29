import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./src/telas/Home";
import Contato from "./src/telas/Contato";
import Sobre from "./src/telas/Sobre";

import { Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
          <Tab.Screen name="Inicio" component={Home}
          options = {{
             tabBarIcon : ({color, size}) => {
               return <Entypo name="home" size={size} color={color} />
             }
          }}
          />
          <Tab.Screen name="Produtos" component={Contato} 
          options = {{
            tabBarIcon : ({color, size}) => {
              return <Entypo name="bell" size={size} color={color} />
            }
          }}
          />
          <Tab.Screen name="Sobre" component={Sobre} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
