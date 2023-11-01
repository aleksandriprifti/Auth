import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocilaSignInButtons/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";

const ForgotPasswordScreen = () => {
  const [userName, setUserName] = useState();

  const navigation = useNavigation();

  const onSignInPressed = () => {
    navigation.navigate("SignIn");
  };

  const onConfirmPressed = () => {
    console.warn("Confirm code");
  };

  const onResendPressed = () => {
    console.warn("Resend code");
  };

  const onSendPressed = () => {
    console.warn("On send");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your Password</Text>

        <CustomInput
          placeholder="Username"
          value={userName}
          setValue={setUserName}
        />

        <CustomButton text="Send" onPress={onSendPressed} />

        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051c60",
    margin: 10,
  },
  text: { color: "grey", marginVertical: 10 },
  link: { color: "#fdb075" },
});
