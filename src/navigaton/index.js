import { View, Text, ActivityIndicator, Button } from "react-native";
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "../../src/screens/SignInScreen/SignInScreen";
import SignUpScreen from "../screens/SingUpScreen/SignUpScreen";
import ConfirmEmailScreen from "../screens/ConfirmEmailScreen/ConfirmEmailScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen/ForgotPasswordScreen";
import NewPasswordScreen from "../screens/NewPasswordScreen/NewPasswordScreen";
import HomeScreen from "../screens/HomeScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import { AuthProvider, useAuth } from "../context/AuthContext";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const { authState, onLogut } = useAuth();

  // if (isLoading) {
  //   <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
  //     <ActivityIndicator size="large" />
  //   </View>;
  // }
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />

          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen
            name="ConfirmEmailScreen"
            component={ConfirmEmailScreen}
          />
          <Stack.Screen
            name="ForgotPasswordScreen"
            component={ForgotPasswordScreen}
          />
          <Stack.Screen
            name="NewPasswordScreen"
            component={NewPasswordScreen}
          />
          {authState?.authenticated ? (
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                headerRight: () => (
                  <Button onPress={onLogut} title="Sign Out" />
                ),
              }}
            />
          ) : (
            <Stack.Screen name="SignIn" component={SignInScreen} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default Navigation;
