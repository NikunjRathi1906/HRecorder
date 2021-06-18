import React from "react";
import { View } from "react-native";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Icon } from "react-native-elements";

import HomeNavigator from "../Screens/HomeNavigator";
import Settings from "../Screens/SettingsScreen";
import ScanNavigator from "../Screens/ScanNavigator";

export const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        tabBarIcon: () => (
          <View>
            <Icon color="white" name="home" type="font-awesome" />
          </View>
        ),
        activeColor: "#ffffff",
        inactiveColor: "black",
        barStyle: { backgroundColor: "#58B19F" },
      },
    },
    Scan: {
      screen: ScanNavigator,
      navigationOptions: {
        tabBarIcon: () => (
          <View>
            <Icon color="white" name="qrcode" type="font-awesome" />
          </View>
        ),
        activeColor: "#ffffff",
        inactiveColor: "black",
        barStyle: { backgroundColor: "#1B9CFC" },
      },
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        tabBarIcon: () => (
          <View>
            <Icon color="white" name="cog" type="font-awesome" />
          </View>
        ),
        activeColor: "#ffffff",
        inactiveColor: "black",
        barStyle: { backgroundColor: "#F97F51" },
      },
    },
  },
  {
    initialRouteName: "Home",
  }
);
