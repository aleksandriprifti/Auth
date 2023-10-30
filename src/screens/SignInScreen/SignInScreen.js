import { View, Text, Image, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import Logo from "../../../assets/images/Logo_1.png";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

const SignInScreen = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {}, []);

  return (
    <View style={styles.root}>
      <Image source={Logo} style={[styles.logo]} resizeMode="contain" />
      <CustomInput
        placeholder="Username"
        value={userName}
        setValue={setUserName}
      />
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <CustomButton />
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: "70%",
    maxWidth: 500,
    maxHeight: 200,
  },
});
