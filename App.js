import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Authentication from "./Screens/AuthScreen";
import { TabNavigator } from "./components/Navigator";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const SwitchNavigator = createSwitchNavigator({
  Auth: Authentication,
  Home: TabNavigator,
});

const AppContainer = createAppContainer(SwitchNavigator);
