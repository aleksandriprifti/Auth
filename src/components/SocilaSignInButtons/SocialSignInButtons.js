import { View, Text } from "react-native";
import React from "react";
import CustomButton from "../../components/CustomButton";

const SocialSignInButtons = () => {
  const onSignInWithFacebook = () => {
    console.warn("Facebook");
  };

  const onSignInWithGoolge = () => {
    console.warn("Google");
  };

  const onSignInWithApple = () => {
    console.warn("Apple");
  };

  return (
    <>
      <CustomButton
        text="Sign In with Facebook"
        onPress={onSignInWithFacebook}
        bgColor="#E7EAF4"
        fgColor="#4765a9"
      />
      <CustomButton
        text="Sign In with Google"
        onPress={onSignInWithGoolge}
        bgColor="#fae9ea"
        fgColor="#dd4d44"
      />
      <CustomButton
        text="Sign In with Apple"
        onPress={onSignInWithApple}
        bgColor="#e3e3e3"
        fgColor="#363636"
      />
    </>
  );
};

export default SocialSignInButtons;
