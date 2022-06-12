import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { FONTS } from "./app/constants/fonts";
import { NativeScreenContainer } from "react-native-screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { OnBoarding } from "./app/screens";
const Stack = createStackNavigator();

const App = () => {
  const [loaded] = useFonts(FONTS);

  if (!loaded) return null;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "BlackBold",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
