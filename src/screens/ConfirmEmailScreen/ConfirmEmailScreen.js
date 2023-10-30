import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocilaSignInButtons/SocialSignInButtons";

const ConfirmEmailScreen = () => {
  const [code, SetCode] = useState();

  const onSignInPressed = () => {
    console.warn("register in");
  };

  const onConfirmPressed = () => {
    console.warn("Confirm code");
  };

  const onResendPressed = () => {
    console.warn("Resend code");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm Email</Text>
        <CustomInput
          placeholder="Enter Your Confirmation Code"
          value={code}
          setValue={SetCode}
        />

        <CustomButton text="Confirm" onPress={onConfirmPressed} />

        <CustomButton
          text="Resend Code"
          onPress={onResendPressed}
          type="SECONDARY"
        />
        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default ConfirmEmailScreen;

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
