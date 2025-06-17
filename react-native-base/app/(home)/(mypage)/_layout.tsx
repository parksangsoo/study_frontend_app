import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Mypage from ".";
import Me from "./me";
import You from "./you";

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="index" component={Mypage} />
      <Tab.Screen name="me" component={Me} />
      <Tab.Screen name="you" component={You} />
    </Tab.Navigator>
  );
}
