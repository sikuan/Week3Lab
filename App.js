import { StyleSheet, Text, View } from "react-native";
import RegisterForm from "./RegisterForm";

export default function App() {
  return (
    <View style={styles.container}>
      <RegisterForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
  },
});