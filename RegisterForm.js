import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";

const RegistrationForm = () => {
  const [firstname, setFirstName] = React.useState("");
  const [lastname, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const onClearBtnClicked = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };
  const onSignUpBtnClicked = () => {
    alert(
      `Are you sure those information are correct ? ${firstname} and ${email}`
    );
  };
  return (
    <View style={styles.regform}>
      <Text style={styles.header}>Registration form</Text>
      <TextInput
        value={firstname}
        style={styles.textinput}
        placeholder="Enter your first name"
        onChangeText={(val) => setFirstName(val)}
      />
      <TextInput
        value={lastname}
        style={styles.textinput}
        placeholder="Enter your last name"
        onChangeText={(val) => setLastName(val)}
      />
      <TextInput
        value={email}
        style={styles.textinput}
        placeholder="Enter your email"
        onChangeText={(val) => setEmail(val)}
      />
      <TextInput
        value={pwd}
        secureTextEntry={true}
        style={styles.textinput}
        placeholder="Enter your password"
        onChangeText={(val) => setPwd(val)}
      />

      <TouchableOpacity style={styles.button} onPress={onSignUpBtnClicked}>
        <Text style={styles.btntext}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={onClearBtnClicked}>
        <Text style={styles.btntext}>Clear</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  regform: {
    alignSelf: "stretch",
  },
  header: {
    color: "#ffff",
    fontSize: 28,
    paddingBottom: 9,
    backgroundColor: "red",
    alignItems: "center",
    marginBottom: 35,
  },
  textinput: {
    alignSelf: "stretch",
    height: 55,
    marginBottom: 48,
    color: "#0000",
    borderBottomColor: "green",
    borderBottomWidth: 1,
  },
  button: {
    alignSelf: "stretch",
    alignItems: "center",
    padding: 20,
    backgroundColor: "blue",
    marginTop: 20,
  },
  btntext: {
    color: "#fff",
  },
});

export default RegistrationForm;