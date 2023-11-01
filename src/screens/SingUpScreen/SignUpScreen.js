import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocilaSignInButtons/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordRepeat, SetPasswordRepeat] = useState();

  const navigation = useNavigation();

  const onRegisterPressed = () => {
    navigation.navigate("ConfirmEmailScreen");
  };

  const onTermsOfUsePressed = () => {
    console.warn("Terms and ");
  };

  const onPrivacyPolicyPressed = () => {
    console.warn("Privacy and policy ");
  };

  const onSignInPressed = () => {
    navigation.navigate("SignIn");
  };

  const onSignUpPressed = () => {
    console.warn("Sign up");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create An Account</Text>
        <CustomInput
          placeholder="Username"
          value={userName}
          setValue={setUserName}
        />
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomInput
          placeholder="Repeat Password"
          value={passwordRepeat}
          setValue={SetPasswordRepeat}
          secureTextEntry={true}
        />
        <CustomButton text="Register" onPress={onRegisterPressed} />

        <Text style={styles.text}>
          By register you confirm that you accept our{" "}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            Terms of Use{" "}
          </Text>
          and
          <Text style={styles.link} onPress={onPrivacyPolicyPressed}>
            {" "}
            Private Policy
          </Text>
        </Text>

        <SocialSignInButtons />
        <CustomButton
          text="Have an account? Sign In"
          onPress={onSignInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;

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
