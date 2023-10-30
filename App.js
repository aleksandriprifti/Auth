import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import SignInScreen from "./src/screens/SignInScreen";

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <SignInScreen />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#f9fbfc",
  },
});
