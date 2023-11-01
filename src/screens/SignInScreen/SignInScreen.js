import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useEffect, useState, useContext } from "react";
import Logo from "../../../assets/images/Logo_1.png";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocilaSignInButtons/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";
import { AuthContext, useAuth } from "../../context/AuthContext";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, onRegister } = useAuth();

  const navigation = useNavigation();

  const { height } = useWindowDimensions();

  const login = async () => {
    const result = await onLogin(email, password);
    if (result && result.error) {
      alert(result.msg);
    }
  };

  const register = async () => {
    const result = await onRegister(email, password);
    if (result && result.error) {
      alert(result.msg);
    } else {
      login();
    }
  };

  const onSignInPress = () => {
    console.warn("register in");
    //validate user

    navigation.navigate("HomeScreen");
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate("ForgotPasswordScreen");
  };

  const onSignUpPressed = () => {
    navigation.navigate("SignUpScreen");
  };

  text = "Hello\nWellcome Back!";

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <View style={styles.greetingMess}>
          <Text style={styles.text}>{text}</Text>
        </View>
        <View style={styles.buttons}>
          <TextInput
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
        </View>

        <CustomButton
          text="Sign In"
          // onPress={() => {
          //   login();
          // }}
        />

        <CustomButton
          text="Forgot Password"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

        <SocialSignInButtons />

        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
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
  greetingMess: {
    alignSelf: "left",
    paddingTop: 100,
    paddingBottom: 100,
  },
  text: {
    fontSize: 34,
    alignSelf: "right",
  },
  buttons:{
     
  }
});
