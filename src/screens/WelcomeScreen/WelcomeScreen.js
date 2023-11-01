import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const onWelcomePressed = () => {
    navigation.navigate("SignIn");
  };

  return (
    <View style={styles.container}>
      <CustomButton
        text="Let's Begin"
        onPress={onWelcomePressed}
        type="PRIMARY"
      />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: "50%",
    padding: 20,
  },
});
